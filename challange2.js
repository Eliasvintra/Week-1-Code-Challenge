// Speed Detector challange

function speedDetector(speed) {
   const speed_limit = 70; // creating a speed limit variable with 70 as the value
   const km_per_point = 5; // creating a km point variable with 5 as the value

   if (speed < speed_limit + km_per_point)  { //if speed limit is less than the total of speed limit of 70 and 5 the km point
       console.log("Ok"); 
       //"Ok"
       return;
   }

   const demerit_point = Math.floor((speed - speed_limit) / km_per_point); //calc for speed detected minus the speed limit of 70  divided by 5 the kmper point
   if (demerit_point >= 12) {
       console.log("License suspended");
       //"License suspended"
   } 
   else { 
       console.log(`You have, ${demerit_point} demerit points!`) // output to be returned if motorist speed is greater than speed limit of 70
       //`You have, ${demerit_point} demerit points!`
   }
   return demerit_point; 
}

//let x = prompt('Enter your speed!'); //used to prompt user for details   
speedDetector(x);
//console.log(speedDetector(x))   


