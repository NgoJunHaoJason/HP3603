console.log('loaded index script...');

function onClickStimulus1() {
    toggleAllButtons()
        .then(() => displayStimulus1())
        .then((id) => hideStimulus(id))
        .then(() => toggleAllButtons());
}

function onClickStimulus2() {
    toggleAllButtons()
        .then(() => displayStimulus2())
        .then((id) => hideStimulus(id))
        .then(() => toggleAllButtons());
}

function onClickStimulus3() {
    toggleAllButtons()
        .then(() => displayStimulus3())
        .then((id) => hideStimulus(id))
        .then(() => toggleAllButtons());
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

    const stimulusContainer = document.getElementById('stimulus-container');
    stimulusContainer.appendChild(stimulus)
    
    await sleep(3000);
    return stimulus.id;
}

async function displayStimulus2() {
    console.log('displaying stimulus 2...');
    const stimulus = createStimulus('stimulus2');

    const stimulusContainer = document.getElementById('stimulus-container');
    stimulusContainer.appendChild(stimulus)
    
    await sleep(3000);
    return stimulus.id;
}

async function displayStimulus3() {
    console.log('displaying stimulus 3...');
    const stimulus = createStimulus('stimulus3');

    const stimulusContainer = document.getElementById('stimulus-container');
    stimulusContainer.appendChild(stimulus);

    await sleep(3000);
    return stimulus.id;
}

function createStimulus(id) {
    const stimulus = document.createElement('img');

    stimulus.className = 'stimulus';
    stimulus.id = id;
    stimulus.src = 'wheel.svg';

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
