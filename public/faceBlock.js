function faceBlock(
  env,
  block_no,
  total_blocks,
  ProgressBar,
  stimuli_names,
  disp_map,
  jStat,
  scanner_triggers,
) {
  //Sankalp Garud 2020
  //Runs a block of faces for set duration with acceptance rate determined by
  //the environment
  //map is used to determine which background gets which color/pattern

  //testing a comment for github. okay?

  //parameter declarations
  //t1 is defined as the start time of this block. It is set later in the experiment when the first trial begins.
  var t1;
  var dT = 0;
  var fT;
  var now;
  var feedback_time = 1000; //1 second fixation cross in all environments
  var time_per_block = 150 * 1000; //#seconds times 1000 (time is in milliseconds)
  var time_per_block_MRI = 180 * 1000;
  var p0 = 0;
  var bar;

  var iti1 = 1000; //duration of the feedback stimulus //there's also an extra 1 s of feedback which make the real ITI 2,5 seconds
  // var iti2 = 4000; this was the legacy density ITI

  var block_inst_min_duration = 10 * 1000;
  var block_inst_optional_duration = 10 * 1000;

  var block_end_fixation_duration_online = 5 * 1000;
  var block_end_fixation_duration_MRI = 10 * 1000;

  var face_stim_width = 500;

  var onset_time;

  //this will help fix the time from stimulus to stimulus irrespective of RT
  var avg_rt = 1035;
  var compulsory_response_window = 2000; //this maximises the number of trials for the online task
  var max_allowed_response_time_maintask = 3000;
  var filler_blink_duration = 100;

  var choices_keyboard = ["j", "k"];
  var choices_buttonbox = ["1", "2"];
  var choices;

  var all_choices_buttonbox = ["1", "2", "3", "4"];

  var attention_choices_keyboard = ["f", "g", "h"];
  var attention_choices_buttonbox = ["1", "2", "3"];
  var attention_choices;

  //please update the colors manually below
  var pattern_size;
  var bgstyle;
  var circle_size_current;
  var inst_text;
  var env_type;

  //var bg1 = 'radial-gradient(#A9A9A9 20%, #CCFFCC 20%)'; //green background with grey circles
  //var bg2 = 'radial-gradient(#A9A9A9 20%, #97FFFF 20%)'; //blue background

  //trying new radial gradients of different sizes

  //  var pattern1 = '80px 80px'; //small circles
  //var pattern2 = '160px 160px'; //large circles
  var circle_small =
    "radial-gradient(20px circle at 40px 40px,#A9A9A9 50%,transparent 51%)";
  var circle_large =
    "radial-gradient(40px circle at 40px 40px,#A9A9A9 50%,transparent 51%)";
  var circle_size = [circle_small, circle_large];
  var bg_color_1 = "#CCFFCC"; //green
  var bg_color_2 = "#97FFFF"; //blue
  var bg = [bg_color_1, bg_color_2];

  var pattern_size = "150px 150px"; //large circles

  //var pattern = [pattern1, pattern2];

  var block_array = [];
  var didRequest = 0;
  var didSkip = 0;
  var didTimeout = 0;

  var feedback_pseudor = [];
  //assigning environments based on probabilty and density
  //1 = HIGH PROB + HAPPY, 3 = LOW PROB + HAPPY
  //2 = HIGH PROB + NEUTRAL, 4 = LOW PROB + NEUTRAL
  if (env == 1) {
    feedback_pseudor = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0]; //out of 10, how many accept
    iti = iti1;
    inst_text =
      "We will now enter a new club (" +
      block_no +
      " out of 12). <br> Here, people are more friendly and happy.";
    env_type = "FH";
  } else if (env == 2) {
    feedback_pseudor = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0]; //out of 10, how many accept
    iti = iti1;
    inst_text =
      "We will now enter a new club (" +
      block_no +
      " out of 12). <br> Here, people are more friendly and neutral.";
    env_type = "FN";
  } else if (env == 3) {
    feedback_pseudor = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]; //out of 10, how many accept
    iti = iti1;
    inst_text =
      "We will now enter a new club (" +
      block_no +
      " out of 12) <br> Here, people are less friendly and happy.";
    env_type = "HH";
  } else if (env == 4) {
    feedback_pseudor = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]; //out of 10, how many accept
    iti = iti1;
    inst_text =
      "We will now enter a new club (" +
      block_no +
      " out of 12) <br> Here, people are less friendly and neutral.";
    env_type = "HN";
  }
  bgstyle = bg[disp_map[env - 1].bg];
  circle_size_current = circle_size[disp_map[env - 1].pattern];

  var shuff_feedback = jsPsych.randomization.shuffle(feedback_pseudor);

  //before getting into the logic, lets start with the instructions
  var instructions = {
    type: "instructions",
    pages: [inst_text],
    show_clickable_nav: true,
    on_start: function (trial) {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "white";
      if (block_no == 0) {
        inst_text =
          "We will now enter a new club. <br> Here, people are more friendly and more in number.";
        trial.pages = [inst_text];
      }
    },
  };
  //block_array.push(instructions);

  var online_inst_timeline = {
    timeline: [instructions],
    conditional_function: function () {
      if (task_type == "MRI") {
        time_per_block = time_per_block_MRI;
        return false;
      } else {
        return true;
      }
    },
  };
  block_array.push(online_inst_timeline);

  var inst_MRI_minimum_wait = {
    type: "html-keyboard-response",
    stimulus:
      "We are taking a few seconds break. Please do not move. <br> The experiment will continue shortly.",
    choices: jsPsych.NO_KEYS,
    data: { test_part: "minimum_wait" },
    trial_duration: block_inst_min_duration,
    on_start: function (trial) {
      if (block_no == 0) {
        trial.trial_duration = 0;
      }
      if (block_no == 1) {
        trial.stimulus =
          "Get ready for the game and please do not move througout the session. <br> The experiment will begin shortly.";
      }
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "white";
    },
  };

  var inst_MRI_optional_wait = {
    type: "html-keyboard-response",
    stimulus: inst_text + "<br> Press any button when you are ready to start.",
    choices: all_choices_buttonbox,
    data: { test_part: "optional_wait" },
    trial_duration: block_inst_optional_duration,
    on_start: function (trial) {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "white";
    },
  };

  var mri_inst_timeline = {
    timeline: [inst_MRI_minimum_wait, inst_MRI_optional_wait],
    conditional_function: function () {
      if (task_type == "MRI") {
        return true;
      } else {
        return false;
      }
    },
  };
  block_array.push(mri_inst_timeline);

  nFaces = stimuli_names.length;
  face_array = [];
  feedback_array = [];
  var i;
  for (i = 0; i < nFaces; i++) {
    var gamma_number = jStat.gamma.sample(1.5, 1);
    res_out_delay = Math.min(Math.max(gamma_number, 0), 3.5) * 1000;
    face_array.push({
      image: stimuli_names[i],
      res_out_delay: res_out_delay,
      data: {
        test_part: "stimulus",
        block_no: block_no,
        env: env,
        env_type: env_type,
      },
    });
  }

  var fixation = {
    type: "html-keyboard-response",
    stimulus: "<h2>+</h2>" + clockCode() + keysCode(),
    choices: jsPsych.NO_KEYS,
    trial_duration: iti,
    data: { test_part: "fixation", env: env, block_no: block_no },
    on_start: function (trial) {
      if (task_type == "MRI") {
        trial.stimulus = "<h2>+</h2>" + clockCodeMri();
      }
    },
    on_load: function () {
      onset_time = performance.now();
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function () {
      p0 = fT;
    },
  };

  var random_duration = function () {
    var rand_dur = jsPsych.randomization.sampleWithoutReplacement(
      [400, 500, 600, 700],
      1,
    )[0];
    return rand_dur;
  };

  var fixation_warning = {
    type: "html-keyboard-response",
    stimulus: "<h2><mark>+</mark></h2>" + clockCode() + keysCode(),
    choices: jsPsych.NO_KEYS,
    trial_duration: random_duration,
    data: { test_part: "fixation_warning", env: env, block_no: block_no },
    on_start: function (trial) {
      trial.data = { trial_duration: trial.trial_duration };
      if (task_type == "MRI") {
        //remove the keys code when in the MRI version
        trial.stimulus = "<h2><mark>+</mark></h2>" + clockCodeMri();
      }
    },
    on_load: function () {
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function (data) {
      p0 = fT;
    },
  };

  var image_trial = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable("image"),
    data: jsPsych.timelineVariable("data"),
    stimulus_width: face_stim_width,
    maintain_aspect_ratio: true,
    choices: choices_keyboard, //74 = J, 75 = K
    prompt: keysCode() + clockCode() + '<h2 id = "null">Nulljected</h2>',
    response_ends_trial: true, //because we need a blink to register the response
    on_start: function (trial) {
      //trial.data = jsPsych.timelineVariable('data');
      if (task_type == "MRI") {
        trial.trial_duration =
          max_allowed_response_time_maintask +
          jsPsych.timelineVariable("res_out_delay");
        trial.prompt = clockCodeMri() + '<h2 id = "null">Nulljected</h2>'; //removing keys code
      } else {
        trial.trial_duration = max_allowed_response_time_maintask;
      }

      if (buttonInput == "ON") {
        choices = choices_buttonbox;
        trial.choices = choices;
      } else {
        choices = choices_keyboard;
        trial.choices = choices;
      }
    },
    on_load: function () {
      onset_time = performance.now();
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function (data) {
      data.onset = onset_time;
      data.res_out_delay = jsPsych.timelineVariable("res_out_delay");
      data.ft = fT;
      p0 = fT;
      console.log(data);
    },
  };

  var filler_blink = {
    type: "html-keyboard-response",
    stimulus: "<h2>+</h2>" + clockCode() + keysCode(),
    choices: jsPsych.NO_KEYS,
    trial_duration: filler_blink_duration,
    data: { test_part: "filler_blink", env: env, block_no: block_no },
    on_start: function (trial) {
      if (task_type == "MRI") {
        trial.stimulus = "<h2>+</h2>" + clockCodeMri();
      }
    },
    on_load: function () {
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function (data) {
      data.ft = fT;
      p0 = fT;
    },
  };

  var filler_face = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable("image"),
    stimulus_width: face_stim_width,
    maintain_aspect_ration: true,
    choices: jsPsych.NO_KEYS, //74 = J, 75 = K
    prompt: keysCode() + clockCode() + '<h2 id = "null">Nulljected</h2>',
    on_start: function (trial) {
      var img_trial_data = jsPsych.data
        .get()
        .filter({ test_part: "stimulus" })
        .last(1)
        .values()[0];
      if (task_type == "MRI") {
        trial.trial_duration =
          max_allowed_response_time_maintask +
          jsPsych.timelineVariable("res_out_delay") -
          img_trial_data.rt -
          filler_blink_duration;
        trial.data = {
          trial_duration: trial.trial_duration,
          res_out_delay: jsPsych.timelineVariable("res_out_delay"),
          test_part: "filler_face",
        };
        trial.prompt = clockCodeMri() + '<h2 id = "null">Nulljected</h2>';
      } else {
        //participant is allowed a higher response time but shorter compulsory response window (26 Jul 2023)
        trial.trial_duration = Math.max(
          compulsory_response_window -
            img_trial_data.rt -
            filler_blink_duration,
          0,
        );
        trial.data = { trial_duration: trial.trial_duration };
      }
    },
    on_load: function () {
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function (data) {
      data.test_part = "filler_face";
      data.ft = fT;
      p0 = fT;
      console.log(data);
    },
  };

  //filler timeline is activated when there is a response (assumption being there is time to fill)
  var filler_timeline = {
    timeline: [filler_blink, filler_face],
  };

  //if they fail to respond, give them a too slow warning!
  var too_slow_warning = {
    type: "html-keyboard-response",
    stimulus:
      "<h2><mark>Too slow! <br> <br> Please respond sooner!</mark></h2>" +
      clockCode() +
      keysCode(),
    choices: jsPsych.NO_KEYS,
    trial_duration: feedback_time,
    data: { test_part: "timeout_feedback", env: env, block_no: block_no },
    on_start: function (trial) {
      if (task_type == "MRI") {
        trial.stimulus = "<h2><mark>Too slow!</mark></h2>" + clockCodeMri();
      }
    },
    on_load: function () {
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function () {
      p0 = fT;
    },
  };

  //this is the feedback for the skip trial, which is a fixation cross
  var skip_fixation = {
    type: "html-keyboard-response",
    stimulus: "<h2>+</h2>" + clockCode() + keysCode(),
    choices: jsPsych.NO_KEYS,
    trial_duration: feedback_time,
    data: { test_part: "skip_fixation", env: env, block_no: block_no },
    on_start: function (trial) {
      if (task_type == "MRI") {
        trial.stimulus = "<h2>+</h2>" + clockCodeMri();
      }
    },
    on_load: function () {
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function () {
      p0 = fT;
    },
  };

  //plays this timeline if the didSkip flag was on!
  var if_skip = {
    timeline: [filler_timeline, skip_fixation],
    conditional_function: function () {
      if (didSkip) {
        didSkip = 0;
        return true;
      } else {
        return false;
      }
    },
  };

  //play this timeline if the didTimeout flag is on!
  var if_timeout_timeline = {
    timeline: [too_slow_warning],
    conditional_function: function () {
      if (didTimeout) {
        didTimeout = 0;
        return true;
      } else {
        return false;
      }
    },
  };

  var feedback_trial = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable("image"),
    stimulus_width: face_stim_width, //it's the width, not the duration!!!
    maintain_aspect_ration: true,
    choices: jsPsych.NO_KEYS,
    trial_duration: feedback_time,
    on_start: function (trial) {
      if (didSkip) {
        //didSkip=0;
        //  jsPsych.finishTrial({feedback_given:2, test_part: 'feedback', block_no: block_no});
        // trial.stimulus = null;
        // trial.prompt = '<h2 id = "skip">+</h2>'+clockCode()+keysCode();
        // trial.data = {feedback_given:2, test_part: 'feedback', block_no: block_no};
      } else {
        //trial prompt is feedback scaled with my pseudorandomness
        if (didRequest % 10 == 0) {
          shuff_feedback = jsPsych.randomization.shuffle(shuff_feedback);
        }
        if (shuff_feedback[didRequest % 10] == 0) {
          if (task_type == "MRI") {
            trial.prompt =
              '<h2 id = "rejected_mri">Rejected</h2>' + clockCodeMri();
          } else {
            trial.prompt =
              '<h2 id = "rejected">Rejected</h2>' + clockCode() + keysCode();
          }
          trial.data = {
            feedback_given: 0,
            test_part: "feedback",
            block_no: block_no,
          };
        } else {
          if (task_type == "MRI") {
            trial.prompt =
              '<h2 id = "accepted_mri">Accepted</h2>' + clockCodeMri();
          } else {
            trial.prompt =
              '<h2 id = "accepted">Accepted</h2>' + clockCode() + keysCode();
          }

          trial.data = {
            feedback_given: 1,
            test_part: "feedback",
            block_no: block_no,
          };
        }
      }
    },
    on_load: function () {
      onset_time = performance.now();
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function (data) {
      data.onset = onset_time;
      p0 = fT;
    },
  };

  //decides whether or not to give feedback. If not, then it turns the didSkip flag on.
  var feedback_selection = {
    timeline: [filler_timeline, feedback_trial],
    conditional_function: function () {
      var data = jsPsych.data
        .get()
        .filter({ test_part: "stimulus" })
        .last(1)
        .values()[0];
      //var data = jsPsych.data.get().last(1).values()[0];
      if (data.response == null) {
        didTimeout = 1;
        return false;
      } else {
        if (jsPsych.pluginAPI.compareKeys(data.response, choices[0])) {
          didRequest++;
          return true;
        } else {
          didSkip = 1;
          return false;
        }
      }
    },
  };

  var attention_check = {
    type: "html-keyboard-response",
    stimulus:
      "<h4><mark>Did the previous person accept or reject your request?</mark></h4>",
    choices: attention_choices_keyboard,
    data: { test_part: "attention", env: env, block_no: block_no },
    trial_duration: 5000,
    prompt:
      "<h4> <mark>Press 'f' if they accepted, 'g' if they rejected, or 'h' if you skipped or missed sending the request.</mark></h4>" +
      clockCode(),
    on_start: function (trial) {
      if (buttonInput == "ON") {
        (trial.prompt =
          "<h4> <mark>Press '1' if they accepted, '2' if they rejected, or '3' if you skipped or missed sending the request.</mark></h4>" +
          clockCodeMri()),
          (attention_choices = attention_choices_buttonbox);
        trial.choices = attention_choices;
      } else {
        attention_choices = attention_choices_keyboard;
        trial.choices = attention_choices;
      }
    },
    on_load: function () {
      now = new Date();
      dT = now.getTime() - t1.getTime();
      fT = dT / time_per_block;
      if (task_type == "MRI") {
        clockTickMri();
      } else {
        clockTick();
      }
    },
    on_finish: function () {
      p0 = fT;
    },
  };

  //flags for showing attention checks at 20, 40, 80, 100 seconds
  //var twenty_flag =0;
  var forty_flag = 0;
  var eighty_flag = 0;
  //var hundred_flag =0;
  var attention_check_insert = {
    timeline: [attention_check],
    conditional_function: function () {
      now = new Date();
      dT = now.getTime() - t1.getTime();
      // if(dT>20*1000 && twenty_flag ==0) {
      //   twenty_flag = 1;
      //   return true;
      // }

      //the attention checks are shown at one third and two thirds of the time of the total blocks
      //the flags are called forty and eighty because the original time per block was 120 seconds
      if (dT > time_per_block / 3 && forty_flag == 0) {
        forty_flag = 1;
        return true;
      } else if (dT > (time_per_block * 3) / 2 && eighty_flag == 0) {
        eighty_flag = 1;
        return true;
      }
      // else if(dT>100*1000 && hundred_flag ==0) {
      //   hundred_flag = 1;
      //   return true;
      // }
      else {
        return false;
      }
    },
  };

  var time_check = function () {
    now = new Date();
    dT = now.getTime() - t1.getTime();
    fT = dT / time_per_block;
    if (dT >= time_per_block) {
      jsPsych.endCurrentTimeline();
    }
  };

  var time_call = {
    type: "call-function",
    func: time_check,
  };

  var face_block = {
    timeline: [
      fixation,
      time_call,
      fixation_warning,
      image_trial,
      feedback_selection,
      if_skip,
      if_timeout_timeline,
      attention_check_insert,
    ],
    timeline_variables: face_array,
    on_timeline_start: function () {
      t1 = new Date();
      // console.log(t1.getTime());
      //$('body').css('background-color,"red"');
      document.body.style.backgroundColor = bgstyle;
      document.body.style.backgroundImage = circle_size_current;
      document.body.style.backgroundSize = pattern_size;
    },
    sample: {
      type: "without-replacement",
      randomize_order: true,
      size: nFaces,
    },
  };
  block_array.push(face_block);

  var block_end_fixation = {
    type: "html-keyboard-response",
    stimulus: "<h2>+</h2>",
    choices: jsPsych.NO_KEYS,
    trial_duration: block_end_fixation_duration_MRI,
    data: { test_part: "block_end_fixation", env: env, block_no: block_no },
    on_start: function (trial) {
      if (task_type == "MRI") {
        trial.stimulus = "<h2>+</h2>" + clockCodeMri();
      } else {
        trial.trial_duration = block_end_fixation_duration_online;
      }
    },
    on_load: function () {
      onset_time = performance.now();
    },
    on_finish: function () {
      p0 = fT;
    },
  };
  block_array.push(block_end_fixation);

  var liking_prompt = {
    type: "html-slider-response",
    stimulus: "<h3><mark>How much did you like this club?</mark></h3>",
    labels: [
      "<h3> <mark> Not at all </mark></h3>",
      "<h3> <mark>Very much </mark></h3>",
    ],
    prompt: "<p><mark>Please use your mouse to drag the slider</mark></p>",
    slider_width: 800,
    require_movement: true,
    data: { test_part: "liking" },
    on_start: function (trial) {
      if (task_type == "MRI") {
        trial.prompt = "";
      }
    },
    on_load: function () {
      document.querySelector("input").focus();
    },
    on_finish: function (data) {},
  };
  block_array.push(liking_prompt);

  var balance_prompt = {
    type: "html-slider-response",
    stimulus:
      "<h3><mark>Did you find a good balance for sending friend requests in this club?</mark></h3>",
    labels: [
      "<h3> <mark>No, not at all</mark></h3>",
      "<h3> <mark>Absolutely yes</mark></h3>",
    ],
    prompt: "<p><mark>Please use your mouse to drag the slider</mark></p>",
    data: { test_part: "balance" },
    slider_width: 800,
    require_movement: true,
    on_start: function (trial) {
      if (task_type == "MRI") {
        trial.prompt = "";
      }
    },
    on_load: function () {
      document.querySelector("input").focus();
    },
  };
  block_array.push(balance_prompt);

  var happiness_prompt = {
    type: "html-slider-response",
    stimulus: "<h3><mark>How do you feel after visiting this club?</mark></h3>",
    labels: [
      "<h3> <mark> Very unhappy </mark></h3>",
      "<h3> <mark>Very Happy </mark></h3>",
    ],
    prompt: "<p><mark>Please use your mouse to drag the slider</mark></p>",
    slider_width: 800,
    require_movement: true,
    on_load: function () {
      document.querySelector("input").focus();
    },
    on_start: function (trial) {
      //here previous block refers to the block that just happened, and now these prompts/sliders are presented

      if (task_type == "MRI") {
        trial.prompt = "";
      }
      var prev_block_no = block_no;
      var prev_block_faces = jsPsych.data
        .get()
        .filter({ test_part: "stimulus", block_no: prev_block_no })
        .count();
      var prev_block_timeouts = jsPsych.data
        .get()
        .filter({
          test_part: "stimulus",
          block_no: prev_block_no,
          response: null,
        })
        .count();
      var prev_block_rt = jsPsych.data
        .get()
        .filter({ test_part: "stimulus", block_no: prev_block_no })
        .select("rt")
        .mean();
      var prev_block_requests = jsPsych.data
        .get()
        .filter({
          test_part: "stimulus",
          block_no: prev_block_no,
          response: choices[0],
        })
        .count();
      var prev_block_skips = jsPsych.data
        .get()
        .filter({
          test_part: "stimulus",
          block_no: prev_block_no,
          response: choices[1],
        })
        .count();
      var prev_block_attention = jsPsych.data
        .get()
        .filter({ test_part: "attention", block_no: prev_block_no })
        .select("response")
        .count();
      var prev_block_accepted = jsPsych.data
        .get()
        .filter({
          test_part: "feedback",
          block_no: prev_block_no,
          feedback_given: 1,
        })
        .count();
      var acceptance_rate = prev_block_accepted / prev_block_requests;

      if (task_type == "MRI") {
        console.log("Timeout rate: " + prev_block_timeouts / prev_block_faces);
      }
      trial.data = {
        test_part: "happy",
        env: env,
        block_no: prev_block_no,
        block_faces: prev_block_faces,
        block_timeouts: prev_block_timeouts,
        block_requests: prev_block_requests,
        block_skips: prev_block_skips,
        block_accepted: prev_block_accepted,
        acceptance_rate: acceptance_rate,
        attention_checks: prev_block_attention,
      };
    },
    on_finish: function (data) {
      data.scanner_triggers_blockwise = scanner_triggers;
    },
  };
  block_array.push(happiness_prompt);

  // var assimilation_block = {
  //   type: 'html-keyboard-response',
  //   stimulus: '<p> You sent n friend requests in the last block, and m many were accepted</p> <br><br>  <p>Press any key to continue. </p>',
  //   on_start: function(trial) {
  //     var prev_block_no = jsPsych.data.get().last(1).select('block_no').values[0];
  //     var prev_block_faces = jsPsych.data.get().filter({test_part:'stimulus', block_no: prev_block_no}).count();
  //     var prev_block_requests = jsPsych.data.get().filter({test_part:'stimulus', block_no: prev_block_no, key_press: 74}).count();
  //     var prev_block_accepted = jsPsych.data.get().filter({test_part:'feedback', block_no: prev_block_no, feedback_given: 1}).count();
  //     var acceptance_rate = prev_block_accepted/prev_block_requests;
  //     trial.stimulus = '<h4><mark> In the last block, out of the '+prev_block_faces+' people shown,'+
  //     ' you sent friend requests to '+prev_block_requests+' people, and '+prev_block_accepted+' of them accepted <br><br> There are '+ (total_blocks-block_no)+ ' blocks remaining <br><br> Press any key to continue </h4></mark>';
  //     trial.data = {test_part: 'assimilation', env: env, block_no: prev_block_no, block_faces: prev_block_faces, block_requests: prev_block_requests, block_accepted: prev_block_accepted, acceptance_rate: acceptance_rate};
  //   },
  // };
  //  block_array.push(assimilation_block); this block is no longer pushed

  var block = {
    timeline: block_array,
  };

  return block; // The function returns the product of p1 and p2

  function clockCode() {
    return '<div id="container">' + "</div>";
  }

  function clockCodeMri() {
    return '<div id="container_mri">' + "</div>";
  }

  function keysCode() {
    return '<h4 id = "keys"><mark>Press "J" to send friend request, or "K" to move to the next person</mark></h4>';
  }

  //bar sets progress to fT (fraction of time completed), and then animates it with duration remaining time
  function clockTick() {
    time_remaining = time_per_block - dT;
    bar = new ProgressBar.Circle(container, {
      strokeWidth: 6,
      duration: time_remaining,
      color: "black",
      trailColor: "grey",
      trailWidth: 1,
      svgStyle: null,
    });
    bar.set(fT);
    bar.animate(1, { duration: time_remaining });
    return bar;
  }

  function clockTickMri() {
    time_remaining = time_per_block - dT;
    bar = new ProgressBar.Circle(container_mri, {
      strokeWidth: 6,
      duration: time_remaining,
      color: "black",
      trailColor: "grey",
      trailWidth: 1,
      svgStyle: null,
    });
    bar.set(fT);
    bar.animate(1, { duration: time_remaining });
    return bar;
  }
}
