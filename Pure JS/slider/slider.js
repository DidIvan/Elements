window.onload = function () {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const image = document.querySelectorAll('.photos img');

    let i = 0;
    prev.onclick = function () {
        image[i].className = '';
        i--;
        if (i < 0) {
            i = image.length - 1;
        }
        image[i].className = "showed"
    };
    next.onclick = function () {
        image[i].className = '';
        i++;
        if (i >= image.length) {
            i = 0;
        }
        image[i].className = "showed"
    }
};