var homescore = [];
var awayscore = [];
var spread = [];
var favourite;
var undo;
var i;
var time = 1000;
var timer = setInterval(myTimer, 1000)



function Calculate2(){

	for(var i=0; i<spread.length; i++ ){
		}
	if ((document.getElementById("Home").checked == true) && (awayscore.length > homescore.length)){
		return "Home is losing by: " + (awayscore.length - homescore.length) + " point";
	}else if ((document.getElementById("Away").checked == true) && (awayscore.length > homescore.length)){
	 	return "Away is winning by: " + (awayscore.length - homescore.length) + " point";
	} else if ((document.getElementById("Home").checked == true) && (homescore.length > awayscore.length)){
			return "Home is winning by: " + (homescore.length - awayscore.length) + " point";
	} else if ((document.getElementById("Away").checked == true) && (homescore.length > awayscore.length)){
			return "Away is losing by: " + (homescore.length - awayscore.length) + " point";
	} else{
			return "Both teams have the same score!"
	}


}




function Calculate(){
	document.getElementById("totalscreen1").innerHTML = Calculate2();
}



function Calculate(){
	document.getElementById("totalscreen1").innerHTML = Calculate2();
}

function HomeButton1(){
		for(var i=0; i<homescore.length; i++){
		}
		return homescore.length+= 1
}

function HomeHtml1(){
	document.getElementById("homescreen1").innerHTML = HomeButton1();
	Calculate();
}
function HomeButton2(){
		for(var i=0; i<homescore.length; i++){
		}
		return homescore.length+= 2
}

function HomeHtml2(){
	document.getElementById("homescreen1").innerHTML = HomeButton2();
	Calculate();
}
function HomeButton3(){
		for(var i=0; i<homescore.length; i++){
		}
		return homescore.length+= 3
}

function HomeHtml3(){
	document.getElementById("homescreen1").innerHTML =HomeButton3();
	Calculate();
}


function AwayButton1(){
		for(var i=0; i<awayscore.length; i++){
		}
		return awayscore.length += 1
}

function AwayHtml1(){
	document.getElementById("awayscreen1").innerHTML = AwayButton1();
	Calculate();


}


function AwayButton2(){
		for(var i=0; i<awayscore.length; i++){

		}
		return awayscore.length+= 2
		return

}

function AwayHtml2(){
	document.getElementById("awayscreen1").innerHTML = AwayButton2();
	Calculate();
}

function AwayButton3(){
		for(var i=0; i<awayscore.length; i++){

		}
		return awayscore.length+=3

}

function AwayHtml3(){
	document.getElementById("awayscreen1").innerHTML = AwayButton3();
	Calculate();
}


function HomeButton4(){
		for(var i=0; i<homescore.length; i++){
		}
		return homescore.length-= 1
}

function HomeHtml4(){
	document.getElementById("homescreen1").innerHTML = HomeButton4();
	Calculate();
}
function HomeButton5(){
		for(var i=0; i<homescore.length; i++){
		}
		return homescore.length-= 2
}

function HomeHtml5(){
	document.getElementById("homescreen1").innerHTML = HomeButton5();
	Calculate();
}
function HomeButton6(){
		for(var i=0; i<homescore.length; i++){
		}
		return homescore.length-= 3
}

function HomeHtml6(){
	document.getElementById("homescreen1").innerHTML =HomeButton6();
	Calculate();
}


function AwayButton4(){
		for(var i=0; i<awayscore.length; i++){
		}
		return awayscore.length -= 1
}

function AwayHtml4(){
	document.getElementById("awayscreen1").innerHTML = AwayButton4();
	Calculate();


}


function AwayButton5(){
		for(var i=0; i<awayscore.length; i++){

		}
		return awayscore.length-= 2
		return

}

function AwayHtml5(){
	document.getElementById("awayscreen1").innerHTML = AwayButton5();
	Calculate();
}

function AwayButton6(){
		for(var i=0; i<awayscore.length; i++){

		}
		return awayscore.length-=3

}

function AwayHtml6(){
	document.getElementById("awayscreen1").innerHTML = AwayButton6();
	Calculate();
}


function myTimer(){
	time = (time - 1);
	document.getElementById("timeDisplay").innerHTML = time;
	if(time<=0)
		document.getElementById("timeDisplay").innerHTML = "Game is done!";
	
}











