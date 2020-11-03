console.log('loaded index script...');

const stimulusContainer = document.getElementById('stimulus-container');

let stimulus = document.createElement('video');

stimulus.className = 'stimulus';
stimulus.id = 'stimulus1';
stimulus.style.display = 'none';

videoSource = document.createElement('source');
videoSource.src = 'assets/stimulus1.ogg';
videoSource.type = 'video/ogg';

stimulus.appendChild(videoSource);
stimulusContainer.appendChild(stimulus);

stimulus = document.createElement('video');

stimulus.className = 'stimulus';
stimulus.id = 'stimulus2';
stimulus.style.display = 'none';

videoSource = document.createElement('source');
videoSource.src = 'assets/stimulus2.ogg';
videoSource.type = 'video/ogg';

stimulus.appendChild(videoSource);
stimulusContainer.appendChild(stimulus);

console.log('videos ready');

document.getElementById('button1').onclick = () => onClickButton1();
document.getElementById('button2').onclick = () => onClickButton2();
document.getElementById('button3').onclick = () => onClickButton3();

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

async function toggleAllButtons() {
    console.log('toggling buttons...');
    const buttons = document.getElementsByTagName('button');

    for (let index = 0; index < buttons.length; ++index) {
        buttons[index].disabled = !buttons[index].disabled;
    }
}

async function displayStimulus1() {
    console.log('displaying stimulus 1...');

    const stimulus = document.getElementById('stimulus1');
    stimulus.style.display = 'block';
    stimulus.play();
    
    await sleep(60000);
    return stimulus.id;
}

async function displayStimulus2() {
    console.log('displaying stimulus 2...');

    const stimulus = document.getElementById('stimulus2');
    stimulus.style.display = 'block';
    stimulus.play();
    
    await sleep(60000);
    return stimulus.id;
}

async function displayStimulus3() {
    console.log('displaying stimulus 3...');

    const stimulus = document.createElement('img');
    stimulus.className = 'stimulus';
    stimulus.id = 'stimulus3';
    stimulus.src = 'assets/stimulus3.png';

    const stimulusContainer = document.getElementById('stimulus-container');
    stimulusContainer.appendChild(stimulus);

    await sleep(60000);
    return stimulus.id;
}

async function sleep(duration) {
    await new Promise(resolve => setTimeout(resolve, duration));
}

async function hideStimulus(id) {
    console.log('hiding stimulus...');
    const stimulus = document.getElementById(id);

    if (stimulus.tagName === 'IMG')
        stimulus.parentNode.removeChild(stimulus);
    else
        stimulus.style.display = 'none';
}
