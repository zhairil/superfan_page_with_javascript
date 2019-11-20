//advanced function
function update(){
	//upgrade variables
	document.getElementById("speed").innerHTML = "SPEED: " + speed;
	document.getElementById("handling").innerHTML = "HANDLING: " + handling;
	document.getElementById("acceleration").innerHTML = "ACCELERATION: " + acceleration;
	document.getElementById("launch").innerHTML = "LAUNCH: " + launch;
	document.getElementById("braking").innerHTML = "BRAKING: " + braking;
	document.getElementById("hp").innerHTML = "HORSEPOWER: " + hp + " hp";
	document.getElementById("g-force").innerHTML = "G-FORCE: " + gforce + " G";
	document.getElementById("weight").innerHTML = "WEIGHT: " + weight + " lbs";
}
//reset functions for each car
function nissanStats(){
	console.log("nissan 240sx stats")
	speed = 4;
	handling = 3.5;
	acceleration = 4.2;
	launch = 3.6;
	braking = 5;
	hp = 155;
	gforce = 0.7;
	weight = 2800;
	update();
}

function dodgeStats(){
	console.log("dodge charger stats");
	speed = 8;
	handling = 5.2;
	acceleration = 7.8;
	launch = 9.5;
	braking = 6.4;
	hp = 707;
	gforce = 1.1;
	weight = 4500;
	update();
}
//arrow functions
function changeImgLeft(){
	car.src = "images/dodge_charger.jpg";
	carName.innerHTML = "Dodge Charger SRT Hellcat";
	dodgeStats();
}

function changeImgRight(){
	car.src = "images/nissan_240SX.jpg";
	carName.innerHTML = "Nissan 240SX";
	nissanStats();
}
//main reset function
function resetUpgrades(){
	if (car.getAttribute('src') == "images/nissan_240SX.jpg") {
		nissanStats();
	} else if (car.getAttribute('src') == "images/dodge_charger.jpg"){
		dodgeStats();
	}
}
//upgrade button functions
function upgradeEngine(){
	speed++;
	hp = hp + 300;
	update();
}
function upgradeHandling(){
	handling++;
	gforce = gforce + 0.1;
	update();
}
function upgradeDrivetrain(){
	acceleration = acceleration + 0.3;
	weight = weight - 500;
	update();
}
function upgradeWheels(){
	launch = launch + 2;
	handling =  handling + 3;
	weight = weight - 20;
	gforce = gforce + 0.3;
	update();
}
function upgradeAerodynamics(){
	braking = braking + 0.1;
	handling = handling + 2;
	update();
}
function engineSwap(){
	if (hp < 1500) {
		document.getElementById("engine3").play();
		hp = 1500;
		update();
	} else if(car.getAttribute('src') == "images/dodge_charger.jpg"){
		hp = 707;
		document.getElementById("engine1").play();
		update();
	} else {
		hp = 155;
		document.getElementById("engine2").play();
		update();
	}
}

//hidden background music function
function eurobeat(){
	document.getElementById("eurobeat1").play();
}
function stop(){
	document.getElementById("eurobeat1").pause();
	document.getElementById("eurobeat2").pause();
}
update();