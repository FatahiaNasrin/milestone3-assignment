//convert from feet to mile
function feetToMile(feet){
    if (feet<0)
       {console.log("Miles can not be negative");
       var mile = feet*0.000189394;
       return mile; }
    else 
        {var mile = feet*0.000189394;
        return mile; }
    }
    var convertFeet = feetToMile(156);
    console.log(convertFeet);
    
    //get how many wood you need to make some chairs, tables and beds
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount   = bed * 5;
    totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var totalWoodNeed = woodCalculator(10, 5, 12);
console.log("You need total wood:", totalWoodNeed);

//brickCalculator for getting how many bricks you need per floor
function brickCalculator(numberOfFloor){
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if (numberOfFloor>20){
        numberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) +  ((numberOfFloor-20)*10*1000) ;  
    }
    else if(numberOfFloor>10){
        numberOfBricks =  (firstTenFloor * 15 * 1000)+  ((numberOfFloor-10)*12*1000) ;
    }
    else if (numberOfFloor>0){
        numberOfBricks = (numberOfFloor * 15 * 1000);
    }
    else {   
        console.log("Number of floor must be greater than zero");
    }
    return numberOfBricks;
}
var totalbBricksperFeet = brickCalculator(10);
console.log(totalbBricksperFeet);

//get smallest letter from an array
function tinyFriend (letters) {
    var smallest = letters[0];
    for(var i = 0; i < letters.length; i++){
        var currentLetter = letters[i];
        if(currentLetter.length<smallest.length){
            smallest = currentLetter;
        }
    }
    return smallest;
}
var smallestCharacter = tinyFriend(["Rupa", "Tushari", "Raidah", "Roy"]);
console.log(smallestCharacter);