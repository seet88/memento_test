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

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function empty(e) {
  switch (e) {
    case "":
    case null:
    case NaN:
    case false:
    case "undefined":
    case typeof this == "undefined":
      return true;
    default:
      return false;
  }
}

function isArrayEmpty(array){
	if(array === undefined || array.length == 0){
		return true;
	}else 
		return false;
}

/**
 * zwraca nazwe uprawy w zaleznosci od sezonu
 * @param {object|string} uprawa 
 * @param {string} sezon 
 * @returns {string}
 */
function pobierzNazweUprawy(uprawa,sezon){
	if(sezon=="2017"){
		return uprawa;
	}else if(!isArrayEmpty(uprawa)){
		return uprawa[0].name
	} else
		return "brakWybranejUprawy";
}
