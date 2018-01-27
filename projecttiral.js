var homescore = 0;
var awayscore = 0;
var spread = 0;

var i;

function myFunction7(){
		for(var i=0; i<spread; i++ ){
		}
		if (awayscore > homescore){
			return awayscore - homescore
		} else if (homescore > awayscore){
			return homescore - awayscore
		} else{
			return 0
		}
}

function Calculate(){
	document.getElementById("totalscreen1").innerHTML = myFunction7();
}



function myFunction1(){
		for(var i=0; i<awayscore; i++){
		}
		return awayscore + 1
}

function Away1(){
	document.getElementById("awayscreen1").innerHTML = myFunction1.call(Calculate());

}


function myFunction2(){
		for(var i=0; i<awayscore; i++){

		}
		return awayscore+= 2
		return 

}

function Away2(){
	document.getElementById("awayscreen1").innerHTML = myFunction2.call(Calculate());
}

function myFunction3(){
		for(var i=0; i<awayscore; i++){

		}
		return awayscore+=3

}

function Away3(){
	document.getElementById("awayscreen1").innerHTML = myFunction3.call(Calculate());
}

function myFunction4(){
		for(var i=0; i<homescore; i++){
		}
		return homescore+= 1
}

function Home1(){
	document.getElementById("homescreen1").innerHTML = myFunction4.call(Calculate());

}
function myFunction5(){
		for(var i=0; i<homescore; i++){
		}
		return homescore+= 2
}

function Home2(){
	document.getElementById("homescreen1").innerHTML = myFunction5.call(Calculate());

}
function myFunction6(){
		for(var i=0; i<homescore; i++){
		}
		return homescore+= 3
}

function Home3(){
	document.getElementById("homescreen1").innerHTML = myFunction6.call(Calculate());

}

function Creation(){


}


function Deletion(){


}

function Undo(){

}









