var currentRow = 1;
var firstRun = true;

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

    	$( ".input" + currentRow ).each( function(column, elem) {
    		jQuery('[name="tellimusLeht[' + column + '][' + currentRow + ']"]').val(elem.value);
		});

		for (i = 1; i <= currentRow; i++) {
		    $( ".input" + i ).hide();
		} 
		
		if(currentRow == 1 && firstRun == true){
			$("#overview").tabularInput("deleteRow");
		};
		
		firstRun = false;
		currentRow += 1;

		if(currentRow > 1){
			$('#delRow').prop('disabled', false);
		}
		else {
			$('#delRow').prop('disabled', true);
		}

		$( ".input" + currentRow ).show();
		$("#overview input").attr("disabled", true);	

    });
    $('#delRow').click(function() {
	    if(currentRow != 1){
	    	$( ".input" + currentRow ).hide();
	    	currentRow -= 1;
	    	$( ".input" + currentRow ).show();
	    }
	    if(currentRow >= 2){
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
