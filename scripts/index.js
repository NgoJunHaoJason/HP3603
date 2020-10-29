console.log('loaded index script...');

const buttons = document.getElementsByTagName('button');

for (let index = 0; index < buttons.length; ++index)
    buttons[index].onclick = () => onClickRedirectButton(buttons[index]);

function onClickRedirectButton(button) {
    const url = location.href.slice(0, -10) + 'stimuli/' + button.id + '.html';
    redirect(url);
}

function redirect(url) {
    location.href = url;
}
