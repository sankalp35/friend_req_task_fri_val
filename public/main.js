//This file contains instructions, and defines sequence of the TASK
//It also saves some data in the "happy block"
//-SG

//Get global parameters. Previously inputted through jatos, now declared here globally after the switch to pavlovia
global.task_type = "ONLINE"; //MRI or ONLINE
global.buttonInput = "OFF"; //ON for button box
global.debugMode = "ON"; // ON or OFF. Skips the initial part of the task
global.practiceMode = "OFF"; //Starts practice block for MRI briefing

//get URL parameters
const prolific_id = jsPsych.data.getURLVariable("PROLIFIC_PID");
const session_id = jsPsych.data.getURLVariable("SESSION_ID");

//start off with the timeline
var timeline = [];

var scanner_triggers = [];

//parameter declarations
var inst_bgcolor = "white";

var nav_key_buttonbox = ["1", "2"];
var nav_key;

var global_fontSize_mri = "30px";

var first_scan_trigger;

dm1 = jsPsych.randomization.shuffle([1, 2, 3, 4]);
dm2 = jsPsych.randomization.shuffle([1, 2, 3, 4]);

design_matrix = dm1.concat(dm2); //RANDOMIZED

var total_blocks = design_matrix.length + 1; //plus 1 is added for the practice block
//0th block will be the practice block

var full_screen_exits = 0;

//initialising the faces array
var faces = new Array();
faces = cfd_array_happy_neutral(design_matrix);
console.log(faces);
console.log(design_matrix);

//prepare to randomise bgcolor and pattern_size
bg_coinflip = jsPsych.randomization.shuffle([0, 1]); //0 represents green, 1 blue
pattern_coinflip = jsPsych.randomization.shuffle([0, 1]); //0 represents small circles, 1 large

//display map is unique for every participant
var display_map = [
  { bg: bg_coinflip[0], pattern: pattern_coinflip[0] }, //env 1 will get these colours
  { bg: bg_coinflip[0], pattern: pattern_coinflip[1] }, //env 2
  { bg: bg_coinflip[1], pattern: pattern_coinflip[0] },
  { bg: bg_coinflip[1], pattern: pattern_coinflip[1] },
];

/* init connection with pavlovia.org */
// var pavlovia_init = {
// 	type: "pavlovia",
// 	command: "init"
// };
// timeline.push(pavlovia_init);

//create array for preloading all images
var preload_im = [];
preload_im.push(faces);
preload_im.push([
  "assets/inst-screen.png",
  "assets/inst-acc.png",
  "assets/green_small.png",
  "assets/blue_large.png",
  "assets/inst-comp.png",
]);

//node imports, getting fancy with npm
var ProgressBar = require("progressbar.js");
var { jStat } = require("jstat");

var preload = {
  type: "preload",
  auto_preload: true, // automatically load all files based on the main timeline
  images: preload_im,
  on_finish: function (data) {
    data.prolific_id = prolific_id;
    console.log(prolific_id);
  },
};
timeline.push(preload);

//get into full screen mode at the start
timeline.push({
  type: "fullscreen",
  data: { test_part: "full-screen" },
  fullscreen_mode: true,
  on_start: function () {
    if (task_type == "MRI") {
      document.body.style.fontSize = global_fontSize_mri;
      var scannerListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: record_scan_trigger,
        valid_responses: ["5"],
        rt_method: "performance",
        persist: true,
      });
    }
  },
  on_finish: function (data) {},
});

var collect_demographics = {
  type: "survey-html-form",
  preamble: "<p>Please enter the following details:</p>",
  html:
    '<p> What is your age: <input name ="age" type = "number" min =18 max=40 required/> <br><br>' +
    'What is your level of English fluency? <select name="english_fluency" required> <option value="" selected disabled hidden>Choose here</option><option value="2">Native speaker or otherwise fluent</option><option value="1">Moderate</option><option value="0">Basic</option></select><br><br>' +
    'What is your gender: <select name="gender" required> <option value="" selected disabled hidden>Choose here</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select><br><br>' +
    'What is your dominant hand: <select name="handedness" required> <option value="" selected disabled hidden>Choose here</option><option value="left">Left</option><option value="right">Right</option><option value="ambidexterous">Ambidextorous</option></select><br><br>' +
    'What is your visual acuity? If you are wearing lenses, please select your visual acuity WITH your lenses on: <select name="vision" required> <option value="" selected disabled hidden>Choose here</option><option value="2">Excellent visual acuity (20/20)</option><option value="1">Moderate visual acuity</option><option value="0">Poor or impaired vision</option></select><br><br>',
  on_finish: function (data) {},
};

var landing_page = {
  type: "instructions",
  pages: [
    "Welcome to the experiment! Before we explain what game you will play, you first need to read the information sheet,<br>" +
      "and give your consent to participate in this study. <br>" +
      "Important: throughout this entire session, please do NOT refresh or reload the page at any time. <br>" +
      "Refreshing the page terminates the session and ends the study. <br>" +
      "Please press next to continue",
  ],
  show_clickable_nav: true,
  on_start: function () {
    document.body.style.backgroundColor = inst_bgcolor;
  },
  on_load: function () {},
};

//function to check info sheet checked
var info_check = function (elem) {
  if (document.getElementById("infoSheetCheckbox").checked) {
    return true;
  } else {
    alert(
      "If you wish to participate, you must check the box next to the statement 'I have read and understood this information.'",
    );
    return false;
  }
  return false;
};

// declare the block.
var info_block = {
  type: "external-html",
  url: "infoSheet.html",
  cont_btn: "infoSheetButton",
  check_fn: info_check,
};

//consent form
var consent_check = function (elem) {
  if (
    document.getElementById("consent1").checked &&
    document.getElementById("consent2").checked &&
    document.getElementById("consent3").checked &&
    document.getElementById("consent4").checked &&
    document.getElementById("consent5").checked &&
    document.getElementById("consent6").checked &&
    document.getElementById("consent7").checked &&
    document.getElementById("consent8").checked &&
    document.getElementById("consent9").checked
  ) {
    return true;
  } else {
    alert("If you wish to participate, you must check all boxes'");
    return false;
  }
  return false;
};

// declare the block.
var consent_block = {
  type: "external-html",
  url: "consentForm.html",
  cont_btn: "giveConsentButton",
  check_fn: consent_check,
};

//before getting into the logic, lets start with the instructions
//original dimensions of the instructions image is 400x317
var instructions_task = {
  type: "instructions",
  pages: [
    "We will now explain what you will have to do in this game. Please read the instructions that follow carefully.<br>" +
      "We can only let you take part in this study if you correctly answer some multiple choice questions that will follow the instructions. <br>" +
      "The questions are intended to ensure you fully understand the instructions. Please pay close attention to the instructions.<br>" +
      "Press next to continue. <br>",
    "Imagine that you have moved to a new city, and are looking to make friends. <br>In the game that follows, you will be taken through different clubs and will be given a chance to send friend requests.<br>" +
      "Your overall goal is to act in a way that would naturally make you feel happy and fulfilled. <br>" +
      "This could mean different things at different times:<br> sometimes you might try and send friend requests to befriend people and at other times you might choose not to send friend requests.<br>" +
      "This decision is entirely up to you.<br><br>",
    'To send a friend request to a specific person, you should press the "J" key on your keyboard. <br>' +
      'If you do not wish to send a friend request and move on to the next person, press the "K" key. <br>' +
      "The face on the screen will flicker to indicate that your response was registered.<br>" +
      "A typical screen will look like this: <br> <br>" +
      '<img src="assets/inst-screen.png" alt="Instructions screenshot" style="width:600px;height:476px;">',
    "If you choose to send a friend request, the next screen will tell you whether <br> the person accepted or rejected your request. <br>" +
      "There will be a short delay between your response and the outcome. <br><br>" +
      '<img src="assets/inst-acc.png" alt="Instructions screenshot" style="width:600px;height:476px;">',
    'You will have 3 seconds to make a response. If you do not respond in time, a "too slow" warning will appear on the screen.<br>' +
      "If you get this warning, it means that you need to be faster in your responses. <br>" +
      "Please try and respond to every face that is shown<br>" +
      "A warning screen will look like this: <br> <br>" +
      '<img src="assets/too_slow_screen.png" alt="Too slow screenshot" style="width:600px;height:476px;">',
    "You will play multiple rounds of this game. Each round will last two and a half minutes. <br>" +
      "The timer on the right will show the time elapsed (thick line of the circle), and the time remaining (thin line of the circle). <br><br>" +
      '<img src="assets/inst-screen.png" alt="Instructions screenshot" style="width:600px;height:476px;">',
    "At the end of each club, you will be asked how much you liked the club. <br>" +
      "You will have to indicate your response on a sliding scale, like the one shown below. <br><br>" +
      '<img src="assets/liking.png" alt="Instructions screenshot" style="width:600px;height:476px;">',
    "At the end of each club, you will also be asked if you were able to find a good balance for sending friend requests in that club. <br>" +
      "You will have to indicate your response on a sliding scale, like the one shown below. <br><br>" +
      '<img src="assets/balance.png" alt="Instructions screenshot" style="width:600px;height:476px;">',
    "Finally, you will also be asked how happy you felt after going through that club. <br>" +
      "Again, use the sliding scale to indicate your response. <br<br><br><br>" +
      '<img src="assets/happy.png" alt="Instructions screenshot" style="width:600px;height:476px;">',
    "The colour of the background (blue versus green) will tell you how friendly people are in that club. <br>" +
      "One colour means people are less friendly, and the other means people are more friendly in that club. <br><br>" +
      '<img src="assets/green_large.png" alt="Instructions screenshot" style="width:300px;height:238px;"><img src="assets/blue_small.png" alt="Instructions screenshot" style="width:300px;height:238px;"><br>' +
      '<img src="assets/green_small.png" alt="Instructions screenshot" style="width:300px;height:238px;"><img src="assets/blue_large.png" alt="Instructions screenshot" style="width:300px;height:238px;"><br>',
    "You will also notice circles in the background come in smaller and larger sizes. <br>" +
      "This will indicate whether you will encounter more or less people in that club. <br><br>" +
      '<img src="assets/green_large.png" alt="Instructions screenshot" style="width:300px;height:238px;"><img src="assets/blue_small.png" alt="Instructions screenshot" style="width:300px;height:238px;"><br>' +
      '<img src="assets/green_small.png" alt="Instructions screenshot" style="width:300px;height:238px;"><img src="assets/blue_large.png" alt="Instructions screenshot" style="width:300px;height:238px;"><br>',
    "Every now and then, there will be an occasional question about the outcome of the previous trial. <br>" +
      "We will ask you whether the previous person accepted or rejected your request, or if you skipped or missed sending the request.<br>" +
      'Please use the "F" key on your keyboard to indicate acceptance, "G" to indicate rejection, or "H" to indicate a skip/miss. <br>' +
      "This question is designed to ensure you are paying attention and we will not be telling you whether you answered it correctly. <br>" +
      "You will have 5 seconds to answer this question. Here is how the screen for this question will look like: <br><br>" +
      '<img src="assets/attentioncheck-inst.png" alt="Attention check screenshot" style="width:600px;height:476px;">',
    'During the game, please place your left hand on the keys "F","G", and "H" using your index, middle, and ring finger. <br>' +
      'Similarly, please place your right hand on keys "J" and "K" using your index and middle finger. <br>' +
      "Kindly stay in this position throughout the game.<br>" +
      "Please press next to continue",
    "The entire task is divided into three sections.<br>" +
      "In the first and last sections, you will be asked certain questions about yourself. <br>" +
      "In the middle section, you will play 12 rounds of the game that we described earlier. <br>" +
      "Because all aspects of this session (questionnaires and task) are important to us, to encourage completion, you will be paid £2 as a bonus for completion. <br>" +
      "This bonus payment will only be awarded if you complete the game in full and answer all questions satisfactorily. The entire task takes about an hour to complete. <br>" +
      "Please press next to continue",
    "Those were all the instructions.<br>" +
      "You will now be given 1 practice round to get used to the game.<br>" +
      "At the end of the round, you will be tested to ensure you have understood all instructions. <br>" +
      "Please press next to begin the practice round.",
  ],
  show_clickable_nav: true,
  on_start: function (trial) {
    if (buttonInput == "ON") {
      nav_key = nav_key_buttonbox[1]; //THIS KEY IS 1
      trial.show_clickable_nav = false;
      trial.allow_keys = true;
      trial.key_forward = nav_key;
      trial.key_backward = nav_key_buttonbox[0];
    } else {
      nav_key = "next";
    }
    document.body.style.backgroundColor = inst_bgcolor;
  },
};

//A wee little practice block here
//env =1 , block_no = 0, 0th block is practice block
practice_faceBlock = faceBlock(
  2,
  0,
  total_blocks - 1,
  ProgressBar,
  faces[0],
  display_map,
  jStat,
  scanner_triggers,
);

//We shall now test to see whether participants understand our instructions
var sanity_check_passed = 0;
var fail_counter = 0;
page_1_options = [
  "To find the correct answer",
  "To send friend requests",
  "To respond as quickly as possible",
];
page_2_options = ["2.5 minutes", "5 minutes", "10 minutes"];
page_3_options = [
  "People are going to be more or less friendly",
  "I will encounter more or fewer people",
  "Both of the above",
  "None of the above",
];
page_4_options = [
  "Friendliness of the block",
  "Number of people you'll encounter",
  "None of the above",
];
page_5_options = ["True", "False"];
var multi_choice_inst = {
  type: "survey-multi-choice",
  questions: [
    {
      prompt: "What's your task for this study?",
      name: "purpose",
      options: page_1_options,
      required: true,
    },
    {
      prompt: "How long does each round last?",
      name: "time",
      options: page_2_options,
      required: true,
    },
    {
      prompt:
        "If there is a change of color between one round and the next, this means?",
      name: "colour",
      options: page_3_options,
      required: true,
    },
    {
      prompt: "What does the size of circles in the background indicate?",
      name: "density",
      options: page_4_options,
      required: true,
    },
    {
      prompt:
        "In the round with a blue background, you will encounter more men than women.",
      name: "tf",
      options: page_5_options,
      required: true,
    },
  ],
  on_start: function () {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = inst_bgcolor;
  },
  on_finish: function (data) {
    data.fail_counter = fail_counter;
    console.log(data);
    var response = data.response;
    if (
      response.purpose == page_1_options[1] &&
      response.time == page_2_options[0] &&
      response.colour == page_3_options[0] &&
      response.density == page_4_options[1] &&
      response.tf == page_5_options[1]
    ) {
      sanity_check_passed = 1;
    } else {
      sanity_check_passed = 0;
      fail_counter++;
    }
  },
};

//checking whether they got their options correctss
var sanity_check = {
  type: "html-button-response",
  stimulus: "",
  choices: ["Next"],
  on_start: function (trial) {
    if (sanity_check_passed == 1) {
      trial.stimulus =
        "Congratulations, you passed the test. You are now ready to begin. <br> To reiterate, your overall aim is to balance sending friend requests in a way that will naturally make you feel happy and fulfilled. <br> Remember you will receive a bonus payment for completing the task in full!";
    } else if (sanity_check_passed == 0 && fail_counter == 1) {
      trial.stimulus =
        "Unfortunately, you did not get all answers correct. <br>" +
        "You will now be sent back to the instructions.";
    } else {
      trial.stimulus =
        "At least one of your answer was incorrect. We unfortunately cannot continue with the experiemnt, and it will end now";
    }
  },
  on_finish: function () {
    if (fail_counter > 1) {
      jsPsych.endExperiment("Experiment Ended");
    }
  },
};

//if they fail the sanity check, replay instructions only (and not the practice block)
var if_sanityFail = {
  timeline: [instructions_task, multi_choice_inst, sanity_check],
  conditional_function: function () {
    if (sanity_check_passed == 1) {
      return false;
    } else {
      return true;
    }
  },
};

//Add starting questionnaires here.
var qn_firstHalf_inst = {
  type: "instructions",
  pages: [
    "As explained earlier, before we start with the game, we will now ask you to fill out some questionnaires. <br>" +
      "Please read each question carefully and answer the questions one by one. <br>" +
      "You do not need to think hard or long about each question, just try and give an intuitive answer. <br>" +
      "Remember to never refresh the page at any point during this entire study. <br>" +
      "Please press next to continue",
  ],
  show_clickable_nav: true,
  on_start: function () {
    document.body.style.backgroundColor = inst_bgcolor;
  },
};
//timeline.push(qn_firstHalf_inst);

var pretask_inst_timeline = {
  timeline: [
    collect_demographics,
    landing_page,
    info_block,
    consent_block,
    instructions_task,
    practice_faceBlock,
    multi_choice_inst,
    sanity_check,
    if_sanityFail,
    qn_firstHalf_inst,
  ],
  conditional_function: function () {
    if (debugMode == "ON" || task_type == "MRI") {
      return false;
    } else {
      return true;
    }
  },
};
timeline.push(pretask_inst_timeline);

var practice_timeline = {
  timeline: [practice_faceBlock],
  conditional_function: function () {
    if (practiceMode == "ON") {
      return true;
    } else {
      return false;
    }
  },
};
timeline.push(practice_timeline);

qn_timeline_first_half = {
  timeline: [
    SHAPS([1, 10]),
    UCLA([2, 10]),
    BDI([3, 10]),
    LHS([4, 10]),
    RSE([5, 10]),
    RQ([6, 10]),
    PSQ([7, 10]),
    SPQ([8, 10]),
    NIHEmotionalSupport([9, 10]),
    NIHFriendship([10, 10]),
  ],
  conditional_function: function () {
    if (task_type == "MRI" || debugMode == "ON") {
      return false;
    } else {
      return true;
    }
  },
};
//timeline.push(qn_timeline_first_half);

//Signal the start of the main task
var main_task_begin = {
  type: "instructions",
  pages: [
    "We are now ready to begin our game. <br>" +
      "Please press next to continue",
  ],
  show_clickable_nav: true,
  data: { test_part: "inst_pre_main_task" },
  on_start: function (trial) {
    if (task_type == "MRI") {
      trial.show_clickable_nav = false;
      trial.key_forward = "5";
      trial.pages = [
        "We are now ready to begin our game. <br>" +
          "Please wait for the game to start",
      ];
    }
    document.body.style.backgroundColor = inst_bgcolor;
  },
};
timeline.push(main_task_begin);

//1 = HIGH PROB + HIGH DENSITY, 3 = LOW PROB + HIGH DENSITY
//2 = HIGH PROB + LOW DENSITY, 4 = LOW PROB + LOW DENSITY
var block_no;
//make a block structure loop
for (block_no = 1; block_no < total_blocks; block_no++) {
  var env = design_matrix[block_no - 1]; //indices of design matrix run from 0-11
  var face_block = faceBlock(
    env,
    block_no,
    total_blocks - 1,
    ProgressBar,
    faces[block_no],
    display_map,
    jStat,
    scanner_triggers,
  );
  timeline.push(face_block);
}

// var survey_trial = {
//   type: 'survey-text',
//   preamble: 'A few final questions',
//   questions: [
//     {prompt: "Did the task run well, and were all instructions clear?"},
//     {prompt: "What made you send friend requests, and how did that change from round to round. Did, if at all, people being more or less friendly, or more or less in number matter?"}
//   ],
//   on_start:function(){
//     document.body.style.backgroundImage = "none";
//     document.body.style.backgroundColor = inst_bgcolor;
//   },
// };
// //timeline.push(survey_trial);

var end_page = {
  type: "html-button-response",
  stimulus:
    "You are now done playing the game. . <br>" +
    "Importantly, we still ask you to complete a few more questionnaires before completing the study. <br>" +
    "Please make sure to complete all of them to receive your bonus payment.<br>",
  choices: ["Next"],
  on_start: function (trial) {
    if (task_type == "MRI") {
      trial.stimulus =
        "We are now finishing with the study. Thank you for your participation.";
    }
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = inst_bgcolor;
  },
  on_finish: function (data) {
    //make some data easy to read
    //trial wise
    all_data = jsPsych.data.get();
    data.test_part = "end_page";
    data.choices = all_data
      .filter({ test_part: "stimulus" })
      .select("response").values;
    data.rTime = all_data.filter({ test_part: "stimulus" }).select("rt").values;
    data.faceName = all_data
      .filter({ test_part: "stimulus" })
      .select("stimulus").values;
    data.blockNo = all_data
      .filter({ test_part: "stimulus" })
      .select("block_no").values;
    data.trialwise_env = all_data
      .filter({ test_part: "stimulus" })
      .select("env").values;
    data.clockStatus = all_data
      .filter({ test_part: "stimulus" })
      .select("ft").values;
    data.feedback = all_data
      .filter({ test_part: "feedback" })
      .select("feedback_given").values;

    //block wise (information is assimilated during the happy block)
    data.bNo = all_data
      .filter({ test_part: "happy" })
      .select("block_no").values;
    data.benv = all_data.filter({ test_part: "happy" }).select("env").values;
    data.bnFaces = all_data
      .filter({ test_part: "happy" })
      .select("block_faces").values;
    data.bRequests = all_data
      .filter({ test_part: "happy" })
      .select("block_requests").values;
    data.bSkips = all_data
      .filter({ test_part: "happy" })
      .select("block_skips").values;
    data.bTimeouts = all_data
      .filter({ test_part: "happy" })
      .select("block_timeouts").values;
    data.bAccepted = all_data
      .filter({ test_part: "happy" })
      .select("block_accepted").values;
    data.bAccRate = all_data
      .filter({ test_part: "happy" })
      .select("acceptance_rate").values;
    data.brt = all_data.filter({ test_part: "happy" }).select("rt").values; //rt is mean rt for the block
    data.battention = all_data
      .filter({ test_part: "happy" })
      .select("attention_checks").values;

    //prompt answers, blockwise
    data.bHappy = all_data
      .filter({ test_part: "happy" })
      .select("response").values;
    data.bBalance = all_data
      .filter({ test_part: "balance" })
      .select("response").values;
    data.bLiking = all_data
      .filter({ test_part: "liking" })
      .select("response").values;

    //prompt rt, blockwise
    data.bHappy_rt = all_data
      .filter({ test_part: "happy" })
      .select("rt").values;
    data.bBalance_rt = all_data
      .filter({ test_part: "balance" })
      .select("rt").values;
    data.bLiking_rt = all_data
      .filter({ test_part: "liking" })
      .select("rt").values;

    data.scanner_triggers = scanner_triggers;

    data.interactionData = JSON.stringify(
      jsPsych.data.getInteractionData().json(),
    );

    jsPsych.data.addProperties({ runId: session_id });

    if (task_type == "MRI") {
      jatos.endStudyAndRedirect(
        "https://ox.ac.uk",
        true,
        "VERIFIED FINISHED MRI -SG",
      );
    }
  },
};
timeline.push(end_page);

qn_timeline_second_half = {
  timeline: [
    howPersonalQ([1, 11]),
    SCS([2, 11]),
    OCIR([3, 11]),
    LSNS([4, 11]),
    AMI([5, 11]),
    UPPSP([6, 11]),
    LSAanx([7, 11]),
    STICSA([8, 11]),
    TIPI([9, 11]),
    repeatQ([10, 11]),
    customQ([11, 11]),
  ],
  conditional_function: function () {
    if (task_type == "MRI" || debugMode == "ON") {
      return true;
    } else {
      return true;
    }
  },
};
timeline.push(qn_timeline_second_half);

// declare the block.
var mental_health_block = {
  type: "external-html",
  url: "mental_health.html",
  cont_btn: "exitButton",
};
timeline.push(mental_health_block);

var final_page = {
  type: "html-button-response",
  stimulus:
    "This study is now over. Thank you for your participation. <br>" +
    "We will pay you a bonus payment of £2 for staying until the end. <br>" +
    "Clicking the button below will redirect you to Prolific, and register your completion on their database.",
  choices: ["Exit"],
};
timeline.push(final_page);

/* finish connection with pavlovia.org */
// var pavlovia_finish = {
// 	type: "pavlovia",
// 	command: "finish"
// 	};
// timeline.push(pavlovia_finish);

jsPsych.init({
  timeline: timeline,
  max_load_time: 300000,
  override_safe_mode: true,
  on_interaction_data_update: function (data) {
    if (task_type != "MRI" && debugMode == "OFF") {
      if (data.event == "fullscreenexit") {
        full_screen_exits++;
        data.fullscreenexits = full_screen_exits;
        console.log("exited fullscreen");
        // hide the contents of the current trial
        jsPsych.getDisplayElement().style.visibility = "hidden";
        // add a div that contains a message and button to re-enter fullscreen
        jsPsych
          .getDisplayElement()
          .insertAdjacentHTML(
            "beforebegin",
            '<div id="message-div" style="margin: auto; width: 100%; text-align: center;">' +
              "<mark><p>Please remain in fullscreen mode during the task.</p></mark>" +
              "<mark><p>When you click the button below, you will enter fullscreen mode.</p></mark>" +
              '<button id="jspsych-fullscreen-btn" class="jspsych-btn">Continue</button></div>',
          );
        // call the request fullscreen function when the button is clicked
        document
          .querySelector("#jspsych-fullscreen-btn")
          .addEventListener("click", function () {
            var element = document.documentElement;
            if (element.requestFullscreen) {
              element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
              element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
              element.msRequestFullscreen();
            }
          });
      }
      if (data.event == "fullscreenenter") {
        console.log("entered fullscreen");
        // when entering fullscreen, check to see if the participant is re-entering fullscreen,
        // i.e. the 'please enter fullscreen' message is on the page
        var msg_div = document.querySelector("#message-div");
        if (msg_div !== null) {
          // remove the message
          msg_div.remove();
          // show the contents of the current trial again
          jsPsych.getDisplayElement().style.visibility = "visible";
        }
      }
    }
  },
  on_trial_start: function (trial) {
    if (task_type == "MRI") {
    } else {
      addAbortButton({}, jsPsych.data.get().json());
    }
  },
  on_trial_finish: function (data) {},
  on_finish: function () {
    if (task_type == "MRI") {
      window.location =
        "https://app.prolific.com/submissions/complete?cc=C14LFN31";
    } else {
      window.location =
        "https://app.prolific.com/submissions/complete?cc=C14LFN31";
    }
  },
});

//this adds the quit study button and saves data
function addAbortButton(config, resultJson) {
  var buttonText =
    config && typeof config.text == "string" ? config.text : "Quit Study";
  var confirm =
    config && typeof config.confirm == "boolean" ? config.confirm : true;
  var confirmText =
    config && typeof config.confirmText == "string"
      ? config.confirmText
      : "Do you really want to cancel this study?";
  var tooltip =
    config && typeof config.tooltip == "string"
      ? config.tooltip
      : "Cancels this study";
  var msg =
    config && typeof config.msg == "string"
      ? config.msg
      : "Worker decided to abort";
  var style =
    "color:black;" +
    "font-family:Sans-Serif;" +
    "font-size:20px;" +
    "letter-spacing:2px;" +
    "position:fixed;" +
    "margin:2em 0 0 2em;" +
    "bottom:1em;" +
    "right:1em;" +
    "opacity:0.6;" +
    "z-index:100;" +
    "cursor:pointer;" +
    "text-shadow:-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;";
  if (config && typeof config.style == "string") style += ";" + config.style;

  var text = document.createTextNode(buttonText);
  var buttonDiv = document.createElement("div");
  buttonDiv.appendChild(text);
  buttonDiv.style.cssText = style;
  buttonDiv.setAttribute("title", tooltip);
  buttonDiv.addEventListener("click", function () {
    if (!confirm || window.confirm(confirmText)) {
      jsPsych.endExperiment("Experiment Ended");
    }
  });

  document.body.appendChild(buttonDiv);
}

var record_scan_trigger = function (info) {
  if (jsPsych.pluginAPI.compareKeys(info.key, "5")) {
    scanner_triggers.push(performance.now());
  }
  console.log(scanner_triggers);
};
