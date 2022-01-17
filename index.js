var answers = {
    'mathV1': {
        'mathV1Q1' : '1',
        'mathV1Q2' : '2',
        'mathV1Q3' : '4',
        'mathV1Q4' : '1',
        'mathV1Q5' : '4',
    },
    'mathV2': {
        'mathV2Q1' : '3',
        'mathV2Q2' : '2',
        'mathV2Q3' : '1',
        'mathV2Q4' : '1',
        'mathV2Q5' : '2',
    },
    'mathV3': {
        'mathV3Q1' : '2',
        'mathV3Q2' : '2',
        'mathV3Q3' : '2',
        'mathV3Q4' : '3',
        'mathV3Q5' : '2',
    },
    'mathV4': {
        'mathV4Q1' : '3,75',
        'mathV4Q2' : '12,5',
        'mathV4Q3' : '0,95',
        'mathV4Q4' : '0,2',
        'mathV4Q5' : '34,3',
    },
    'mathV5': {
        'mathV5Q1' : '2',
        'mathV5Q2' : '3',
        'mathV5Q3' : '4',
        'mathV5Q4' : '1',
        'mathV5Q5' : '2',
    },
    'infV1': {
        'infV1Q1' : '2',
        'infV1Q2' : '8',
        'infV1Q3' : '19',
        'infV1Q4' : '15',
        'infV1Q5' : '102',
    },
    'infV2': {
        'infV2Q1' : '5',
        'infV2Q2' : '8',
        'infV2Q3' : '5',
        'infV2Q4' : '21222',
        'infV2Q5' : '1',
    },
    'infV3': {
        'infV3Q1' : '570',
        'infV3Q2' : '338',
        'infV3Q3' : '2500',
        'infV3Q4' : '1500',
        'infV3Q5' : '1200',
    },
    'infV4': {
        'infV4Q1' : '7',
        'infV4Q2' : '5',
        'infV4Q3' : '6',
        'infV4Q4' : '5',
        'infV4Q5' : '8',
    },
    'infV5': {
        'infV5Q1' : '102',
        'infV5Q2' : '118',
        'infV5Q3' : '24',
        'infV5Q4' : '80',
        'infV5Q5' : '48',
    }
}

function init() {
    openPage('home');
}

function openPage(id){
    hideAll();
    document.getElementById(id).style.display = 'block';
}

function hideAll() {
    var els = document.getElementsByClassName('page');
    Array.prototype.forEach.call(els, function(el) {
        el.style.display = 'none';
    });
}

function hideMe(element) {
    if(element) {
        element.style.visibility = "hidden";
    }
}

function check(id){
    var correctAnswers = answers[id];
    var numberOfCorrectAnswers = 0;
    var questionCount = 0;
    for (var key in correctAnswers){
        questionCount++;
        var userAnswer = document.getElementById(key).value;
        if (userAnswer === correctAnswers[key]){
            numberOfCorrectAnswers++;
            document.getElementById(key).style.backgroundColor = "lightgreen";
        }
        else{
            document.getElementById(key).style.backgroundColor = "lightpink";
        }
    }
    console.log(numberOfCorrectAnswers);
    console.log(correctAnswers.length);
    if (numberOfCorrectAnswers === questionCount){
        document.getElementById("testPassedMessage").style.visibility="visible";
    }else{
        document.getElementById("testFailedMessage").style.visibility="visible";
    }
}