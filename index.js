// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrap){
    switch (wrap) {
        case '*':
            return function (value) {
                return `You are *${value}*!`;
            };
        case '||':
            return function (value) {
                return `You are ||${value}||!`;
            };
        default:
            return function (value) {
                return `You are *${value}*.`;
            };
    }
}