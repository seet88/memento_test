function srd(input_string){
	var str=String(input_string);
var str_out = str.replace(".",",");
	return str_out;
	}
    
function src(input_string){
	var str=String(input_string);
var str_out = str.replace(",",".");
	return str_out;
}

function dateDiffInMinutes(startDate, endDate) {
    var startTime = new Date(startDate); 
    var endTime = new Date(endDate);
    var diff = endDate - startDate;
    return (diff / 60000);
}

function isNull(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

function isEmpty(value){
	if(value===undefined || value===null || value===NaN)
		return true
	else 
		return false
}
