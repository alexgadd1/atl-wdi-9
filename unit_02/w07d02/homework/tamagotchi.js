console.log('tamagotchi file is loaded');

//your constructor function here
this.foodInTummy = 10;
this.restedness = 10;
this.health = 10;
this.name = name;
this.creatureType = creatureType;
this.cry = function() {
	this.foodInTummy--;
    console.log("WAAAH!!!!!!");
}
//STEP 1 ********
//create new Tamagotchis
//Make two new tamagotchis
//Invoke each tamagotchi's cry method

//STEP 2 ************
this.start = function(){
    console.log("Starting " + this.name);
this.start = function(){
    console.log("Starting " + this.creatureType);
// Invoke cry method*********

//test out your Tamagotchies below via console.logs
