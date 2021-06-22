//Opdracht 7
/*const paintWall = function (colour){
    console.log ("Buy " + colour + " paint & brush");
    console.log ("Clean wall");
    console.log ("Paint wall " + colour);
    console.log ("The wall has been painted " + colour);
};
paintWall("orange");
paintWall("purple");*/
//Single argument deel 7 without and argument geeft console ipv de kleur "indefined"
const paintWall = function (colour, orientation){
    console.log("The " + orientation + " wall has been painted " + colour);
};
paintWall("orange", "north");
paintWall("grey", "south-east");
//Multiple arguments Deel 6 yes the order of arguments matter when calling the function
//Multiple arguments Deel 7 if you switch them only in the function definition the switched also in the console node output; sentence is not correct
//Multiple arguments Deel 8 if you change the order in the funciton definition and when calling the function then it works okay again;
