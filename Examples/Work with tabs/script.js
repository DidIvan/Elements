let tab;
let tabContent;
window.onload = () => {
    tab = document.querySelector('.tab');
    tabContent = document.querySelector('.tabContent');
    hideTabsContent(1);
};

hideTabsContent = (a) => {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.querySelector('tabs').addEventListener('click', (event) => {
    let target = event.target;
    if (target.className == 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabContent(i);
                break;
            }
        }
    }
});

showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
};
