var resultDisplay = document.getElementById("result_display");
var row1 = ["1","2","3","+"]
for (i = 0; i<=3;i++) {
	document.getElementById("buttons_row_1").children[i].addEventListener("click", function() {
	console.log(resultDisplay.innerText += row1[i]);
	});
};



// document.getElementById("buttons_row_1").children[0].addEventListener("click", function() {
// 	console.log(resultDisplay.innerHTML += "1");
// });

// document.getElementById("buttons_row_1").children[1].addEventListener("click", function() {
// 	console.log(resultDisplay.innerHTML += "2");
// });
