var length = $('.block1').length;

$($('.block1')[length - 1]).remove();

$('body').css('padding','');
$('.tablearea').css('width', 'inherit');