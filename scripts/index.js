console.log('loaded index script');

// start setting-up
const stimulusContainer = document.getElementById('stimulus-container');

// set-up stimuli
let stimulus = null;

for (let index = 1; index <= 3; ++index) {
    stimulus = document.createElement('video');

    stimulus.className = 'stimulus';
    stimulus.id = 'stimulus' + index;
    stimulus.style.display = 'none';
    stimulus.onended = () => hideStimulus('stimulus' + index);
    
    videoSource = document.createElement('source');
    videoSource.src = 'assets/stimulus' + index + '.ogg';
    videoSource.type = 'video/ogg';
    
    stimulus.appendChild(videoSource);
    stimulusContainer.appendChild(stimulus);
}

// set-up buttons
document.getElementById('button1').onclick = () => onClickButton('stimulus1');
document.getElementById('button2').onclick = () => onClickButton('stimulus2');
document.getElementById('button3').onclick = () => onClickButton('stimulus3');

// done setting up
console.log('set-up done');

// global variables

let currentPlayingStimulus = null;

// functions that control playing of stimuli

function onClickButton(id) {
    // stops any stimulus is being played currently
    if (currentPlayingStimulus !== null) {
        console.log('stopping ' + currentPlayingStimulus.id);

        currentPlayingStimulus.pause();
        currentPlayingStimulus.currentTime = 0;

        hideStimulus(currentPlayingStimulus.id)
        currentPlayingStimulus = null;
    }

    displayStimulus(id);
}

function displayStimulus(id) {
    console.log('displaying ' + id);

    const stimulus = document.getElementById(id);
    stimulus.style.display = 'block';
    stimulus.play();

    currentPlayingStimulus = stimulus;
}

function hideStimulus(id) {
    console.log('hiding ' + id);
    const stimulus = document.getElementById(id);

    stimulus.style.display = 'none';
}
