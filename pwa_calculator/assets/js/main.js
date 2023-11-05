let temporaries = {
    activateSegment: 0,
    previewArr: [],
    currentlyAccess: '',
    result: 0,
    preview: '',
    value: 0
}

function getButtonText(ID) {
    let result = $('#' + ID).text();
    return result;
}

function accessButton(ID) {
    let button = getButtonText(ID);

    switch (ID) {
        case "actionClear":
            temporaries.value = 0;
            temporaries.preview = '';
            temporaries.result = 0;
            temporaries.activateSegment = 0;
            temporaries.previewArr = [];
            temporaries.currentlyAccess = '';

            $('#result').val('');
            $('#text').text("");
            break;
        case "action0":
            writeFormulas(button);
            break;
        case "action1":
            writeFormulas(button);
            break;
        case "action2":
            writeFormulas(button);
            break;
        case "action3":
            writeFormulas(button);
            break;
        case "action4":
            writeFormulas(button);
            break;
        case "action5":
            writeFormulas(button);
            break;
        case "action6":
            writeFormulas(button);
            break;
        case "action7":
            writeFormulas(button);
            break;
        case "action8":
            writeFormulas(button);
            break;
        case "action9":
            writeFormulas(button);
            break;

        case "actionDot":
            if (temporaries.previewArr.length > 0) {
                writeFormulas(button);
            }
            break;


        case "actionPercent":
            percentageFormulas();
            break;

        case "actionPlusMin":
            switchPlusMinus();
            break;

        case "actionDivided":
            if (temporaries.previewArr.length > 0) {
                splitSegment(button);
            }
            break;
        case "actionTimes":
            if (temporaries.previewArr.length > 0) {
                splitSegment(button);
            }
            break;
        case "actionMin":
            if (temporaries.previewArr.length > 0) {
                splitSegment(button);
            }
            break;
        case "actionPlus":
            if (temporaries.previewArr.length > 0) {
                splitSegment(button);
            }
            break;

        case "actionSubmit":
            if (temporaries.previewArr.length > 0) {
                submit();
            }
            break;
        case "actionBackSpace":
            if (temporaries.previewArr.length > 0) {
                backSpace();
            }
            break;

        default:
            break;
    }
}

function previewFormulas() {
    let previewString = temporaries.previewArr.toString();
    temporaries.preview = previewString.replaceAll(',', '');

    $('#text').text('');
    $('#text').text(temporaries.preview);
}

function storeFormulas(type) {
    let segmentWork = checkCurrentWorkingSegment();
    if (type == 'number' && temporaries.currentlyAccess != '') {

        if (temporaries.previewArr[segmentWork] == '+' ||
            temporaries.previewArr[segmentWork] == '-' ||
            temporaries.previewArr[segmentWork] == '*' ||
            temporaries.previewArr[segmentWork] == '/') {
            temporaries.previewArr.push(temporaries.currentlyAccess);
        } else {
            temporaries.previewArr.pop();
            temporaries.previewArr.push(temporaries.currentlyAccess);
        }
    } else if (type == 'number' && temporaries.currentlyAccess == '') {
        console.log("remove success!");

    } else {
        if (temporaries.previewArr[segmentWork] == '+' ||
            temporaries.previewArr[segmentWork] == '-' ||
            temporaries.previewArr[segmentWork] == '*' ||
            temporaries.previewArr[segmentWork] == '/') {
            temporaries.previewArr.pop();
            temporaries.previewArr.push(type);
        } else {
            temporaries.previewArr.push(type);
        }
    }

    previewFormulas();
}

function writeFormulas(button) {
    let valuePreview = temporaries.preview;
    let valueButton = String(button);

    if (valuePreview == "") {
        temporaries.currentlyAccess = button;
    } else {

        let valueCurrent = temporaries.currentlyAccess;
        let firstCharacterPreview = valueCurrent.substring(0, 1);
        if (valueCurrent.length == 1 && firstCharacterPreview == "0" && valueButton != '.') {

            if (valueButton != '.') {
                valueCurrent = valueCurrent.substring(1);
            }

            temporaries.currentlyAccess = valueCurrent + valueButton;
        } else if (valueCurrent.length == 1 && valueCurrent == "0" && valueButton == '.') {

            temporaries.currentlyAccess = temporaries.currentlyAccess + valueButton;
        } else {
            temporaries.currentlyAccess = temporaries.currentlyAccess + valueButton;
        }
    }
    storeFormulas('number');
}

function checkCurrentWorkingSegment() {
    let checkCurrentSegment = temporaries.previewArr;
    let segment = checkCurrentSegment.length
    if (segment == 0) {
        return 0;
    } else if (segment > 0) {
        return segment - 1
    }
}

function splitSegment(button) {
    let checkCurrentSegment = temporaries.previewArr;

    if (checkCurrentSegment.length == 0) {
        checkCurrentSegment.push(temporaries.currentlyAccess);
        checkCurrentSegment.push(button);
    } else if (checkCurrentSegment.length > 0) {
        checkCurrentSegment[checkCurrentSegment.length - 1];
        if (
            checkCurrentSegment[checkCurrentSegment.length - 1] == '+' ||
            checkCurrentSegment[checkCurrentSegment.length - 1] == '-' ||
            checkCurrentSegment[checkCurrentSegment.length - 1] == '*' ||
            checkCurrentSegment[checkCurrentSegment.length - 1] == '/'
        ) {
            checkCurrentSegment.pop();
            checkCurrentSegment.push(button);
        }
    }
    temporaries.currentlyAccess = '';
    storeFormulas(button);

}

function percentageFormulas() {
    let valueCurrent = temporaries.currentlyAccess;
    let result = valueCurrent / 100;
    temporaries.currentlyAccess = String(result);
    storeFormulas("number");
}

function submit() {
    let previewString = temporaries.previewArr.toString();
    let test = previewString.replaceAll(',', '');
    temporaries.result = eval(test);

    $('#result').val('');
    $('#result').val(temporaries.result);
}

function backSpace() {

    let segmentWork = checkCurrentWorkingSegment();
    $('#result').val('');
    if (temporaries.previewArr[segmentWork] == '+' ||
        temporaries.previewArr[segmentWork] == '-' ||
        temporaries.previewArr[segmentWork] == '*' ||
        temporaries.previewArr[segmentWork] == '/') {
        temporaries.previewArr.pop();
        segmentWork = checkCurrentWorkingSegment();
        let lastSegment = temporaries.previewArr[segmentWork];

        temporaries.currentlyAccess = lastSegment;
    } else {
        let lastSegment = temporaries.previewArr[segmentWork];


        let removeSegment = lastSegment.substring(0, lastSegment.length - 1);
        if (removeSegment.length == 0) {


            temporaries.previewArr.pop();
            segmentWork = checkCurrentWorkingSegment();
            let lastSegment = temporaries.previewArr[segmentWork];

            if (lastSegment == '+' ||
                lastSegment == '-' ||
                lastSegment == '*' ||
                lastSegment == '/') {
                temporaries.currentlyAccess = '';
            } else {
                temporaries.currentlyAccess = lastSegment;
            }
        } else {
            temporaries.currentlyAccess = removeSegment;
        }

        if (segmentWork == 0 && removeSegment == "") {
            temporaries.value = 0;
            temporaries.preview = '';
            temporaries.result = 0;
            temporaries.activateSegment = 0;
            temporaries.previewArr = [];
            temporaries.currentlyAccess = '';
        }

    }
    storeFormulas("number");



}

function switchPlusMinus() {
    let checkCurrentSegment = temporaries.previewArr;
    let valueCurrent = temporaries.currentlyAccess;
    let getFirstCharacter = valueCurrent.substring(0, 1);
    if (
        (checkCurrentSegment[checkCurrentSegment.length - 1] != '+' ||
        checkCurrentSegment[checkCurrentSegment.length - 1] != '-' ||
        checkCurrentSegment[checkCurrentSegment.length - 1] != '*' ||
        checkCurrentSegment[checkCurrentSegment.length - 1] != '/') &&   
        valueCurrent.length > 0
    ) {
        if (getFirstCharacter == '-') {
            valueCurrent = valueCurrent.replace('-', '');
            temporaries.currentlyAccess = valueCurrent;
        } else {
            temporaries.currentlyAccess = '-' + valueCurrent;
        }
        storeFormulas("number");
    }
}