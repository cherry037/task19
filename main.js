var valueArray = [57,88,10,9,100,11,20,60];
var zs = /^[0-9]*[1-9][0-9]*$/; 
function renderDiv (){
	var divs = document.getElementsByTagName("div");
	divs[0].innerHTML = "";
	for (var i = 0; i < valueArray.length; i++) {
		divs[0].innerHTML = divs[0].innerHTML + "<li>" + valueArray[i] + "</li>";
	}
	for (var j = 0; j < valueArray.length; j++) {
		divs[0].childNodes[j].style.height = parseInt(valueArray[j])+40+"px";
		if (valueArray[j]>=10&&valueArray[j]<25){
			divs[0].childNodes[j].style.backgroundColor = "#ff461f";
		}else if (valueArray[j]>=25&&valueArray[j]<40){
			divs[0].childNodes[j].style.backgroundColor = "#ffa400";
		}else if (valueArray[j]>=40&&valueArray[j]<55){
			divs[0].childNodes[j].style.backgroundColor = "#faff72";
		}
		else if (valueArray[j]>=55&&valueArray[j]<70){
			divs[0].childNodes[j].style.backgroundColor = "#9ed048";
		}else if (valueArray[j]>=70&&valueArray[j]<85){
			divs[0].childNodes[j].style.backgroundColor = "#7fecad";
		}else if (valueArray[j]>=85&&valueArray[j]<100){
			divs[0].childNodes[j].style.backgroundColor = "#4b5cc4";
		}else{
			divs[0].childNodes[j].style.backgroundColor = "#8d4bbb";
		}

	}

}
function initIuput (){
	alert("请输入10-100的数字！");
		document.getElementById("in").value = "";
		document.getElementById("in").focus();
}
function leftIn() {
	var inputValue = document.getElementById("in").value.trim();
	if (!(zs.test(inputValue)&&inputValue>=10&&inputValue<=100)) {
		initIuput();
	} else {
		valueArray.unshift(inputValue);
		renderDiv();	
	}
		
}
function leftOut() {
	valueArray.shift();
	renderDiv();		
}
function rightIn() {
	var inputValue = document.getElementById("in").value.trim();
	if (!(zs.test(inputValue)&&inputValue>=10&&inputValue<=100)) {
		initIuput();
	} else {
		valueArray.push(inputValue);
		renderDiv();
	}				
}
function rightOut() {
	valueArray.pop();
	renderDiv();

}		
// function bubbleSort(){
// 	var temp = 0;
// 	for (var i = valueArray.length-1 ; i >= 0; i--) {
// 		for (var j = 0; j < i; j++) {
// 			if (valueArray[j]>valueArray[j+1]) {
// 				temp = valueArray[j];
// 				valueArray[j] = valueArray[j+1];
// 				valueArray[j+1] = temp;
// 				renderDiv();
// 			}
// 		}
// 	}
// }	
function bubbleSort(){
	var temp = 0;
	var i = valueArray.length-1;
	var t;
	function foo(){
		for (var j = 0; j < i; j++) {
			if (valueArray[j]>valueArray[j+1]) {
				temp = valueArray[j];
				valueArray[j] = valueArray[j+1];
				valueArray[j+1] = temp;
				renderDiv();
			}
		}
		if (i>=0) {
			i--;
		}else{
			clearInterval(t);
		}
	}
	t = setInterval(foo,200);	
}
buttons = document.getElementsByTagName("button");
window.onload = function(){
	renderDiv();
	buttons[0].onclick = leftIn;
	buttons[1].onclick = rightIn;
	buttons[2].onclick = leftOut;
	buttons[3].onclick = rightOut;
	buttons[4].onclick = bubbleSort;
};	
