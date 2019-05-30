$('#menu-opener').click(() => {
    $('#menu')[0].style.opacity = 1;
    $('#menu')[0].style.visibility = 'visible';
});

$('#menu-closer').click(() => {
    $('#menu')[0].style.opacity = 0;
    $('#menu')[0].style.visibility = 'hidden';
});

console.log($('body').materialScrollTop)