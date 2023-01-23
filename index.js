
let count = 0;
const saveEL=	document.getElementById("save-el");

const countDisplay = document.getElementById("count-display");
countDisplay.innerHTML = count;
const increment = () => {
  count++;
  console.log(count);
  countDisplay.innerHTML = count;
}

const save=()=> {
	
	let countStr=count +"-"
	saveEL.innerHTML+=countStr
	countDisplay.innerHTML = 0;
	count=0;
    console.log(count)
}