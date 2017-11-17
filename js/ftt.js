currentCycle = 1;
$(document).ready(function() {
	$('#datetimepicker1').datetimepicker({
		    	format: 'DD/MM/YYYY',
		    	locale: "et",
		    	minDate: 0
	});
});

$(document).ready(function() {
    $('#form_to_table').click(function() {

    	$( ".input" + currentCycle ).each( function(i, elem) {
    		jQuery('[name="tellimusLeht[' + i + '][' + currentCycle + ']"]').val(elem.value);
		});

		for (i = 1; i <= currentCycle; i++) {
		    $( ".input" + i ).hide();
		} 
		
		currentCycle += 1;
		$('#datetimepicker' + currentCycle).datetimepicker({
	    	format: 'DD/MM/YYYY',
	    	locale: "et",
	    	minDate: 0
		});
		$( ".input" + currentCycle ).show();
		$("#demo-2").tabularInput("addRow");		
    });
});

function ftt(form_value){
    alert("Value :"+form_value)
}
