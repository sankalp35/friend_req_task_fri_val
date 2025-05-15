
function BDI(sequence_order) {

 // BECK'S DEPRESSION INVENTORY (BDI)
var BDI_qn = ['Sadness',
'Pessimism',
'Past Failure',
'Loss of Pleasure',
'Guilty Feelings',
'Punishment Feelings',
'Self-Dislike',
'Self-Criticalness',
'Suicidal Thoughts and Wishes',
'Crying',
'Agitation',
'Loss of Interest',
'Indecisiveness',
'Worthlessness',
'Loss of Energy',
'Changes in Sleeping Pattern',
'Irritability',
'Changes in Appetite',
'Concentration Difficulty',
'Tiredness or Fatigue',
'Loss of Interest in Sex'
];

var BDI_1_options = ["I do not feel sad",
    "I feel sad much of the time",
    "I feel sad all the time",
    "I feel so sad or unhappy that I can't stand it"
  ];

var BDI_2_options = ["I am not discouraged <br> about my future",
    "I feel more discouraged <br> about my future than I used to be",
    "I do not expect things <br> to work out for me",
    "I feel my future is hopeless <br> and will only get worse"
  ];

var BDI_3_options = ["I do not feel like a failure",
    "I have failed more than I should have",
    "As I look back, I see a lot of failures",
    "I feel I am a total failure as a person"
  ];

var BDI_4_options = ["I get as much pleasure as I ever did from the things I enjoy",
      "I don't enjoy things as much as I used to",
      "I get very little pleasure from the things I used to enjoy",
      "I can't get any pleasure from the things I used to enjoy"
  ];

var BDI_5_options = ["I don't feel particularly guilty",
     "I feel guilty over many things I have done or should have done",
     "I feel quite guilty most of the time",
     "I feel guilty all of the time"
  ];

var BDI_6_options = ["I don't feel I am being punished",
      "I feel I may be punished",
      "I expect to be punished",
      "I feel I am being punished"
  ];

var BDI_7_options = ["I feel the same about myself as ever",
      "I have lost confidence in myself",
      "I am disappointed in myself",
      "I dislike myself"
  ];

var BDI_8_options = ["I don't criticise or blame myself more than usual",
     "I am more critical of myself than I used to be",
     "I criticise myself for all of my faults",
     "I blame myself for everything bad that happens"
  ];

var BDI_9_options = ["I don't have any thoughts of killing myself",
     "I have thoughts of killing myself, but I would not carry them out",
     "I would like to kill myself",
     "I would kill myself if I had the chance"
  ];

var BDI_10_options = ["I don't cry anymore than I used to",
     "I cry more than I used to",
     "I cry over every little thing",
     "I feel like crying, but I can't"
  ];

var BDI_11_options = ["I am no more restless or wound up than usual",
     "I feel more restless or wound up than usual",
     "I am so restless or agitated that it's hard to stay still",
     "I am so restless or agitated that I have to keep moving or doing something"
  ];

var BDI_12_options = ["I have not lost interest in other people or activities",
    "I am less interested in other people or things than before",
    "I have lost most of my interest in other people or things",
    "It's hard to get interested in anything"
  ];

var BDI_13_options = ["I make decisions <br> about as well as ever",
     "I find it more difficult to <br> make decisions than usual",
     "I have much greater difficulty <br> in making decisions than I used to",
     "I have trouble <br> making any decisions"
  ];

var BDI_14_options = ["I do not feel I am worthless",
      "I don't consider myself as worthwhile and useful as I used to",
      "I feel more worthless as compared to other people",
      "I feel utterly worthless"
  ];

var BDI_15_options = ["I have as much energy as ever",
      "I have less energy <br> than I used to have",
      "I don't have enough energy <br> to do very much",
      "I don't have enough energy <br> to do anything"
  ];

var BDI_16_options = ["I have not experienced any change in my sleeping pattern",
      "I sleep somwhat more/less than usual",
      "I sleep a lot more/less than usual",
      "I sleep most of the day OR I wake up 1-2 hours early and can't get back to sleep"
  ];

var BDI_17_options = ["I am no more irritable <br> than usual",
      "I am more irritable <br> than usual",
      "I am much more irritable <br> than usual",
      "I am irritable all the time"
  ];

var BDI_18_options = ["I have not experienced any change in my appetite ",
      "My appetite is somewhat less/greater than usual",
      "My appetite is much less/greater than usual",
      "I have no appetite at all OR I crave food all the time"
  ];

var BDI_19_options = ["I can concentrate as well as ever",
      "I can't concentrate as well as usual",
      "It's hard to keep my mind on anything for very long",
      "I find I can't concentrate on anything"
      ];

var BDI_20_options = ["I am no more tired or fatigued <br< than usual",
      "I get more tired or fatigued more easily <br> than usual",
      "I am too tired or fatigued to do <br> a lot of the things I used to do",
      "I am too tired or fatigued to do <br> most of the things I used to do"
  ];

var BDI_21_options = ["I have not noticed any recent change in my interest in sex",
      "I am less interested in sex than I used to be",
      "I am much less interested in sex now",
      "I have lost interest in sex completely"
    ];


var BDI_preamble = '<strong>"Please read each group of statements carefully and then pick out one statement in each group that best describes the way you have been feeling during the past two weeks including today. You can only choose one statement for each group."</strong>';
var BDI_questions = [];
for (var i = 0; i < BDI_qn.length; i ++){
  if (i==0){
    var this_q = {prompt: BDI_qn[i], labels: BDI_1_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==1){
    var this_q = {prompt: BDI_qn[i], labels: BDI_2_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==2){
    var this_q = {prompt: BDI_qn[i], labels: BDI_3_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==3){
    var this_q = {prompt: BDI_qn[i], labels: BDI_4_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==4){
    var this_q = {prompt: BDI_qn[i], labels: BDI_5_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==5){
    var this_q = {prompt: BDI_qn[i], labels: BDI_6_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==6){
    var this_q = {prompt: BDI_qn[i], labels: BDI_7_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==7){
    var this_q = {prompt: BDI_qn[i], labels: BDI_8_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==8){
    var this_q = {prompt: BDI_qn[i], labels: BDI_9_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==9){
    var this_q = {prompt: BDI_qn[i], labels: BDI_10_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==10){
    var this_q = {prompt: BDI_qn[i], labels: BDI_11_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==11){
    var this_q = {prompt: BDI_qn[i], labels: BDI_12_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==12){
    var this_q = {prompt: BDI_qn[i], labels: BDI_13_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==13){
    var this_q = {prompt: BDI_qn[i], labels: BDI_14_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==14){
    var this_q = {prompt: BDI_qn[i], labels: BDI_15_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==15){
    var this_q = {prompt: BDI_qn[i], labels: BDI_16_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==16){
    var this_q = {prompt: BDI_qn[i], labels: BDI_17_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==17){
    var this_q = {prompt: BDI_qn[i], labels: BDI_18_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==18){
    var this_q = {prompt: BDI_qn[i], labels: BDI_19_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==19){
    var this_q = {prompt: BDI_qn[i], labels: BDI_20_options, required: true};
    BDI_questions.push(this_q);
  } else if (i==20){
    var this_q = {prompt: BDI_qn[i], labels: BDI_21_options, required: true};
    BDI_questions.push(this_q);
  }
   }

var BDI_questionaire = {
  type: 'survey-likert',
  preamble: "<p align='center'> " + BDI_preamble + "</p>",
  questions: BDI_questions,
  view_duration:21*2*1000,
  scale_width: 800,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'BDI'},
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7+answers.Q8+answers.Q9+answers.Q10+answers.Q11+answers.Q12+answers.Q13+answers.Q14+answers.Q15+answers.Q16+answers.Q17+answers.Q18+answers.Q19+answers.Q20;
        data.BDI_score = sum;
        //console.log(data);
      },
    }

return BDI_questionaire;
}



function SHAPS(sequence_order) {

   // Snaith-Hamilton Pleasure Scale (SHAPS)

var SHAPS_options = ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree']

var SHAPS_preamble = '<strong> This assessment is to evaluate your ability to enjoy/experience pleasure during the last few days. It is important to read each statement very carefully. Select one of the options to indicate how much you agree or disagree with each statement:</strong>';


   var SHAPS_questions = [{prompt: "I would enjoy my favourite radio/TV programme", labels: SHAPS_options, required: true},
   {prompt: "I would enjoy being with my family or close friends", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would find pleasure in my hobbies or pastimes", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would be able to enjoy my favourite meal/food", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would enjoy a warm bath or refreshing shower", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would find pleasure in the scent of flowers, smell of a fresh sea breeze, or freshly baked bread", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would enjoy seeing other people's smiling faces", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would enjoy looking smart when I have made an effort with my appearance", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would enjoy reading a book, magazine or newspaper", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would enjoy a cup of tea or coffee or my favourite beverage", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would find pleasure in small things, e.g. bright sunny day, a telephone call from a friend", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would enjoy a beautiful landscape or views", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would get pleasure from helping others", labels: SHAPS_options, required: true, horizontal: false,},
   {prompt: "I would feel pleasure when I receive praise from others", labels: SHAPS_options, required: true, horizontal: false,}
   ];


var SHAPS_questionaire = {
  type: 'survey-likert',
  preamble: "<p align='center'> " + SHAPS_preamble + "</p>",
  questions: SHAPS_questions,
  scale_width: 700,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'SHAPS'},
  view_duration:14*2*1000, //14 questions times 2 seconds
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = shaps_bin(answers.Q0)+shaps_bin(answers.Q1)+shaps_bin(answers.Q2)+shaps_bin(answers.Q3)+shaps_bin(answers.Q4)+shaps_bin(answers.Q5)+shaps_bin(answers.Q6)+shaps_bin(answers.Q7)+shaps_bin(answers.Q8)+shaps_bin(answers.Q9)+shaps_bin(answers.Q10)+shaps_bin(answers.Q11)+shaps_bin(answers.Q12)+shaps_bin(answers.Q13);
        data.SHAPS_score = sum;
        //console.log(data);
      },
    }

return SHAPS_questionaire;

function shaps_bin(n) {
  var subscore = 0;
  if(n==0 || n==1) {
    subscore = 1;
  }
  else {
    subscore =0;
  }
  return subscore;
}
}


function AMI(sequence_order) {

   // Apathy Motivation Index (AMI)

var AMI_options = ['Completely untrue', 'Mostly untrue', 'Neither true nor untrue', 'Quite true', 'Completely true']

var AMI_preamble = '<strong> Below are a number of statements. Each statement asks you to think about your life over the last 2 weeks. Select "Completely true" if the statement describes you perfectly, "Completely untrue" if the statement does not describe you at all over the last 2 weeks, and use the answers in between accordingly.</strong>';

var AMI_questions = [{prompt: "I feel sad or upset when I hear bad news", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I start conversations with random people", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I enjoy doing things with people I have just met", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I suggest activities for me and my friends to do", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I make decisions firmly and without hesitation", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "After making a decision, I will wonder if I have made the wrong choice", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "Based on the last two weeks, I will say I care deeply about how my loved ones think of me", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I go out with friends on a weekly basis", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "When I decide to do something, I am able to make an effort easily", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I don't like to laze around", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I get things done when they need to be done, without requiring reminders from others", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "When I decide to do something, I am motivated to see it through to the end", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I feel awful if I say something insensitive", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I start conversations without being prompted", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "When I have something I need to do, I do it straight away so it is out of the way", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I feel bad when I hear an acquaintance has an accident or illness", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "I enjoy choosing what to do from a range of activities", labels: AMI_options, required: true, horizontal: false,},
    {prompt: "If I realise I have been unpleasant to someone, I will feel terribly guilty afterwards", labels: AMI_options, required: true, horizontal: false,}
    ];

var AMI_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + AMI_preamble + "</p>",
  questions: AMI_questions,
  data: {Q_name: 'AMI'},
  view_duration:18*2*1000,
  qn_sequence_order:sequence_order,
  scale_width: 700,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
         sum = 4-answers.Q0+4-answers.Q1+4-answers.Q2+4-answers.Q3+4-answers.Q4+4-answers.Q5+4-answers.Q6+4-answers.Q7+4-answers.Q8+4-answers.Q9+4-answers.Q10+4-answers.Q11+4-answers.Q12+4-answers.Q13+4-answers.Q14+4-answers.Q15+4-answers.Q16+4-answers.Q17;
         data.AMI_score = sum;
        //3 domains of apathy-motivation are assessed with the *mean* score, with ranges from 0-4 (with 0 being motivated and 4 being apathetic)
        sumBehavioural = (1/6)*(4-answers.Q4+4-answers.Q8+4-answers.Q9+4-answers.Q10+4-answers.Q11+4-answers.Q14);
        sumSocial = (1/6)*(4-answers.Q1+4-answers.Q2+4-answers.Q3+4-answers.Q7+4-answers.Q13+4-answers.Q16);
        sumEmotional = (1/6)*(4-answers.Q0+4-answers.Q5+4-answers.Q6+4-answers.Q12+4-answers.Q15+4-answers.Q17);
        data.AMI_score_beh = sumBehavioural;
        data.AMI_score_social = sumSocial;
        data.AMI_score_emo = sumEmotional;
         //console.log(data.AMI_score);
      },
    }

return AMI_questionaire;
}


function MDQ(sequence_order) {

   // Mood Disorder Questionnaire (MDI)

var MDQ_options = ['No', 'Yes']
var MDQ_options2 = ['No Problem', 'Minor Problem', 'Moderate Problem', 'Serious Problem']

var MDQ_preamble = '<strong> Has there ever been a period of time when you were not your usual self and... </strong>';

var MDQ_questions = [{prompt: "I have been less alert.", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you were so irritable that you shouted at people or started fights or arguments?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you felt much more self-confident than usual?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you got much less sleep than usual and found you did not really miss it?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you were much more talkative or spoke much faster than usual?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...thoughts raced through your head or you could not slow your mind down?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you were so easily distracted by things around you that you had trouble concentrating or staying on track?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you had much more energy than usual?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you were much more active or did many more things than usual?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you were much more interested in sex than usual?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "...spending money got you or your family into trouble?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "If you checked YES to more than one of the above, have several of these ever happened during the same period of time?", labels: MDQ_options, required: true, horizontal: false,},
  {prompt: "How much of a problem did any of these cause you – like being unable to work, having family, money or legal troubles; getting into arguments or fights?", labels: MDQ_options2, required: true, horizontal: false,},
  {prompt: "Have any of your blood relatives (i.e. children, siblings, parents, grandparents, aunts, uncles) had manic-depressive illness or bipolar disorder?", labels: MDQ_options, required: true, horizontal: false,},
  ];


var MDQ_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + MDQ_preamble + "</p>",
  questions: MDQ_questions,
  data: {Q_name: 'MDQ'},
  scale_width: 700,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = (answers.Q0)+(answers.Q1)+(answers.Q2)+(answers.Q3)+(answers.Q4)+(answers.Q5)+(answers.Q6)+(answers.Q7)+(answers.Q8)+(answers.Q9)+(answers.Q10)+(answers.Q11)+(answers.Q12)+(answers.Q13)+(answers.Q14)+(answers.Q15)+(answers.Q16);
        data.MDQ_score = sum;
        //console.log(data.MDQ_score);
        //2 end questions - keep in?? - more for clinical use
      },
    }

return MDQ_questionaire;
}



function UPPSP(sequence_order) {

   // Impulsive Behaviour Scale - Short Version(UPPSP-S)

var UPPSP_options = ['Agree Strongly', 'Agree', 'Disagree', 'Disagree Strongly']

var UPPSP_preamble = '<strong> Please answer how strongly you disagree or agree with the following statements </strong>';

var UPPSP_questions = [
   {prompt: "I generally like to see things through to the end", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "My thinking is usually careful and purposeful", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "When I am in a great mood, I tend to get into situations that could cause me problems", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "Unfinished tasks really bother me", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I like to stop and think things over before I do them", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "When I feel bad, I will often do things that I later regret in order to make myself feel better now", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "Once I get going on something I hate to stop", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "Sometimes when I feel bad, I can't seem to stop what I am doing even though it is making me feel worse", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I quite enjoy taking risks", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I tend to lose control when I am in a great mood", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I finish what I start", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I tend to value and follow a rational, sensible, approach to things", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "When I am upset I often act without thinking", labels: UPPSP_options, required: true, horizontal:false,},
   {prompt: "I welcome new and exciting experiences and sensations, even if they are a little frightening and unconventional", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "When I feel rejected, I will often say things that I later regret", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I would like to learn to fly an airplane", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "Others are shocked or worried about the things I do when I am feeling very excited", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I would enjoy the sensation of skiing very fast down a high mountain slope", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I usually think carefully before doing anything", labels: UPPSP_options, required: true, horizontal: false,},
   {prompt: "I tend to act without thinking when I am really excited", labels: UPPSP_options, required: true, horizontal: false,},
      ];


  // note: this scale starts at 1 (1-4) and this is why we add the number of questions to the summary scores

var UPPSP_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + UPPSP_preamble + "</p>",
  questions: UPPSP_questions,
  data: {Q_name: 'UPPSP'},
  scale_width: 700,
  view_duration:20*2*1000,
  qn_sequence_order:sequence_order,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = 20+answers.Q0+answers.Q1+4-answers.Q2+answers.Q3+answers.Q4+4-answers.Q5+answers.Q6+4-answers.Q7+4-answers.Q8+4-answers.Q9+answers.Q10+answers.Q11+4-answers.Q12+4-answers.Q13+4-answers.Q14+4-answers.Q15+4-answers.Q16+4-answers.Q17+answers.Q18+4-answers.Q19;
        data.UPPSP_score = sum;
        sumNegativeUrgency = 4+4-answers.Q5+4-answers.Q7+4-answers.Q12+4-answers.Q14;
        sumLackofPerserverance = 4+answers.Q0+answers.Q3+answers.Q6+answers.Q10;
        sumLackofPremeditation = 4+answers.Q1+answers.Q4+answers.Q11+answers.Q18;
        sumSensationSeeking = 4+4-answers.Q8+4-answers.Q13+4-answers.Q15+4-answers.Q17;
        sumPositiveUrgency = 4+4-answers.Q2+4-answers.Q9+4-answers.Q16+4-answers.Q19;
        data.UPPSP_score_NegUrg = sumNegativeUrgency;
        data.UPPSP_score_LackPersevere = sumLackofPerserverance;
        data.UPPSP_score_PosUrg = sumPositiveUrgency;
        data.UPPSP_score_SensationSeeking = sumSensationSeeking;
        data.UPPSP_score_LackPremeditation = sumLackofPremeditation;
        //console.log(data.UPPSP_score);
        //console.log(data.UPPSP_score_NegUrg);
        //console.log(data.UPPSP_score_LackPersevere);
        //console.log(data.UPPSP_score_PosUrg);
      },
    }

return UPPSP_questionaire;
}


function SCS(sequence_order) {

   // Social Connectedness and Social assurance Scale (1995) (SCS) (16)

var SCS_options = ['Strongly Agree', 'Agree', 'Somewhat Agree', 'Somewhat Disagree', 'Disagree', 'Strongly Disagree']

var SCS_preamble = '<strong> Choose the option that best describes how you feel generally. </strong>';

var SCS_questions = [{prompt: "I feel disconnected from the world around me", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "Even around people I know, I don't feel that I really belong", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I feel so distant from people", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I have no sense of togetherness with my peers", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I don't feel related to anyone", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I catch myself losing all sense of connectedness with society", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "Even among my friends, there is no sense of brother/sisterhood", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I don't feel I participate with anyone or any group", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I feel more comfortable when someone is constantly with me", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I'm more at ease doing things together with other people", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "Working side by side with others is more comfortable than working alone", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "My life is incomplete without a buddy beside me", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "It's hard for me to use my skills and talents without someone beside me", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I stick to my friends like glue", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I join groups more for the friendship than the activity itself", labels: SCS_options, required: true, horizontal: false,},
   {prompt: "I wish to find someone who can be with me all the time", labels: SCS_options, required: true, horizontal: false,},
   ];

// Scale = 1 = strongly agree, 6 = strongly disagree : therefore we add the total number of questions to sum scores

var SCS_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + SCS_preamble + "</p>",
  questions: SCS_questions,
  scale_width: 700,
  view_duration:16*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'SCS'},
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = 16+answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7+answers.Q8+answers.Q9+answers.Q10+answers.Q11+answers.Q12+answers.Q13+answers.Q14+answers.Q15;
        sumSocialConnectedness = 8+answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7;
        sumSocialAssurance = 8+answers.Q8+answers.Q9+answers.Q10+answers.Q11+answers.Q12+answers.Q13+answers.Q14+answers.Q15;
        data.SCS_score = sum;
        data.SCS_score_SocConnect = sumSocialConnectedness;
        data.SCS_score_SocialAssurance = sumSocialAssurance;
        //console.log(data.SCS_score);
        //console.log(data.SCS_score_SocConnect);
        //console.log(data.SCS_score_SocialAssurance);
      },
    }

return SCS_questionaire;
}


function UCLA(sequence_order) {

   // UCLA Loneliness Scale (UCLA) - version 3 (NOTE THERE ARE DIFFERENT VERSIONS)

var UCLA_options = ['Never', 'Rarely', 'Sometimes', 'Often']

var UCLA_preamble = '<strong> Choose the option that best describes how you feel generally. </strong>';

var UCLA_questions = [{prompt: "How often do you feel that you are in tune with the people around you?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that you lack companionship?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that there is no one you can turn to?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel alone?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel part of a group of friends?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that you have a lot in common with the people around you?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that you are no longer close to anyone?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that your interests and ideas are not shared by those around you?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel outgoing and friendly?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel close to people?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel left out?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that your relationships with others are not meaningful?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that no one really knows you well?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel isolated from others?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel you can find companionship when you want it?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that there are people who really understand you?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel shy?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that people are around you but not with you?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that there are people you can talk to?", labels: UCLA_options, required: true, horizontal: false,},
   {prompt: "How often do you feel that there are people you can turn to?", labels: UCLA_options, required: true, horizontal: false,},
    ];

var UCLA_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + UCLA_preamble + "</p>",
  questions: UCLA_questions,
  data: {Q_name: 'UCLA'},
  view_duration:20*2*1000,
  qn_sequence_order:sequence_order,
  scale_width: 700,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = 20+4-answers.Q0+answers.Q1+answers.Q2+answers.Q3+4-answers.Q4+4-answers.Q5+answers.Q6+answers.Q7+4-answers.Q8+4-answers.Q9+answers.Q10+answers.Q11+answers.Q12+answers.Q13+4-answers.Q14+4-answers.Q15+answers.Q16+answers.Q17+4-answers.Q18+4-answers.Q19; //scoring is between 1-4 whereas jspsych stores answers between 0-3
        data.UCLA_score = sum;
        //console.log(data.UCLA_score);
      },
}

return UCLA_questionaire;
}


function SNI(sequence_order) {

   // Social Network Index (SNI)

var SNI_1_options = ["Currently married and living together, or living with someone in a marital-like relationship",
     "Never married and never lived with someone in a marital-like relationship",
     "Separated",
     "Divorced or formerly lived with someone in a marital-like relationship",
     "Widowed"
     ];

var SNI_2_options = ['0 - N/A','1', '2', '3', '4', '5', '6', '7 or more'];

var SNI_3_options = ['Neither/NA', 'Mother Only', 'Father Only', 'Both'];

var SNI_4_options = ['No', 'Yes'];

var SNI_5_options = ['No', 'Yes, self-employed', 'Yes, employed by others'];

var SNI_preamble = '<strong> Instructions: This questionnaire is concerned with how many people you see or talk to on a regular basis including family, friends, workmates, neighbors, etc. Please read and answer each question carefully. Answer follow-up questions where appropriate. </strong>';

var SNI_questions = [{prompt:"1. Which of the following best describes your marital status?", labels: SNI_1_options, required: false, correct_choice: "Currently married and living together, or living with someone in a marital-like relationship"},
   {prompt: "2. How many children do you have?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "2a). How many of your children do you see or talk to on the phone at least every two weeks?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "3. Are either of your parents living?", labels: SNI_3_options, required: true, horizontal: false,},
   {prompt: "3a). Do you see or talk on the phone to either of your parents at least once every 2 weeks?", labels: SNI_3_options, required: true, horizontal: false,},
   {prompt: "4. Are either of your in-laws (or partner's parents) living?", labels: SNI_3_options, required: true, horizontal: false,},
   {prompt: "4a). Do you see or talk on the phone to either of your partner's parents at least once every 2 weeks?", labels: SNI_3_options, required: true, horizontal: false,},
   {prompt: "5. How many other relatives (other than your spouse, parents and children) do you feel close to?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "5a). How many of these relatives do you see or talk to on the phone at least once every 2 weeks?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "6. How many close friends do you have? (meaning people that you feel at ease with, can talk to about private matters, and can call on for help)", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "6a). How many of these friends do you see or talk to at least once every two weeks?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "7. Do you belong to a church, temple, or other religious group?", labels: SNI_4_options, required: true, horizontal: false,},
   {prompt: "7a). How many members of your church or religious group do you talk to at least once every 2 weeks? (This includes at group meetings and services.)", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "8. Do you attend any classes (school, university, technical training, or adult education) on a regular basis?", labels: SNI_4_options, required: true, horizontal: false,},
   {prompt: "8a). How many fellow students or teachers do you talk to at least once every 2 weeks? (This includes at class meetings.)", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "9). Are you currently employed either full or part-time?", labels: SNI_5_options, required: true, horizontal: false,},
   {prompt: "9a). How many people do you supervise?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt:"9b). How many people at work (other than those you supervise) do you talk to at least once every 2 weeks?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "10. How many of your neighbours do you visit or talk to at least once every 2 weeks?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "11). Are you currently involved in regular volunteer work?", labels: SNI_4_options, required: true, horizontal: false,},
   {prompt: "11a)How many people involved in this volunteer work do you talk to about volunteering-related issues at least once every 2 weeks?", labels: SNI_2_options, required: true, horizontal: false,},
   {prompt: "12) Do you belong to any groups in which you talk to one or more members of the group about group-related issues at least once every 2 weeks? Examples include social clubs, recreational groups, trade unions, commercial groups, professional organizations, groups concerned with children like the PTA or Boy Scouts, groups concerned with community service, etc.", labels: SNI_4_options, required: true, horizontal: true,},
   {prompt: "From the previous question, consider those groups in which you talk to a fellow group member. Please provide the total number of members across all groups that you talk to at least once every 2 weeks.", labels: SNI_2_options, required: true, horizontal: true,},
   ];


var SNI_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + SNI_preamble + "</p>",
  questions: SNI_questions,
  data: {Q_name: 'SNI'},
  scale_width: 700,
  view_duration:23*2*1000,
  qn_sequence_order:sequence_order,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;

        if (answers.Q0 == 1) {
          var q0a = 1;
          } else {var q0a = 0};
        if (answers.Q2 == 0) {
           var q2a = 0;
          } else {var q2a = 1};
        if (answers.Q4 == 0) {
          var q4a = 0;
          } else {var q4a = 1};
        if (answers.Q6 == 0) {
           var q6a = 0;
          } else {var q6a = 1};
        if (answers.Q8 == 0) {
          var q8a = 0;
          } else {var q8a = 1};
        if (answers.Q10 == 0) {
          var q10a = 0;
          } else {var q10a = 1};
        if (answers.Q12 == 0) {
          var q12a = 0;
          } else {var q12a = 1};
        if (answers.Q14 == 0) {
          var q14a = 0;
          } else {var q14a = 1};
        if (answers.Q16 == 0 && answers.Q17 == 0) {
          var q16ab = 0;
          } else {var q16ab = 1};
        if (answers.Q18 == 0) {
          var q18a = 0;
          } else {var q18a = 1};
        if (answers.Q20 == 0) {
          var q20a = 0;
          } else {var q20a = 1};
        if (answers.Q21 == 0) {
          var q21a = 0;
          } else {var q21a = 1};

        sumHighContactRoles = (q0a+q2a+q4a+q6a+q8a+q10a+q12a+q14a+q16ab+q18a+q20a+q21a);
        sumNumberOfPeopleInSocialNetwork = (q0a+answers.Q2+sniScore_midsame(answers.Q4)+sniScore_midsame(answers.Q6)+answers.Q8+answers.Q10+answers.Q12+answers.Q14+answers.Q16+answers.Q17+answers.Q18+answers.Q20+answers.Q22);

        if (q0a+q2a+q4a+q6a+q8a > 2) {
           var qFam = 1;
           } else { var qFam = 0};

        sumNumberOfEmbeddedNetworks = (qFam+q10a+q12a+q14a+q16ab+q18a+q20a+q21a)

        data.SNI_score_HIGHContactR = sumHighContactRoles;
        data.SNI_score_NoPeopleSocNet = sumNumberOfPeopleInSocialNetwork;
        data.SNI_score_EmbeddedNet = sumNumberOfEmbeddedNetworks;
        //console.log(data.SNI_score_HIGHContactR);
        //console.log(data.SNI_score_NoPeopleSocNet);
        //console.log(data.SNI_score_EmbeddedNet);
      },
}

return SNI_questionaire;

function sniScore_midsame(n){
  var score = 0;
  if(n==1 || n==2) {
    score =1;
  }
  else {
    score = 2;
  }
  return score;

}
}




function SELSA(sequence_order) {

   // Social and Emotional Loneliness Scale for Adults (SELSA)

var SELSA_options = ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree']

var SELSA_preamble = '<strong> Choose the option that best describes how you feel generally. </strong>';

var SELSA_questions = [{prompt: "I really belong in my family", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I feel part of my family", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "My family really cares about", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "My family is important to me", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I feel close to my family", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I have a romantic partner with whom I share my most intimate thoughts and feelings", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I have a romantic or marital partner who gives me the support and encouragement I need", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I have an unmet need for a close romantic relationship", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I am in love with someone who is in love with me", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I have someone who fulfils my needs for intimacy", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I have a romantic partner to whose happiness I contribute", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I have friends that I can turn to for information", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I can depend upon my friends for help", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I have friends to whom I can talk about the pressures in my life", labels: SELSA_options, required: true, horizontal: false,},
   {prompt: "I have a friend(s) with whom I can share my views", labels: SELSA_options, required: true, horizontal: false,},
   ];


// 15 items, answered on a 7-point scale, ranging from 1 = Strongly Disagree to 7 = Strongly Agree

var SELSA_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + SELSA_preamble + "</p>",
  questions: SELSA_questions,
  data: {Q_name: 'SELSA'},
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = 15+7-answers.Q0+7-answers.Q1+7-answers.Q2+7-answers.Q3+7-answers.Q4+7-answers.Q5+7-answers.Q6+answers.Q7+7-answers.Q8+7-answers.Q9+7-answers.Q10+7-answers.Q11+7-answers.Q12+7-answers.Q13+7-answers.Q14;
        sumFamily = 5+7-answers.Q0+7-answers.Q1+7-answers.Q2+7-answers.Q3+7-answers.Q4;
        sumRomantic = 5+7-answers.Q5+7-answers.Q6+answers.Q7+7-answers.Q8+7-answers.Q9;
        sumSocial = 5+7-answers.Q10+7-answers.Q11+7-answers.Q12+7-answers.Q13+7-answers.Q14;
        data.SELSA_score = sum;
        data.SELSA_score_Fam = sumFamily;
        data.SELSA_score_Romantic = sumRomantic;
        data.SELSA_score_Social = sumSocial;
        //console.log(data.SELSA_score);
        //console.log(data.SELSA_score_Fam);
        //console.log(data.SELSA_score_Romantic);
        //console.log(data.SELSA_score_Social);
      },
    }

return SELSA_questionaire;
}


function SAS(sequence_order) {

   // Sense of Agency Scale (2017) (SAS)

var SAS_options = ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree']

var SAS_preamble = '<strong> Choose the option that best describes how you feel generally. </strong>';

var SAS_questions = [{prompt: "I am in full control of what I do", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "I am just an instrument in the hands of somebody or something else", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "My actions just happen without my intention", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "I am the author of my actions", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "The consequences of my actions feel like they don't logically follow my actions", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "My movements are automatic - my body simply makes them", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "The outcome of my actions generally surprise me", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "Things I do are subject only to my free will", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "The decision whether and when to act is within my hands", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "Nothing I do is actually voluntary", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "While I am in action, I feel like I am a remote controlled robot", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "My behaviour is planned by me from the very beginning to the very end", labels: SAS_options, required: true, horizontal: false,},
  {prompt: "I am completely responsible for everything that results from my actions", labels: SAS_options, required: true, horizontal: false,},
   ];

   //a scale from 1 (strongly disagree) to 7 (strongly agree): so add

var SAS_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + SAS_preamble + "</p>",
  questions: SAS_questions,
  scale_width: 700,
  data: {Q_name: 'SAS'},
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = 13+answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7+answers.Q8+answers.Q9+answers.Q10+answers.Q11+answers.Q12;
        sumSoPositiveA = 6+answers.Q0+answers.Q3+answers.Q7+answers.Q8+answers.Q11+answers.Q12;
        sumSoNegative = 7+answers.Q1+answers.Q2+answers.Q4+answers.Q5+answers.Q6+answers.Q9+answers.Q10;
        data.SELSA_score = sum;
        data.SELSA_score_Pos = sumSoPositiveA;
        data.SELSA_score_Neg = sumSoNegative;
        //console.log(data.SELSA_score);
        //console.log(data.SELSA_score_Pos);
        //console.log(data.SELSA_score_Neg);
      },
    }

return SAS_questionaire;
}

function SOARS(sequence_order) {

   // Sense of Agency Scale - older (SAS2)

var SOARS_options = ['Strongly Disagree', 'Disagree', 'Somewhat Disagree', 'Neither Agree nor Disagree', 'Somewhat Agree', 'Agree', 'Strongly Agree']

var SOARS_preamble = '<strong> In this section we are interested in your inner, subjective experiences during hypnosis. We are as interested in vague, ambiguous experiences as we are in clear and powerful experiences. It is important to us to have your honest, candid report of the nature of your own experience, so that we can gain an accurate, scientific understanding of these phenomena. Below are a series of statements about your experience. Please rate how much you agree with each statement, with a rating of ‘1’ meaning that you strongly disagree, ‘4’ meaning that you neither agree nor disagree and ‘7’ meaning that you strongly agree.  You don’t need to think too much about each statement, just circle the number that seems most accurate. </strong>';

var SOARS_questions = [{prompt: "Following suggestions was hard", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "I chose how to respond", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "My experiences and actions felt self generated", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "I embraced the suggestions", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "My experiences and actions were under control", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "I felt that my experiences and actions were not caused by me", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "My experiences and actions occurred effortlessly", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "I was mostly absorbed in what was going on", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "My responses were involuntary", labels: SOARS_options, required: true, horizontal: false,},
   {prompt: "I was reluctant to follow suggestions", labels: SOARS_options, required: true, horizontal: false,},
    ];

    // seven point Likert scale their level of agreement with each statement, ranging from ‘‘strongly disagree’’ (1) to ‘‘strongly agree’’ (7).

var SOARS_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + SOARS_preamble + "</p>",
  questions: SOARS_questions,
  data: {Q_name: 'SOARS'},
  scale_width: 700,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = 10+answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7+answers.Q8+answers.Q9;
        sumInvoluntarinessScale = 5+answers.Q1+answers.Q4+answers.Q5+answers.Q2+answers.Q8;
        sumEffortlessnessScale = 5+answers.Q3+answers.Q6+answers.Q1+answers.Q7+answers.Q9;
        data.SOARS_score = sum;
        data.SOARS_score_Invol = sumInvoluntarinessScale;
        data.SOARS_score_Effortless = sumEffortlessnessScale;
        //console.log(data.SOARS_score);
        //console.log(data.SOARS_score_Invol);
        //console.log(data.SOARS_score_Effortless);
      },
    }

return SOARS_questionaire;
}



function LHS(sequence_order) {

   // Learned Helplessness Scale (LHS)(20)

var LHS_options = ['Strongly Agree',  'Agree',  'Disagree', 'Strongly Disagree']

var LHS_preamble = '<strong> Choose the option that best describes how you feel generally. </strong>';

var LHS_questions = [{prompt: "No matter how much energy I put into a task, I feel I have no control over the outcome", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I feel that my ability to solve problems is the cause of my success", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I can find solutions to difficult problems", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I don't place myself in situations in which I cannot predict the outcome", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "If I complete a task successfully, it is probably because of my ability", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I have the ability to solve most of life's problems", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "When I do not succeed at a task, I do not attempt any similar tasks because I feel that I would fail them also", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "When something doesn't turn out the way I planned, I know it is because I didn't have the ability to start with", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "Other people have more control over their success and/or failure than I do", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I try new tasks if I have failed similar ones in the past", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "When I perform poorly, it is because I don't have the ability to perform better", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I accept tasks even if I am not sure that I will succeed at them", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I feel that I have little control over the outcomes of my actions", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I am successful at most tasks I try", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I feel that anyone else could be better than me at most tasks", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I am able to reach my goals in life", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "When I don't succeed at a task, I find myself blaming my own stupidity for my failure", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "No matter how hard I try, things never seem to work out the way I want them to", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "I feel that my success reflects my ability, not chance", labels: LHS_options, required: true, horizontal: false,},
   {prompt: "My behaviour seems to influence the success of a work group", labels: LHS_options, required: true, horizontal: false,},
  ];

// scale = 1-4 so add total q no to score...

var LHS_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + LHS_preamble + "</p>",
  questions: LHS_questions,
  scale_width: 700,
  view_duration:20*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'LHS'},
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = 20+4-answers.Q0+answers.Q1+answers.Q2+4-answers.Q3+answers.Q4+answers.Q5+4-answers.Q6+4-answers.Q7+4-answers.Q8+answers.Q9+4-answers.Q10+answers.Q11+4-answers.Q12+answers.Q13+4-answers.Q14+answers.Q15+4-answers.Q16+4-answers.Q17+answers.Q18+answers.Q19;
        data.LHS_score = sum;
        //console.log(data.LHS_score);
      },
    }

// The scoring key for the LHS :
//Items # 1, 4, 7, 8, 9, 11, 13, 15, 17, and 18 are reversed scored (e.g. 1=4 and 4=1)
// Items # 2, 3, 5, 6, 10, 12, 14, 16, 19, and 20 are normally scored (1-4)
// Add all twenty item scores to obtain the final score.
//The possible range of scores on the LHS is 20 to 80 with higher scores indicating higher learned helplessness.

return LHS_questionaire;
}


function OCIR(sequence_order) {

   // Obsessive Compulsive Inventory - Revised (18)

var OCIR_options = ['Not at All', 'A Little', 'Moderately', 'A Lot', 'Extremely']

var OCIR_preamble = '<strong>  The following statements refer to experiences that many people have in their everyday lives. Select the answer that best describes how much that experience has distressed or bothered you during the past month. </strong>';

var OCIR_questions = [{prompt: "I have saved up so many things that they get in the way", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I check things more often than neccessary", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I get upset if objects are not arranged properly", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I feel compelled to count while I am doing things", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I find it difficult to touch an object when I know it has been touched by strangers or certain people", labels: OCIR_options, required: true, horizontal: false,},
    //{prompt: "I find it difficult to control my own thoughts", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I collect things I don't need", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I repeatedly check doors, windows, drawers, etc", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I get upset if others change the way I have arranged things", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I feel I have to repeat certain numbers", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I sometimes have to wash or clean myself simply because I feel contaminated", labels: OCIR_options, required: true, horizontal: false,},
    //{prompt: "I am upset by unpleasant thoughts that come into my mind against my will", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I avoid throwing things away because I am afraid I might need them later", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I repeatedly check gas and water taps and light switches after turning them off", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I need things to be arranged in a particular way", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I feel that there are good numbers and bad numbers", labels: OCIR_options, required: true, horizontal: false,},
    {prompt: "I wash my hands more often and longer than neccessary", labels: OCIR_options, required: true, horizontal: false,},
    //{prompt: "I frequently get nasty thoughts and have difficulty in getting rid of them", labels: OCIR_options, required: true, horizontal: false,},
  ];

 var OCIR_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + OCIR_preamble + "</p>",
  questions: OCIR_questions,
  scale_width: 700,
  view_duration:15*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'OCIR'},
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7+answers.Q8+answers.Q9+answers.Q10+answers.Q11+answers.Q12+answers.Q13+answers.Q14;
        ssHoarding = answers.Q0 + answers.Q5 + answers.Q10;
        ssChecking = answers.Q1 + answers.Q6+answers.Q11;
        ssOrdering = answers.Q2 + answers.Q7 + answers.Q12;
        ssNeutralising = answers.Q3+answers.Q8+answers.Q13;
        ssWashing = answers.Q4 + answers.Q9 + answers.Q14;
        data.OCIR_score = sum;
        data.OCIR_score_hoarding = ssHoarding;
        data.OCIR_score_check = ssChecking;
        data.OCIR_score_ordering = ssOrdering;
        data.OCIR_score_neut = ssNeutralising;
        data.OCIR_score_washing = ssWashing;
        //console.log(data.OCIR_score);
      },
    }

return OCIR_questionaire;
}


// Each item on the Obsessive-Compulsive Inventory-Revised (OCI-R) can be scored on a 5 point scale from 0 to 4 (18 item total).


function STICSA(sequence_order) {

	// State-Trait Inventory of Cognitive and Somatic Anxiety (21)

var STICSA_options = ['Not at All', 'A Little', 'Moderately', 'Very Much So'];

var STICSA_preamble = '<strong> Please read each statement carefully and indicate the option that best indicates how you feel right now, at this very moment, even if this is not how you usually feel </strong>';

var STICSA_questions = [{prompt: "My heart beats", labels: STICSA_options, required: true, horizontal: false,},
	 {prompt: "My muscles are tense", labels: STICSA_options, required: true, horizontal: false,},
	 {prompt: "I feel agonized over my problems", labels: STICSA_options, required: true, horizontal: false,},
	 {prompt: "I think that others won't approve of me", labels: STICSA_options, required: true, horizontal: false,},
	 {prompt: "I feel like I'm missing out on things because I can't make up my mind", labels: STICSA_options, required: true, horizontal: false,},
	 {prompt: "I feel dizzy", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "My muscles feel weak", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I feel trembly and shaky", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I picture some future misfortune", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I can't get some thought out of my mind", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I have trouble remembering things", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "My face feels hot", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I think the worst will happen", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "My arms and legs feel stiff", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "My throat feels dry", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I keep busy to avoid uncomfortable thoughts", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I cannot concentrate without irrelevant thoughts intruding", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "My breathing is fast and shallow", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I worry that I cannot control my thoughts as well as I would like to", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "I have butterflies in my stomach", labels: STICSA_options, required: true, horizontal: false,},
    {prompt: "My palms feel clammy", labels: STICSA_options, required: true, horizontal: false,},
  ];

  // Scale = 1 - 4 for each question (21 question total and no subscales)

  var STICSA_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + STICSA_preamble + "</p>",
  questions: STICSA_questions,
  scale_width: 700,
  view_duration:21*2*1000, //21 total questions in the sticsa
  qn_sequence_order:sequence_order,
  data: {Q_name: 'STICSA'},
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = 21+answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7+answers.Q8+answers.Q9+answers.Q10+answers.Q11+answers.Q12+answers.Q13+answers.Q14+answers.Q15+answers.Q16+answers.Q17+answers.Q18+answers.Q19+answers.Q20;
        data.STICSA_score = sum;
        //console.log(data.STICSA_score);
    },
   }
return STICSA_questionaire;
}




function LSAanx(sequence_order) {

 // Liebowitz Social Anxiety Scale (24)
//scale is shortened based on Wise

var LSA_options1 = ['No Anxiety', 'Mild Anxiety', 'Moderate Anxiety', 'Severe Anxiety'];

var LSAanx_preamble = '<strong> Please read each statement carefully and indicate which option best indicates how ANXIOUS would you feel in the following situations </strong>';

var LSAanx_questions = [//{prompt: "Telephoning in public - Speaking on the phone in a public place", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Participating in small groups - having a discussion with a few others", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Eating in public places - Do you tremble or feel awkward handling food", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Drinking in public places - Drinking with others in public places (refers to any beverage including alcohol)", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Talking to people in authority, - for example, a boss or teacher", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Acting, performing or giving a talk in front of an audience - refers to a large audience", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Going to a party - an average party to which you may be invited; assume you know some but not all people at the party", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Working while being observed - any type of work you might do including school work or housework", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Writing while being observed - for example signing a check in a bank", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Calling someone you don't know very well", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Talking with people you don't know very well", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Meeting strangers - assume others are of average importance to you", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Urinating in a public bathroom - assume that others are sometimes present, as might normally be expected", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Entering a room when others are already seated - refers to a small group, and nobody has to move seats for you", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Being the centre of attention - telling a story to a group of people", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Speaking up at a meeting - speaking from your seat in a small meeting or standing up in place in a large meeting", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Taking a writted test", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Expressing appropriate disagreement or disapproval to people you don't know very well", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Looking at people you don't know very well in the eyes - refers to appropriate eye contact", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Giving a report to a group - refers to an oral report to a small group", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Trying to pick up someone - refers to a single person attempting to initiate a relationship with a stranger", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Returning goods to a store where returns are normally accepted", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Giving an average party", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Resisting a high pressure salesperson", labels: LSA_options1, required: true, horizontal: false,},
  ];

  // Scale = 0 - 3 for each question (24 questions in total)
  // seperate scales for "fear or anxiety" and "avoidance" but both are scaled 0 - 3

  var LSAanx_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + LSAanx_preamble + "</p>",
  questions: LSAanx_questions,
  data: {Q_name: 'LSAanx'},
  view_duration:13*2*1000,
  qn_sequence_order:sequence_order,
  scale_width: 700,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7+answers.Q8+answers.Q9+answers.Q10+answers.Q11+answers.Q12;
        data.LSAanx_score = sum;
        //console.log(data.LSAanx_score);
    },
   }

 return LSAanx_questionaire;
}


function LSAavoid(sequence_order) {

 // Liebowitz Social Anxiety Scale

var LSA_options1 = ['Never Avoid (0%)', 'Occasionally Avoid(1%-33% of time)', 'Often Avoid (33%-67% of time)', 'Usually Avoid (67%-100% of time)'];

var LSAavoid_preamble = '<strong> Please read each statement AGAIN and  this time, instead of anxiety, indicate how much you AVOIDED each situation during the past week: </strong>';

var LSAavoid_questions = [//{prompt: "Telephoning in public - Speaking on the phone in a public place", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Participating in small groups - having a discussion with a few others", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Eating in public places - Do you tremble or feel awkward handling food", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Drinking in public places - Drinking with others in public places (refers to any beverage including alcohol)", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Talking to people in authority, - for example, a boss or teacher", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Acting, performing or giving a talk in front of an audience - refers to a large audience", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Going to a party - an average party to which you may be invited; assume you know some but not all people at the party", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Working while being observed - any type of work you might do including school work or housework", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Writing while being observed - for example signing a check in a bank", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Calling someone you don't know very well", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Talking with people you don't know very well", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Meeting strangers - assume others are of average importance to you", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Urinating in a public bathroom - assume that others are sometimes present, as might normally be expected", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Entering a room when others are already seated - refers to a small group, and nobody has to move seats for you", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Being the centre of attention - telling a story to a group of people", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Speaking up at a meeting - speaking from your seat in a small meeting or standing up in place in a large meeting", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Taking a writted test", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Expressing appropriate disagreement or disapproval to people you don't know very well", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Looking at people you don't know very well in the eyes - refers to appropriate eye contact", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Giving a report to a group - refers to an oral report to a small group", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Trying to pick up someone - refers to a single person attempting to initiate a relationship with a stranger", labels: LSA_options1, required: true, horizontal: false,},
	//{prompt: "Returning goods to a store where returns are normally accepted", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Giving an average party", labels: LSA_options1, required: true, horizontal: false,},
	{prompt: "Resisting a high pressure salesperson - avoidance refers to listening to the salesperson for too long", labels: LSA_options1, required: true, horizontal: false,},
  ];

  // Scale = 0 - 3 for each question (24 questions in total)
  // seperate scales for "fear or anxiety" and "avoidance" but both are scaled 0 - 3

  var LSAavoid_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + LSAavoid_preamble + "</p>",
  questions: LSAavoid_questions,
  data: {Q_name: 'LSAavoid'},
  scale_width: 700,
  view_duration:13*2*1000,
  qn_sequence_order:sequence_order,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5+answers.Q6+answers.Q7+answers.Q8+answers.Q9+answers.Q10+answers.Q11+answers.Q12;
        data.LSAavoid_score = sum;
        //console.log(data.LSAavoid_score);
    },
   }

 return LSAavoid_questionaire;
}

function AQ(sequence_order) {

 // Autism Spectrum Quotient (AQ) (50)

var AQ_options = ['Definitely Agree',	'Slightly Agree',	'Slightly Disagree',	'Definitely Disagree'];

var AQ_preamble = '<strong> For each statement below, choose one response that best describes how strongly that statement applies to you: </strong>';

var AQ_questions = [//{prompt: "I prefer to do things with others rather than on my own", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I prefer to do things the same way over and over again", labels: AQ_options, required: true, horizontal: false,},
//	{prompt: "If I try to imagine something, I find it very easy to create a picture in my mind", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I frequently get so strongly absorbed in one thing that I lose sight of other things", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "I often notice small sounds when others do not", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I usually notice car number plates or similar strings of information", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "Other people frequently tell me that what I've said is impolite, even though I think it is polite", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "When I'm reading a story, I can easily imagine what the characters might look like", labels: AQ_options, required: true, horizontal: false,},
//	{prompt: "I am fascinated by dates", labels: AQ_options, required: true, horizontal: false,},
//	{prompt: "In a social group, I can easily keep track of several people's different conversations", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I find social situations easy", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I tend to notice details that others do not", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I would rather go to a library than to a party", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I find making up stories easy", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I find myself drawn more strongly to people than to things", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I tend to have very strong interests which I get upset about if I can't pursue", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I enjoy social chitchat", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "When I talk, it isn't always easy for others to get a word in edgewise", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I am fascinated by numbers", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "When I'm reading a story, I find it difficult to work out the characters' intentions", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I don't particularly enjoy reading fiction", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I find it hard to make new friends", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I notice patterns in things all the time", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I would rather go to the theatre than to a museum", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "It does not upset me if my daily routine is disturbed", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I frequently find that I don't know how to keep a conversation going", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "I find it easy to read between the lines when someone is talking to me", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "I usually concentrate more on the whole picture, rather than on small details", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I am not very good at remembering phone numbers", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I don't usually notice small changes in a situation or a person's appearance", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "I know how to tell if someone listening to me is getting bored", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "I find it easy to do more than one thing at once", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "When I talk on the phone, I'm not sure when it's my turn to speak", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I enjoy doing things spontaneously", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I am often the last to understand the point of a joke", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "I find it easy to work out what someone is thinking or feeling just by looking at their face", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "If there is an interruption, I can switch back to what I was doing very quickly", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I am good at social chitchat", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "People often tell me that I keep going on and on about the same thing", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "When I was young, I used to enjoy playing games involving pretending with other children", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "I like to collect information about categories of things (e.g., types of cars, birds, trains, plants).", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I find it difficult to imagine what it would be like to be someone else", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I like to carefully plan any activities I participate in", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I enjoy social occasions", labels: AQ_options, required: true, horizontal: false,},
	{prompt: "I find it difficult to work out people's intentions", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "New situations make me anxious", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I enjoy meeting new people", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I am a good diplomat", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I am not very good at remembering people's date of birth", labels: AQ_options, required: true, horizontal: false,},
	//{prompt: "I find it very easy to play games with children that involve pretending", labels: AQ_options, required: true, horizontal: false,},
	 ];

  // Scale = All items are scored on a four-point rating scale ranging from 1 = definitely agree to 4 = definitely disagree.
  // The scorings are reversed (from 4 = definitely agree to 1 = definitely disagree) for the items in which an “agree” response indicates an autistic trait.
  // 50Q total

  var AQ_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + AQ_preamble + "</p>",
  questions: AQ_questions,
  data: {Q_name: 'AQ'},
  scale_width: 700,
  view_duration:10*2*1000,
  qn_sequence_order:sequence_order,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;
        sum = aq_bin(answers.Q0)+aq_bin(answers.Q1)+1-aq_bin(answers.Q2)+1-aq_bin(answers.Q3)+1-aq_bin(answers.Q4)+1-aq_bin(answers.Q5)+1-aq_bin(answers.Q6)+1-aq_bin(answers.Q7)+aq_bin(answers.Q8)+aq_bin(answers.Q9);
        // sumSocialSk = 10+4-answers.Q0+4-answers.Q10+answers.Q12+4-answers.Q14+answers.Q21+4-answers.Q35+4-answers.Q43+answers.Q44+4-answers.Q46+4-answers.Q47;
        // sumAttenSwitch = 10+answers.Q1+answers.Q3+4-answers.Q9+answers.Q15+4-answers.Q24+4-answers.Q31+4-answers.Q33+4-answers.Q36+answers.Q42+answers.Q45;
        // sumAttenDetail = 10+answers.Q4+answers.Q5+answers.Q8+answers.Q11+answers.Q18+answers.Q22+4-answers.Q27+4-answers.Q28+4-answers.Q29+4-answers.Q48;
        // sumCommunication = 10+answers.Q6+4-answers.Q16+answers.Q+answers.Q17+answers.Q25+4-answers.Q26+4-answers.Q30+answers.Q32+answers.Q34+answers.Q37+answers.Q38;
        // sumImagination = 10+4-answers.Q2+4-answers.Q7+4-answers.Q13+answers.Q19+answers.Q20+4-answers.Q23+4-answers.Q39+answers.Q40+answers.Q41+4-answers.Q49;
        // sumSoSkill_3FACTOR = 12+4-answers.Q37+4-answers.Q10+4-answers.Q43+4-answers.Q16+answers.Q25+4-answers.Q46+answers.Q21+4-answers.Q39+4-answers.Q14+4-answers.Q33+4-answers.Q49+answers.Q12;
        // sumDetailPattern_3FACTOR = 8+answers.Q22+answers.Q5+answers.Q18+answers.Q8+answers.Q11+answers.Q42+answers.Q24;
        // sumCommun_2FACTOR = 6+answers.Q38+answers.Q19+answers.Q44+answers.Q34+answers.Q6+4-answers.Q36;


        sumSocialSk = 1-aq_bin(answers.Q6)+aq_bin(answers.Q9);
        sumAttenSwitch = 1-aq_bin(answers.Q5)+1-aq_bin(answers.Q7);
        sumAttenDetail =aq_bin(answers.Q0) +1-aq_bin(answers.Q3);
        sumCommunication = 1-aq_bin(answers.Q2)+1-aq_bin(answers.Q4);
        sumImagination = aq_bin(answers.Q1)+aq_bin(answers.Q8);

        data.AQ_score = sum;
        data.AQ_Score_SocialSK = sumSocialSk
        data.AQ_Score_AttenSwitch = sumAttenSwitch
        data.AQ_Score_AttenDetail = sumAttenDetail
        data.AQ_Score_Communication = sumCommunication
        data.AQ_Score_Imagination = sumImagination


    },
   }

 return AQ_questionaire;

 function aq_bin(n) {
   var subscore = 0;
   if(n==0 || n==1) {
     subscore = 1;
   }
   else {
     subscore =0;
   }
   return subscore;
 }
}


function RSE(sequence_order) {

 // Rosenberg Self Esteem  (RSE) (10)

var RSE_options = ['Strongly Agree',	'Agree',	'Disagree',	'Strongly Disagree'];

var RSE_preamble = '<strong> Below is a list of statements dealing with your general feelings about yourself. Please indicate how strongly you agree or disagree with each statement. </strong>';

var RSE_questions = [{prompt: "On the whole, I am satisfied with myself", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "At times I think I am no good at all", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "I feel that I have a number of good qualities", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "I am able to do things as well as most other people", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "I feel I do not have much to be proud of", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "I certainly feel useless at times", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "I feel that I'm a person of worth, at least on an equal plane with others", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "I wish I could have more respect for myself", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "All in all, I am inclined to feel that I am a failure", labels: RSE_options, required: true, horizontal: false,},
	{prompt: "I take a positive attitude toward myself", labels: RSE_options, required: true, horizontal: false,},
  ];

  // Scale = Items 2, 5, 6, 8, 9 are reverse scored.
  //Give “Strongly Disagree” 1 point, “Disagree” 2 points, “Agree” 3 points, and “Strongly Agree” 4 points. Sum scores for all ten items.
  // Higher scores indicate higher self-esteem.
  // 10 items overall

var RSE_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + RSE_preamble + "</p>",
  questions: RSE_questions,
  scale_width: 700,
  view_duration:10*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'RSE'},
  on_finish:function(data){
        answers =data.response;
        data.answers = answers;
        sum = 10+4-answers.Q0+answers.Q1+4-answers.Q2+4-answers.Q3+answers.Q4+answers.Q5+4-answers.Q6+answers.Q7+answers.Q8+4-answers.Q9;
        data.RSE_score = sum;
        //console.log(data.RSE_score);
    },
   }

 return RSE_questionaire;
}



function SPQ(sequence_order) {

 // Social pain questionnaire- SPQ

var SPQ_options = ['Applies exactly <br>to me','Applies largely <br> to me','Applies in part <br> to me','Applies rather not <br> to me','Applies not at all <br> to me'];


var SPQ_preamble = '<strong>The following questionnaire refers to emotional reactions in social situations. Please indicate for each of the following statements, to which extent these apply to you. There are no right or wrong answers. Please mark for each of the statements only one box. </strong>';

var SPQ_questions = [{prompt: "It hurts my feelings if somebody denies a request of me.", labels: SPQ_options, required: true, horizontal: false,},
	{prompt: "I feel very humiliated when I am excluded from a group.", labels: SPQ_options, required: true, horizontal: false,},
	{prompt: "I feel insulted when being ignored at a party.", labels: SPQ_options, required: true, horizontal: false,},
	{prompt: "It hurts me when somebody ignores me.", labels: SPQ_options, required: true, horizontal: false,},
	{prompt: "When I feel rejected, I experience inner tension.", labels: SPQ_options, required: true, horizontal: false,},
	{prompt: "When an acquaintance does not respond to me when I say hello, I feel rejected.", labels: SPQ_options, required: true, horizontal: false,},
  {prompt: "When a friend distances himself/herself from me, I feel repulsed.", labels: SPQ_options, required: true, horizontal: false,},
  {prompt: "When I get the impression that a colleague withdraws from me, I feel rejected..", labels: SPQ_options, required: true, horizontal: false,},
  {prompt: "When somebody declines my request or suggestion, I feel snubbed.", labels: SPQ_options, required: true, horizontal: false,},
  {prompt: "If somebody cancels an appointment without a good reason, I feel repulsed.", labels: SPQ_options, required: true, horizontal: false,},
  ];


var SPQ_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + SPQ_preamble + "</p>",
  questions: SPQ_questions,
  scale_width: 700,
  view_duration:10*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'SPQ'},
  on_finish:function(data){

    //To form the total score, the mean of all item scores is calculated
        answers =data.response;
        data.answers = answers;
        sum = (4-answers.Q0+4-answers.Q1+4-answers.Q2+4-answers.Q3+4-answers.Q4+4-answers.Q5+4-answers.Q6+4-answers.Q7+4-answers.Q8+4-answers.Q9)/10;
        data.SPQ_score = sum; //but in this case it is the mean and not sum, Bazzinga!
        //console.log(data.RSE_score);
    },
   }

 return SPQ_questionaire;
}


function LSNS(sequence_order) {

 // Lubbens social network scale - LSNS

var LSNS_options = ['None','One','Two','Three or four','five through eight','nine or more'];


var LSNS_preamble = '<strong>Considering the people to whom you are related by birth, marriage, adoption, etc... (questions 1-3), and considering all of your friends including those who live in your neighborhood (questions 4-6), please answer the following questions: </strong>';

var LSNS_questions = [{prompt: "How many relatives do you see or hear from at least once a month?", labels: LSNS_options, required: true, horizontal: false,},
	{prompt: "How many relatives do you feel at ease with that you can talk about private matters?", labels: LSNS_options, required: true, horizontal: false,},
	{prompt: " How many relatives do you feel close to such that you could call on them for help?", labels: LSNS_options, required: true, horizontal: false,},
	{prompt: "How many of your friends do you see or hear from at least once a month?", labels: LSNS_options, required: true, horizontal: false,},
	{prompt: "How many friends do you feel at ease with that you can talk about private matters?", labels: LSNS_options, required: true, horizontal: false,},
	{prompt: "How many friends do you feel close to such that you could call on them for help?", labels: LSNS_options, required: true, horizontal: false,},
  ];


var LSNS_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + LSNS_preamble + "</p>",
  questions: LSNS_questions,
  scale_width: 700,
  view_duration:6*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'LSNS'},
  on_finish:function(data){
  //The total scale score is an equally weighted sum of the six items, with scores ranging from 0 to 30.
  //In keeping with the nomenclature used for the
  //original LSNS (Lubben, 1988; Rubinstein et al., 1994), we would identify individuals with a score of less than 12 as socially isolated.
        answers =data.response;
        data.answers = answers;
        sum = answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4+answers.Q5;
        lsns_family = answers.Q0+answers.Q1+answers.Q2;
        lsns_friends = answers.Q3+answers.Q4+answers.Q5;
        data.LSNS_score = sum;
        data.lsns_family_score = lsns_family;
        data.lsns_friends_score = lsns_friends;
        //console.log(data.RSE_score);
    },
   }

 return LSNS_questionaire;
}


function PSQ(sequence_order) {

 // Pain sensitivity questionnaire

var PSQ_options = ['0 - Not at all painful','1', '2', '3', '4', '5', '6', '7','8','9','10 - most severe pain imaginable'];

var PSQ_preamble = '<strong> Below is a list of statements dealing with your general feelings about yourself. Please indicate how strongly you agree or disagree with each statement. </strong>';

var PSQ_questions = [{prompt: " Imagine you bump your shin badly on a hard edge, for example, on the edge of a glass coffee table. How painful would that be for you", labels: PSQ_options, required: true, horizontal: false,},
	{prompt: "Imagine you burn your tongue on a very hot drink.", labels: PSQ_options, required: true, horizontal: false,},
	{prompt: "Imagine you trap your finger in a drawer", labels: PSQ_options, required: true, horizontal: false,},
	{prompt: "Imagine walking across a cool tiled floor with bare feet.", labels: PSQ_options, required: true, horizontal: false,},
	{prompt: "Imagine you prick your fingertip on the thorn of a rose.", labels: PSQ_options, required: true, horizontal: false,},
  ];


var PSQ_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + PSQ_preamble + "</p>",
  questions: PSQ_questions,
  scale_width: 700,
  view_duration:5*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'PSQ'},
  on_finish:function(data){
        answers =data.response;
        data.answers = answers;
        sum = answers.Q0+answers.Q1+answers.Q2+answers.Q3+answers.Q4;
        data.PSQ_score = sum;
        //console.log(data.PSQ_score);
    },
   }

 return PSQ_questionaire;
}


function TIPI(sequence_order) {

  // Ten Item Personality Index 
 
 var TIPI_options = ['1 - Disagree strongly','2- Disagree Moderately', '3 - Disagree a little', '4 - Neither agree nor disagree', '5 - Agree a little', '6 - Agree moderately', '7 - Agree Strongly'];
 
 var TIPI_preamble = '<strong> Here are a number of personality traits that may or may not apply to you. Please select a number for each statement to indicate the extent to which you agree or disagree with that statement. You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other. </strong>';
 
 var TIPI_questions = [{prompt: "I see myself as: Extraverted, enthusiastic.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Critical, quarrelsome.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Dependable, self-disciplined.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Anxious, easily upset.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Open to new experiences, complex.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Reserved, quiet.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Sympathetic, warm.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Disorganised, careless.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Calm, emotionally stable.", labels: TIPI_options, required: true, horizontal: false,},
   {prompt: "I see myself as: Conventional, uncreative.", labels: TIPI_options, required: true, horizontal: false,},
   ];
 
 
 var TIPI_questionaire = {
   type: "survey-likert",
   preamble: "<p align='center'> " + TIPI_preamble + "</p>",
   questions: TIPI_questions,
   scale_width: 700,
   view_duration:10*2*1000,
   qn_sequence_order:sequence_order,
   data: {Q_name: 'TIPI'},
   on_finish:function(data){
         answers =data.response;
         data.answers = answers;
         data.tipi_extraversion_score = answers.Q0+1 + 7 - (answers.Q5+1)   //scale goes from 0 - 6 but should go from 1 - 7 (hence the +1s)
         data.tipi_agreeableness_score = 7-(answers.Q1+1) + answers.Q6+1
         data.tipi_conscientiousness_score = answers.Q2+1 + 7 - (answers.Q7+1)
         data.tipi_emotionalStability_score = 7-(answers.Q3+1) + answers.Q8+1
         data.tipi_opennessToExperiences = answers.Q4+1 + 7-(answers.Q9+1)
         data.TIPI_score = 0;
         //console.log(data.PSQ_score);
     },
    }
 
  return TIPI_questionaire;
 }


 function NIHEmotionalSupport(sequence_order) {

  // Ten Item Personality Index 
 
 var NIHEmotionalSupport_options = ['Never','Rarely', 'Sometimes', 'Usually', 'Always'];
 
 var NIHEmotionalSupport_preamble = '<strong> In the past month, please describe how often </strong>';
 
 var NIHEmotionalSupport_questions = [{prompt: "I have someone who understands my problems", labels: NIHEmotionalSupport_options, required: true, horizontal: false,},
   {prompt: "I have someone who will listen to me when I need to talk.", labels: NIHEmotionalSupport_options, required: true, horizontal: false,},
   {prompt: "I have someone I trust to talk with about my feelings.", labels: NIHEmotionalSupport_options, required: true, horizontal: false,}
   ];
 
 var NIHEmotionalSupport_questionaire = {
   type: "survey-likert",
   preamble: "<p align='center'> " + NIHEmotionalSupport_preamble + "</p>",
   questions: NIHEmotionalSupport_questions,
   scale_width: 700,
   view_duration:3*2*1000,
   qn_sequence_order:sequence_order,
   data: {Q_name: 'NIHEmotionalSupport'},
   on_finish:function(data){
         answers =data.response;
         data.answers = answers;
         sum = answers.Q0 + answers.Q1 + answers.Q2;
         data.NIHEmotionalSupport_score = sum;
     },
    }
 
  return NIHEmotionalSupport_questionaire;
 }

 function NIHFriendship(sequence_order) {

  // Ten Item Personality Index 
 
 var NIHFriendship_options = ['Never','Rarely', 'Sometimes', 'Usually', 'Always'];
 
 var NIHFriendship_preamble = '<strong> In the past month, please describe how often </strong>';
 
 var NIHFriendship_questions = [{prompt: "I get invited to go out and do things with other people", labels: NIHFriendship_options, required: true, horizontal: false,},
   {prompt: "I  can find a friend when I need one.", labels: NIHFriendship_options, required: true, horizontal: false,},
   {prompt: "I feel like I have lots of friends.", labels: NIHFriendship_options, required: true, horizontal: false,},
   {prompt: "I feel close to my friends.", labels: NIHFriendship_options, required: true, horizontal: false,}
   ];
 
 var NIHFriendship_questionaire = {
   type: "survey-likert",
   preamble: "<p align='center'> " + NIHFriendship_preamble + "</p>",
   questions: NIHFriendship_questions,
   scale_width: 700,
   view_duration:4*2*1000,
   qn_sequence_order:sequence_order,
   data: {Q_name: 'NIHFriendship'},
   on_finish:function(data){
         answers =data.response;
         data.answers = answers;
         sum = answers.Q0 + answers.Q1 + answers.Q2 + answers.Q3;
         data.NIHFriendship_score = sum;
     },
    }
 
  return NIHFriendship_questionaire;
 }

//How personally did you take the rejections?
function howPersonalQ(sequence_order) {

 // Rosenberg Self Esteem  (howPersonalQ) (10)

var howPersonalQ_options = ['0 - Not at all','1', '2', '3', '4', '5', '6', '7','8','9','10 - Very much'];

var howPersonalQ_preamble = '<strong> Please indicate how strongly you agree or disagree with each statement. </strong>';

var howPersonalQ_questions = [{prompt: "How difficult was it for you to deal with a friendship rejection?", labels: howPersonalQ_options, required: true, horizontal: false,},
	{prompt: "How personally did you take the friendship rejections?", labels: howPersonalQ_options, required: true, horizontal: false,},
  ];


var howPersonalQ_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + howPersonalQ_preamble + "</p>",
  questions: howPersonalQ_questions,
  scale_width: 700,
  view_duration:2*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'howPersonalQ'},
  on_finish:function(data){
        answers =data.response;
        data.answers = answers;
        sum = answers.Q0 + answers.Q1;
        data.howPersonalQ_score = sum;
        //console.log(data.howPersonalQ_score);
    },
   }
 return howPersonalQ_questionaire;
}


//Bartholomew, K. & Horowitz, L. M. (1991)
//Relationship style questionnaire (RQ)
//How personally did you take the rejections?
function RQ(sequence_order) {


var RQ_options = ['1 - Disagree strongly', '2', '3', '4', '5', '6', '7 - Agree strongly'];

var RQ_preamble = '<strong> Following are four general relationship styles that people often report. <br>'+
'Please indicate how strongly you agree or disagree with each statement. </strong>';

var RQ_questions = [{prompt: "It is easy for me to become emotionally close to others. I am comfortable depending on them and having them depend on me. I don't worry about being alone or having others not accept me.", labels: RQ_options, required: true, horizontal: false,},
	{prompt: "I am uncomfortable getting close to others. I want emotionally close relationships, but I find it difficult to trust others completely, or to depend on them. I worry that I will be hurt if I allow myself to become too close to others.", labels: RQ_options, required: true, horizontal: false,},
  {prompt: "I want to be completely emotionally intimate with others, but I often find that others are reluctant to get as close as I would like. I am uncomfortable being without close relationships, but I sometimes worry that others don't value me as much as I value them.", labels: RQ_options, required: true, horizontal: false,},
{prompt: "I am comfortable without close emotional relationships. It is very important to me to feel independent and self-sufficient, and I prefer not to depend on others or have others depend on me.", labels: RQ_options, required: true, horizontal: false,},];

  // Scale = Items 2, 5, 6, 8, 9 are reverse scored.
  //Give “Strongly Disagree” 1 point, “Disagree” 2 points, “Agree” 3 points, and “Strongly Agree” 4 points. Sum scores for all ten items.
  // Higher scores indicate higher self-esteem.
  // 10 items overall

var RQ_questionaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + RQ_preamble + "</p>",
  questions: RQ_questions,
  scale_width: 700,
  view_duration:4*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'RQ'},
  on_finish:function(data){
        answers =data.response;
        data.answers = answers;
        sum = answers.Q0 + answers.Q1;
        data.RQ_score = sum;

        data.RQ_secure_score = answers.Q0;
        data.RQ_fearfulAvoidant_score = answers.Q1;
        data.RQ_preoccupied_score = answers.Q2;
        data.RQ_dismmisingAvoidant_score = answers.Q3;
        //console.log(data.RQ_score);
    },
   }
 return RQ_questionaire;
}





function repeatQ(sequence_order) {

 // Custom questions (repeatQ)
 //need to fill this with the approval of Miriam

var repeatQ_options1 = ['0 - Not at all','1', '2', '3', '4', '5', '6', '7','8','9','10 - Very much'];
var SHAPS_options = ['Strongly Disagree', 'Disagree', 'Agree', 'Strongly Agree'];
var NIHFriendship_options = ['Never','Rarely', 'Sometimes', 'Usually', 'Always'];
var AMI_options = ['Completely untrue', 'Mostly untrue', 'Neither true nor untrue', 'Quite true', 'Completely true']
var RSE_options = ['Strongly Agree',	'Agree',	'Disagree',	'Strongly Disagree'];
//var SNI_options = ['No', 'Yes'];
var LSNS_options = ['None','One','Two','Three or four','five through eight','nine or more'];

var repeatQ_preamble = '<strong> Please answer the following questions </strong>';

var repeatQ_questions = [{prompt: "1. I would be able to enjoy my favourite meal/food", labels: SHAPS_options, required: true, horizontal: false,},
	{prompt: "2. I feel close to my friends.", labels: NIHFriendship_options, required: true, horizontal: false,},
	{prompt: "3. I make decisions firmly and without hesitation. ", labels: AMI_options, required: true, horizontal: false,},
	{prompt: "4.  I certainly feel useless at times", labels: RSE_options, required: true, horizontal: false,},
  {prompt: "5. How many relatives do you see or hear from at least once a month?", labels: LSNS_options, required: true, horizontal: false,}

	//{prompt: "5. Do you attend any classes (school, university, technical training, or adult education) on a regular basis?", labels: SNI_options, required: true, horizontal: false,},
  ];

  // Scale = Items 2, 5, 6, 8, 9 are reverse scored.
  //Give “Strongly Disagree” 1 point, “Disagree” 2 points, “Agree” 3 points, and “Strongly Agree” 4 points. Sum scores for all ten items.
  // Higher scores indicate higher self-esteem.
  // 10 items overall

var repeatQ_questionnaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + repeatQ_preamble + "</p>",
  questions: repeatQ_questions,
  data: {Q_name: 'repeatQ'},
  scale_width: 700,
  view_duration:5*2*1000,
  qn_sequence_order:sequence_order,
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;

        //rq = repeat question
        rq_shaps = answers.Q0;
        rq_NIHFriendship = answers.Q1;
        rq_ami = answers.Q2;
        rq_rse = answers.Q3;
        rq_lsns = answers.Q4;

        //Fetch the original answers and match them with these
        //oa = original answer
        all_data = jsPsych.data.get();
         oa_shaps = all_data.filter({Q_name:'SHAPS'}).select('answers').values[0].Q3;
         oa_NIHFriendship = all_data.filter({Q_name:'NIHFriendship'}).select('answers').values[0].Q3;
         oa_ami = all_data.filter({Q_name:'AMI'}).select('answers').values[0].Q4;
         oa_rse = all_data.filter({Q_name:'RSE'}).select('answers').values[0].Q5;
         oa_lsns = all_data.filter({Q_name:'LSNS'}).select('answers').values[0].Q0;
        //oa_sni = all_data.filter({Q_name:'SNI'}).select('answers').values[0].Q13;

        var check_repeat = 0;
        data.check_shaps = rq_shaps == oa_shaps;
        if (data.check_shaps){
          check_repeat++;
        }

        data.check_NIHFriendship = rq_NIHFriendship == oa_NIHFriendship;
        if (data.check_NIHFriendship){
          check_repeat++;
        }

        data.check_ami = rq_ami == oa_ami;
        if (data.check_ami){
          check_repeat++;
        }

        data.check_rse = rq_rse == oa_rse;
        if (data.check_rse){
          check_repeat++;
        }

        data.check_lsns = rq_lsns == oa_lsns;
        if (data.check_lsns){
          check_repeat++;
        }



        // data.check_sni = rq_sni == oa_sni;
        // if (data.check_sni){
        //   check_repeat++;
        // }

        data.repeatQ_score = check_repeat; //higher the score the better. score is out of 5
        //console.log(data.repeatQ_score)
    },
   }

 return repeatQ_questionnaire;
}

function customQ(sequence_order) {

 // Custom questions (customQ)
 //need to fill this with the approval of Miriam

var customQ_options1 = ['0 - Not at all','1', '2', '3', '4', '5', '6', '7','8','9','10 - Very much'];


var customQ_preamble = '<strong> Below is a list of statements about the task you just played. Please indicate your response on a scale of 1 to 10. </strong>';

var customQ_questions = [{prompt: "1.	Did you understand the task well, and were instructions clear?", labels: customQ_options1, required: true, horizontal: false,},
	{prompt: "2.	If a club was more friendly, I was more likely to send a friend request", labels: customQ_options1, required: true, horizontal: false,},
	{prompt: "3.	The appearance of the face influenced whether or not I sent a friend request", labels: customQ_options1, required: true, horizontal: false,},
	{prompt: "4.	If there were more people in a club (higher density), I was more likely to send a friend request", labels: customQ_options1, required: true, horizontal: false,},
	{prompt: "5.	How attentive were you during the task?", labels: customQ_options1, required: true, horizontal: false,},
  ];


var customQ_questionnaire = {
  type: "survey-likert",
  preamble: "<p align='center'> " + customQ_preamble + "</p>",
  questions: customQ_questions,
  scale_width: 700,
  view_duration:5*2*1000,
  qn_sequence_order:sequence_order,
  data: {Q_name: 'customQ'},
  on_finish:function(data){
        answers = data.response;
        data.answers = answers;

        data.cq_instclear = answers.Q0;
        data.cq_friendly = answers.Q1;
        data.cq_appearance = answers.Q2;
        data.cq_density = answers.Q3;
        data.cq_attentive = answers.Q4;

        sum = answers.Q0 + answers.Q1 + answers.Q2 + answers.Q3 + answers.Q4;

        data.customQ_score = sum;
        //console.log(data.customQ_score);

        all_data = jsPsych.data.get();
        //get summary scores consolidated here:
        data.shaps = all_data.filter({Q_name:'SHAPS'}).select('SHAPS_score').values;
        data.ucla = all_data.filter({Q_name:'UCLA'}).select('UCLA_score').values;
        data.bdi = all_data.filter({Q_name:'BDI'}).select('BDI_score').values;
        data.lhs = all_data.filter({Q_name:'LHS'}).select('LHS_score').values;
        //data.aq = all_data.filter({Q_name:'AQ'}).select('AQ_score').values;
        data.rse = all_data.filter({Q_name:'RSE'}).select('RSE_score').values;
        data.scs = all_data.filter({Q_name:'SCS'}).select('SCS_score').values;
        data.ocir = all_data.filter({Q_name:'OCIR'}).select('OCIR_score').values;
        //data.sni = all_data.filter({Q_name:'SNI'}).select('SNI_score').values; no full score for sni only subscales
        data.ami = all_data.filter({Q_name:'AMI'}).select('AMI_score').values;
        data.psq = all_data.filter({Q_name:'PSQ'}).select('PSQ_score').values;
        data.lsns = all_data.filter({Q_name:'LSNS'}).select('LSNS_score').values;
        data.uppsp = all_data.filter({Q_name:'UPPSP'}).select('UPPSP_score').values;
        data.lsaanx = all_data.filter({Q_name:'LSAanx'}).select('LSAanx_score').values;
        data.sticsa = all_data.filter({Q_name:'STICSA'}).select('STICSA_score').values;
        data.spq = all_data.filter({Q_name:'SPQ'}).select('SPQ_score').values;
        //data.lsaavoid = all_data.filter({Q_name:'LSAavoid'}).select('LSAavoid_score').values;
        data.howPersonalQ = all_data.filter({Q_name:'howPersonalQ'}).select('howPersonalQ_score').values;
        data.repeatq = all_data.filter({Q_name:'repeatQ'}).select('repeatQ_score').values;
        data.customq = all_data.filter({Q_name:'customQ'}).select('customQ_score').values;

        //subscale saving
        data.ami_beh = all_data.filter({Q_name:'AMI'}).select('AMI_score_beh').values;
        data.ami_social = all_data.filter({Q_name:'AMI'}).select('AMI_score_social').values;
        data.ami_emo = all_data.filter({Q_name:'AMI'}).select('AMI_score_emo').values;

        data.uppsp_negUrg = all_data.filter({Q_name:'UPPSP'}).select('UPPSP_score_NegUrg').values;
        data.uppsp_lackPers = all_data.filter({Q_name:'UPPSP'}).select('UPPSP_score_LackPersevere').values;
        data.uppsp_posUrg = all_data.filter({Q_name:'UPPSP'}).select('UPPSP_score_PosUrg').values;
        data.uppsp_senSeek = all_data.filter({Q_name:'UPPSP'}).select('UPPSP_score_SensationSeeking').values;
        data.uppsp_lackPremed = all_data.filter({Q_name:'UPPSP'}).select('UPPSP_score_LackPremeditation').values;

        data.scs_socCon = all_data.filter({Q_name:'SCS'}).select('SCS_score_SocConnect').values;
        data.scs_socAss = all_data.filter({Q_name:'SCS'}).select('SCS_score_SocialAssurance').values;

        // data.sni_highCon = all_data.filter({Q_name:'SNI'}).select('SNI_score_HIGHContactR').values;
        // data.sni_noPpl = all_data.filter({Q_name:'SNI'}).select('SNI_score_NoPeopleSocNet').values;
        // data.sni_embNet = all_data.filter({Q_name:'SNI'}).select('SNI_score_EmbeddedNet').values;

        data.oci_check = all_data.filter({Q_name:'OCIR'}).select('OCIR_score_check').values;
        data.oci_neut = all_data.filter({Q_name:'OCIR'}).select('OCIR_score_neut').values;
        data.oci_hoarding = all_data.filter({Q_name:'OCIR'}).select('OCIR_score_hoarding').values;
        data.oci_washing = all_data.filter({Q_name:'OCIR'}).select('OCIR_score_washing').values;
        data.oci_ordering = all_data.filter({Q_name:'OCIR'}).select('OCIR_score_ordering').values;

        // data.aq_soSk = all_data.filter({Q_name:'AQ'}).select('AQ_Score_SocialSK').values;
        // data.aq_attSw = all_data.filter({Q_name:'AQ'}).select('AQ_Score_AttenSwitch').values;
        // data.aq_attDet = all_data.filter({Q_name:'AQ'}).select('AQ_Score_AttenDetail').values;
        // data.aq_comm = all_data.filter({Q_name:'AQ'}).select('AQ_Score_Communication').values;
        // data.aq_img = all_data.filter({Q_name:'AQ'}).select('AQ_Score_Imagination').values;

        data.rq_secure = all_data.filter({Q_name:'RQ'}).select('RQ_secure_score').values;
        data.rq_preoccupied = all_data.filter({Q_name:'RQ'}).select('RQ_preoccupied_score').values;
        data.rq_fearfulAvoidant = all_data.filter({Q_name:'RQ'}).select('RQ_fearfulAvoidant_score').values;
        data.rq_dismissingAvoidant = all_data.filter({Q_name:'RQ'}).select('RQ_dismmisingAvoidant_score').values;

        data.lsns_family = all_data.filter({Q_name:'LSNS'}).select('lsns_family_score').values;
        data.lsns_friends = all_data.filter({Q_name:'LSNS'}).select('lsns_friends_score').values;

        data.tipi_extraversion = all_data.filter({Q_name:'TIPI'}).select('tipi_extraversion_score').values
        data.tipi_agreeableness = all_data.filter({Q_name:'TIPI'}).select('tipi_agreeableness_score').values
        data.tipi_conscientiousness = all_data.filter({Q_name:'TIPI'}).select('tipi_conscientiousness_score').values
        data.tipi_emotionalStability = all_data.filter({Q_name:'TIPI'}).select('tipi_emotionalStability_score').values
        data.tipi_opennessToExperiences = all_data.filter({Q_name:'TIPI'}).select('tipi_opennessToExperiences_score').values

        
        data.qn_rts = all_data.filterCustom(function(trial){
    return trial.fast_count >= 0; //fast count property only exists for questionnaires. So we only get rts for qns.
}).select('rt').values;

        data.fast_counts = all_data.select('fast_count').values;
    },
   }

 return customQ_questionnaire;
}
