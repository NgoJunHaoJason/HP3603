console.log('loaded index script...');

document.getElementById('button1').onclick = () => onClickButton1();
document.getElementById('button2').onclick = () => onClickButton2();
document.getElementById('button3').onclick = () => onClickButton3();
document.getElementById('back').onclick = () => onClickBackButton();

function onClickButton1() {
    toggleAllButtons()
        .then(() => displayStimulus1())
        .then((id) => hideStimulus(id))
        .then(() => toggleAllButtons());
}

function onClickButton2() {
    toggleAllButtons()
        .then(() => displayStimulus2())
        .then((id) => hideStimulus(id))
        .then(() => toggleAllButtons());
}

function onClickButton3() {
    toggleAllButtons()
        .then(() => displayStimulus3())
        .then((id) => hideStimulus(id))
        .then(() => toggleAllButtons());
}

function onClickBackButton() {
    const url = location.href.slice(0, -15) + 'index.html';
    location.href = url;
}

async function toggleAllButtons() {
    console.log('toggling buttons...');
    const buttons = document.getElementsByTagName('button');

    for (let index = 0; index < buttons.length; ++index) {
        buttons[index].disabled = !buttons[index].disabled;
    }
}

async function displayStimulus1() {
    console.log('displaying stimulus 1...');
    const stimulus = createStimulus('stimulus1');

    stimulus.addEventListener('animationend', () => {
        const intervalNum = +stimulus.className.substring(17);
        stimulus.className = 'stimulus interval' + (intervalNum + 1)
    })

    const stimulusContainer = document.getElementById('stimulus-container');
    stimulusContainer.appendChild(stimulus);

    stimulus.className += ' interval0';
    
    await sleep(60000); // 1 min
    return stimulus.id;
}

async function displayStimulus2() {
    console.log('displaying stimulus 2...');
    const stimulus = createStimulus('stimulus2');

    const stimulusContainer = document.getElementById('stimulus-container');
    stimulusContainer.appendChild(stimulus)
    
    await sleep(60000); // 1 min
    return stimulus.id;
}

async function displayStimulus3() {
    console.log('displaying stimulus 3...');
    const stimulus = createStimulus('stimulus3');

    const stimulusContainer = document.getElementById('stimulus-container');
    stimulusContainer.appendChild(stimulus);

    await sleep(60000); // 1 min
    return stimulus.id;
}

function createStimulus(id) {
    const stimulus = document.createElement('img');

    stimulus.className = 'stimulus';
    stimulus.id = id;
    stimulus.src = '../assets/custom-stimulus.svg';

    return stimulus;
}

async function sleep(duration) {
    await new Promise(resolve => setTimeout(resolve, duration));
}

async function hideStimulus(id) {
    console.log('hiding stimulus...');
    const stimulus = document.getElementById(id);
    stimulus.parentNode.removeChild(stimulus);
}
