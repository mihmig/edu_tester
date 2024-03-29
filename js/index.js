window.addEventListener("load", () => {
    init();
});
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
        'mathV3Q1' : '1',
        'mathV3Q2' : '0',
        'mathV3Q3' : '1',
        'mathV3Q4' : '1',
        'mathV3Q5' : '0',
        'mathV3Q6' : '1',
        'mathV3Q7' : '1',
        'mathV3Q8' : '0',
        'mathV3Q9' : '1',
        'mathV3Q10' : '0',
        'mathV3Q11' : '0',
        'mathV3Q12' : '1',
        'mathV3Q13' : '1',
        'mathV3Q14' : '1',
        'mathV3Q15' : '0',
        'mathV3Q16' : '1',
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
    },
    'physicsV1': {
        'physicsV1Q1' : '4',
        'physicsV1Q2' : '1',
        'physicsV1Q3' : '3',
        'physicsV1Q4' : '4',
        'physicsV1Q5' : '2',
    },
    'physicsV2': {
        'physicsV2Q1' : '5',
        'physicsV2Q2' : '3',
        'physicsV2Q3' : '2',
        'physicsV2Q4' : '2',
        'physicsV2Q5' : '3',
        'physicsV2Q6' : '5',
        'physicsV2Q7' : '1',
        'physicsV2Q8' : '4',
        'physicsV2Q9' : '5',
        'physicsV2Q10' : '1',
        'physicsV2Q11' : '4',
        'physicsV2Q12' : '3',
        'physicsV2Q13' : '3',
        'physicsV2Q14' : '4',
        'physicsV2Q15' : '2',
    },
    'physicsV3': {
        'physicsV3Q1': '2',
        'physicsV3Q2': '3',
        'physicsV3Q3': '1',
        'physicsV3Q4': '3',
        'physicsV3Q5': '2',
        'physicsV3Q6': '4',
        'physicsV3Q7': '1',
        'physicsV3Q8': '3',
        'physicsV3Q9': '3',
        'physicsV3Q10': '2',
    },
    'physicsV4': {
        'physicsV4Q1': '2',
        'physicsV4Q2': '3',
        'physicsV4Q3': '7',
        'physicsV4Q4': '6',
        'physicsV4Q5': '2',
        'physicsV4Q6': '5',
        'physicsV4Q7': '7',
        'physicsV4Q8': '6',
        'physicsV4Q9': '1',
        'physicsV4Q10': '5',
        'physicsV4Q11': '6',
        'physicsV4Q12': '8',
        'physicsV4Q13': '6',
        'physicsV4Q14': '8',
        'physicsV4Q15': '2',
        'physicsV4Q16': '1',
        'physicsV4Q17': '3',
        'physicsV4Q18': '5',
        'physicsV4Q19': '2',
        'physicsV4Q20': '9',
    },
    'physicsV5': {
        'physicsV5Q1': '1',
        'physicsV5Q2': '10',
        'physicsV5Q3': '372',
        'physicsV5Q4': '25',
        'physicsV5Q5': '40'
    }
}

function init() {
    openPage('home');
}

function openPage(id){
    hideAll();
    document.getElementById(id).style.display = 'block';
    window.scrollTo(0,0);
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
    let correctAnswers = answers[id];
    let numberOfCorrectAnswers = 0;
    let questionCount = 0;
    for (let key in correctAnswers){
        questionCount++;
        let answerElement = document.getElementById(key);
        if (!answerElement) continue;
        let answerType = answerElement.getAttribute("data");
        let userAnswer = null;
        switch (answerType) {
            case "radio":
                let input = answerElement.querySelector("input:checked");
                if (input) {
                    userAnswer = input.value;
                }
                break;
            case "checkbox":
                let checkBox = answerElement.querySelector("input");
                if (checkBox) {
                    userAnswer = checkBox.checked ? "1" : "0";
                }
                break
            case "select":
                let selectField = document.getElementById(key);
                if (selectField) {
                    userAnswer = selectField.value;
                }
                break;
            case "text":
                let textField = document.getElementById(key);
                if (textField) {
                    userAnswer = textField.value;
                }
                break;
            default:
                console.error("check(id): unknown element type - " + answerElement.tagName);
                continue;
        }

        if (userAnswer === correctAnswers[key]){
            numberOfCorrectAnswers++;
            answerElement.style.backgroundColor = "lightgreen";
        }
        else{
            answerElement.style.backgroundColor = "lightpink";
        }
    }
    if (numberOfCorrectAnswers === questionCount){
        document.getElementById("testPassedMessage").style.visibility="visible";
        document.getElementById("testPassedMessage").style.backgroundColor='lightgreen';
    }else{
        document.getElementById("testFailedMessage").style.visibility="visible";
        document.getElementById("testFailedMessage").style.backgroundColor='lightpink';
    }
}

function update() {
    caches.keys().then(function(names) {
        for (let name of names)
            caches.delete(name);
    });
    window.location.reload();
}