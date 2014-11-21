var first= '';
var second= '';
var operator= '';

document.getElementById('buttons_row_1').children[0].addEventListener("click", function(){
if(operator.length<1){
first += '1';
}
else{
second += '1'
document.getElementById('operator_display').innerHTML = '';
}
document.getElementById('result_display_value').innerHTML += 1;
});
document.getElementById('buttons_row_1').children[1].addEventListener("click", function(){
if(operator.length<1){
first += '2';
}
else{
second += '2'
document.getElementById('operator_display').innerHTML = '';
}
document.getElementById('result_display_value').innerHTML += 2;
});
document.getElementById('buttons_row_1').children[2].addEventListener("click", function(){
if(operator.length<1){
		first += '3';
	}
	else{
		second += '3'
		document.getElementById('operator_display').innerHTML = '';
	}
	document.getElementById('result_display_value').innerHTML += 3;
});
document.getElementById('buttons_row_2').children[0].addEventListener("click", function(){
	if(operator.length<1){
		first += '4';
	}
	else{
		second += '4'
		document.getElementById('operator_display').innerHTML = '';
	}
	document.getElementById('result_display_value').innerHTML += 4;
});
document.getElementById('buttons_row_2').children[1].addEventListener("click", function(){
	if(operator.length<1){
		first += '5';
	}
	else{
		second += '5'
		document.getElementById('operator_display').innerHTML = '';
	}
	document.getElementById('result_display_value').innerHTML += 5;
});
document.getElementById('buttons_row_2').children[2].addEventListener("click", function(){
	if(operator.length<1){
		first += '6';
	}
	else{
		second += '6'
		document.getElementById('operator_display').innerHTML = '';
	}
	document.getElementById('result_display_value').innerHTML += 6;
});
document.getElementById('buttons_row_3').children[0].addEventListener("click", function(){
	if(operator.length<1){
		first += '7';
	}
	else{
		second += '7'
		document.getElementById('operator_display').innerHTML = '';
	}
	document.getElementById('result_display_value').innerHTML += 7;
});
document.getElementById('buttons_row_3').children[1].addEventListener("click", function(){
	if(operator.length<1){
		first += '8';
	}
	else{
		second += '8'
		document.getElementById('operator_display').innerHTML = '';
	}
	document.getElementById('result_display_value').innerHTML += 8;
});
document.getElementById('buttons_row_3').children[2].addEventListener("click", function(){
	if(operator.length<1){
		first += '9';
	}
	else{
		second += '9'
		document.getElementById('operator_display').innerHTML = '';
	}
	document.getElementById('result_display_value').innerHTML += 9;
});
document.getElementById('buttons_row_4').children[1].addEventListener("click", function(){
	if(operator.length<1){
		first += '0';
	}
	else{
		second += '0'
		document.getElementById('operator_display').innerHTML = '';
	}
	document.getElementById('result_display_value').innerHTML += 0;
});
document.getElementById('buttons_row_1').children[3].addEventListener("click", function(){
	document.getElementById('operator_display').innerHTML += '+';
	document.getElementById('result_display_value').innerHTML = '';
	operator='+';
});
document.getElementById('buttons_row_2').children[3].addEventListener("click", function(){
	document.getElementById('operator_display').innerHTML += '-';
	document.getElementById('result_display_value').innerHTML = '';
	operator='-';
});
document.getElementById('buttons_row_3').children[3].addEventListener("click", function(){
	document.getElementById('operator_display').innerHTML += '*';
	document.getElementById('result_display_value').innerHTML = '';
	operator='-';
});
document.getElementById('buttons_row_4').children[3].addEventListener("click", function(){
	document.getElementById('operator_display').innerHTML += '/';
	document.getElementById('result_display_value').innerHTML = '';
	operator='/';
});
document.getElementById('buttons_row_4').children[2].addEventListener("click", function(){
	if(operator === '+'){
	first= Number(first)+Number(second);
	second='';
	operator='';
}
	else  if(operator === '-'){
	first= Number(first)-Number(second);
	second='';
	operator='';
	}
	else  if(operator === '*'){
	first= Number(first)*Number(second);
	second='';
	operator='';
	}
	else  if(operator === '/'){
	first= Number(first)/Number(second);
	second='';
	operator='';
	}
	document.getElementById('result_display_value').innerHTML = first;
});
document.getElementById('buttons_row_4').children[0].addEventListener("click", function(){
	document.getElementById('result_display_value').innerHTML = '';
	document.getElementById('operator_display').innerHTML = '';
	first=''
	second='';
	operator='';
});

///---------------------------------------------------------------------------
// var resultDisplay = document.getElementById("result_display");
// var row1 = ["1","2","3","+"]

// for (i = 0; i <= 3; i++) {
//   var child = document.getElementById("buttons_row_1").children[i];
//     addMyListener(child, i);
// };

// function addMyListener(child, index) {
//   child.addEventListener("click", function() {
//     console.log(index)
//     resultDisplay.textContent = row1[index];
//   });
// }
