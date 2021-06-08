window.onload = function (){
	let elems = document.getElementsByTagName("li");
	let screen = document.querySelectorAll(' p')[0];
	let clear =   document.getElementsByClassName('clear')[0];
	
	for(let i=0; i<elems.length; i+=1){
		  if(elems[i].innerHTML === '='){
			    elems[i].addEventListener("click", calculate(i));
		  }else{
			   elems[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}
	

	
	
	function addtocurrentvalue (i){
		return function(){
			if (elems[i].innerHTML === "÷") {
               screen.innerHTML  +=  "/ " ;
      }else if(elems[i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   } else{
			   screen.innerHTML  += elems[i].innerHTML;
		   }
	  };
   }
 


   clear.onclick = function () {
    screen.innerHTML = '';
  }; 

 function calculate(i) {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    };
  }
};