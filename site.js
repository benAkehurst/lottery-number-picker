// var mainNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
// var bonusNumber = [1,2,3,4,5,6,7];

function picknumbers(){
	
	// Here num1 - num6 get random numbers from 1 - 37
	var num1 = 0;
	for (var i = 0; i < 6; i++) {
		var num1= (Math.random()*37)+1;
    	num1 = parseInt(num1);
		}

	var num2 = 0;
	for (var i = 0; i < 6; i++) {
		var num2= (Math.random()*37)+1;
    	num2 = parseInt(num2);
		}

	var num3 = 0;
	for (var i = 0; i < 6; i++) {
		var num3= (Math.random()*37)+1;
    	num3 = parseInt(num3);
		}

	var num4 = 0;
	for (var i = 0; i < 6; i++) {
		var num4= (Math.random()*37)+1;
    	num4 = parseInt(num4);
		}

	var num5 = 0;
	for (var i = 0; i < 6; i++) {
		var num5= (Math.random()*37)+1;
    	num5 = parseInt(num5);
		}

	var num6 = 0;
	for (var i = 0; i < 6; i++) {
		var num6= (Math.random()*37)+1;
    	num6 = parseInt(num6);
		}

	// Here the 6 random main numbers are sorted in accending order
	var mainNumbersArray = [num1,num2,num3,num4,num5,num6];
	mainNumbersArray.sort(function(a, b){return a-b});

	// Here a bonus number from 1 - 7 are picked.
	var bonusNum = (Math.random()*7)+1;
	bonusNum = parseInt(bonusNum);

	// Here the 2 display spans are accesed in the DOM
	var mainNumberSpan = document.getElementById('mainNumberSpan');
	var bonusNumberSpan = document.getElementById('bonusNumberSpan');

	mainNumberSpan.innerHTML = mainNumbersArray;
	bonusNumberSpan.innerHTML = bonusNum;

}
