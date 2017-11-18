currentCycle = 1;
$(document).ready(function() {
	$("#overview input").attr("disabled", true);
	$('#datetimepicker').datetimepicker({
		    	format: 'DD/MM/YYYY',
		    	locale: "et",
		    	minDate: 0
	});
	$('#delRow').prop('disabled', true);
});

$(document).ready(function() {
    $('#form_to_table').click(function() {

    	$("#overview").tabularInput("addRow");

    	$( ".input" + currentCycle ).each( function(i, elem) {
    		jQuery('[name="tellimusLeht[' + i + '][' + currentCycle + ']"]').val(elem.value);
		});

		for (i = 1; i <= currentCycle; i++) {
		    $( ".input" + i ).hide();
		} 
		
		if(currentCycle == 1){
			$("#overview").tabularInput("deleteRow");
		};
		
		currentCycle += 1;

		if(currentCycle > 1){
			$('#delRow').prop('disabled', false);
		}
		else {
			$('#delRow').prop('disabled', true);
		}

		$( ".input" + currentCycle ).show();
		$("#overview input").attr("disabled", true);	

    });
    $('#delRow').click(function() {
	    if(currentCycle != 1){
	    	$( ".input" + currentCycle ).hide();
	    	currentCycle -= 1;
	    	$( ".input" + currentCycle ).show();
	    }
	    if(currentCycle > 2){
			$('#delRow').prop('disabled', false);
		}
		else {
			$('#delRow').prop('disabled', true);
		}

    });
});

function ftt(form_value){
    alert("Value :"+form_value)
}
