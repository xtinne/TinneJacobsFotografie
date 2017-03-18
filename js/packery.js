var windowSize;
var menu;
var $grid;

$(window).resize(function() {
    $grid.packery('layout');
});

$grid = $('.grid').imagesLoaded(function() {
    $grid.packery({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
    });
});