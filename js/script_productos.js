function removeClassActive() {
    const panels = document.getElementsByClassName('panel');
    for (let i = 0; i < panels.length; i++) {
        panels[i].className = 'panel';
    }

    const imgs = document.getElementsByClassName('img');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }

}

window.onclick = e => {
    if (e.target.className === 'panel') {
        removeClassActive();
        e.target.className = 'panel active';

        const img = e.target.getElementsByClassName('img')[0];
        setTimeout(() => {
            img.style.display = 'block';
        }
            , 700);

    } else {
        removeClassActive();
    }

}