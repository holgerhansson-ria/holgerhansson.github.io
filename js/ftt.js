$(document).ready(function() {
    $('#form_to_table').click(function() {
      ftt($('datepicker').val());
    });
});

function ftt(form_value){
    alert("Value :"+form_value)
}