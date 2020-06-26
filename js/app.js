function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function calcResult(result) {
    var result = document.getElementById("result");
    result.value = eval(result.value);

    if (eval(result.value) == undefined) {
        result.value = "";
    }
}

function onEnterPress(result) {
    result = document.getElementById("result");
    if(event.key === 'Enter') {
        result.value = eval(result.value);
    }

    if (eval(result.value) == undefined) {
        result.value = "";
    }
}