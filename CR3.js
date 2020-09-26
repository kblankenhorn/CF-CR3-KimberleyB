
function calcInsurance(){	

var name = document.getElementById("name").value;
console.log(name);
var age =document.getElementById("age").value;
console.log(age);
var country =document.getElementById("country").value;
console.log(country);
var hp= document.getElementById("hp").value;
console.log(hp);
	

	if (country == "Austria") {
		var result = ((hp*100) / (age + 50)).toFixed(2);
		 document.getElementById("result").innerHTML = `${name} your insurance price is ${result} €`;
	
	}
	else if (country == "Hungary") {
		var result = ((hp*120) / (age + 100)).toFixed(2);
		document.getElementById("result").innerHTML = `${name} your insurance price is ${result}  €`;
	}	

	else if (country == "Greece") {
		var result = ((hp*150) / (age + 3) + 50).toFixed(2);

		document.getElementById("result").innerHTML = `${name} your insurance price is ${result} €`;
	}	


}

document.getElementById("button").addEventListener("click", calcInsurance, false)

	
	






	

