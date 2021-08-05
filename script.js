const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn_search = document.querySelector("#search");
const btn_reset = document.querySelector("#reset");
const text = document.querySelector("#text");
var words = [];
var defColor = color.value;
var student_id = 620612154;
var author_mode = 1;
var fullname = "Nitipog Saengla";

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
  if(author_mode == 0){
		author.innerHTML = "" + student_id + " " + fullname;
		author_mode = 1;
		btn_toggle.innerHTML = "Display Calculation";
	}else{
		author.innerHTML = "" + (student_id+parseInt(length.value));
		author_mode = 0;
		btn_toggle.innerHTML = "Display Author";
	}
}

btn_reset.onclick = () => {
	length.value = 5;
}

btn_search.onclick = () => {
	
}

// more codes for Search and Reset buttons here
