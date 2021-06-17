function start() {
    $('.start').hide();
    $('.question').show();
}

$('#A').click(function (){
    var type = $('#type').val();
    var preValue = $('#'+type).val();
    $('#'+type).val(parseInt(preValue)+1);
});