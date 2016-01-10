window.oPics;
$(document).ready(function() {
    var oA = $.ajax({
        url: 'pics.json',
        type: 'GET',

        dataType: 'JSON'
    });

    oA.success(function(data) {
        oPics = data;
        fn(oPics);
    });


});

function fn(oPics) {
    var index = 0;

    $('#span1').click(function() {
        --index;
        if (index < 0) {
            index = oPics.Images.length - 1;
        }
        $('div img').attr('src', oPics.Images[index]);

    });
    $('#span2').click(function() {
        ++index;
        if (index > oPics.Images.length - 1) {
            index = 0;
        }
        $('div img').attr('src', oPics.Images[index]);
    });




}
