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
function fordStats(){
	console.log("ford mustang stats")
	speed = 7.5;
	handling = 5.2;
	acceleration = 8;
	launch = 9;
	braking = 6;
	hp = 460;
	gforce = 1.05;
	weight = 3800;
	update();
}
//arrow functions
function changeImgLeft(){
	if(car.src.match("images/nissan_240SX.jpg")){
		car.src = "images/dodge_charger.jpg";
		carName.innerHTML = "Dodge Charger SRT Hellcat";
		dodgeStats();
	} else if (car.src.match("images/rtr_mustang.jpg")){
		car.src = "images/nissan_240SX.jpg";
		carName.innnerHTML = "Nissan 240SX";
		nissanStats();
	} else {
		car.src = "images/rtr_mustang.jpg";
		carName.innerHTML = "Ford Mustang RTR"
		fordStats();
	}
}

function changeImgRight(){
	if(car.src.match("images/dodge_charger.jpg")){
		car.src = "images/nissan_240SX.jpg";
		carName.innerHTML = "Nissan 240SX";
		nissanStats();
	} else if (car.src.match("images/nissan_240SX.jpg")){
		car.src = "images/rtr_mustang.jpg";
		carName.innerHTML = "Ford Mustang RTR";
		fordStats();
	} else {
		car.src = "images/dodge_charger.jpg";
		carName.innerHTML = "Dodge Charger SRT Hellcat"
		dodgeStats();
	}
}
//main reset function
function resetUpgrades(){
	if (car.getAttribute('src') == "images/nissan_240SX.jpg") {
		nissanStats();
	} else if (car.getAttribute('src') == "images/dodge_charger.jpg"){
		dodgeStats();
	} else {
		fordStats();
	}
}
//upgrade button functions
function upgradeEngine(){
	speed++;
	hp = hp + 300;
	weight =  weight + 50;
	update();
}
function upgradeHandling(){
	handling++;
	gforce = gforce + 0.1;
	var newGforce = Math.round( gforce * 10) / 10;
	gforce = newGforce;
	update();
}
function upgradeDrivetrain(){
	acceleration = acceleration + 0.3;
	var newAcceleration = Math.round( acceleration * 10) / 10;
	acceleration = newAcceleration;
	weight = weight - 500;
	update();
}
function upgradeWheels(){
	launch = launch + 2;
	handling =  handling + 3;
	braking++;
	weight = weight - 20;
	gforce = gforce + 0.3;
	var newGforce = Math.round( gforce * 10) / 10;
	gforce = newGforce;
	update();
}
function upgradeAerodynamics(){
	braking = braking + 0.1;
	var newBraking = Math.round( braking * 10) / 10;
	braking = newBraking;
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
function finish(){
	alert("BUY FH4 NOW");
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