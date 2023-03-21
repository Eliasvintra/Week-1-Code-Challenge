// //// Net Salary Calculator

//let x = prompt('Enter your gross Salary?'); 
//prompts user to input data

//Net salary

function netSalaryCalculator( amountPaid) { 
const netSalary = amountPaid - payeeTaxCalculator(amountPaid) - nssfCalculator(amountPaid) - nhifCalculator(amountPaid) //created a variable netsalary to equal amount paid which does the deductions
// netsalary is equal to amountpaid minus the tax/nssf/nhif  

    //const netSalary = Salary; 
    return netSalary;
}

netSalaryCalculator(x);
console.log(netSalaryCalculator(x))

 function payeeTaxCalculator(amountPaid) {
     let payTax = amountPaid;
         if (amountPaid < 24000) { //amount less than 24000
             payTax = (amountPaid * (10 / 100)) //calc for amount paid * 0.01
         } 
         else if (amountPaid >24001 && amountPaid <= 32333) { //amount greater than 24001 and less than 32333
             payTax = (amountPaid * (25 / 100))  //calc for amount paid * 0.25
         }
         else {
             payTax = (amountPaid * (30 / 100))  //calc for amount paid * 0.30
         }
         return payTax
     }
 //GIVES TAX AMOUNT TO BE CUT------
     payeeTaxCalculator(x);
     console.log(payeeTaxCalculator(x))

//Nhif calculator:


 function nhifCalculator(amountPaid) {
     let nhif = amountPaid
     if (amountPaid <= 5999) { //amount less than 5999
         nhif = 150;
     }
     else if (amountPaid > 5999 && amountPaid <=19999) { //amount greater than 5999 and less than 19999
         nhif = 600;
     }
     else if (amountPaid > 19999 && amountPaid <=49999) {  //amount greater than 19999 and less than 49999
         nhif = 1100;
     }
     else {
         nhif = 1700; //any amount above 50000
     }
     return nhif;
 }
 //GIVES NHIF AMOUNT TO CUT ------------
 nhifCalculator(x);
 console.log(nhifCalculator(x))
 //console.log('This is the nhif cut ', nhifCalculator()) //the output for nhif cut amount from gross salary

//Nssf calculator:

function nssfCalculator(amountPaid) {
    let nssf = (amountPaid * 6 / 100); //calc for amount paid * 0.06
    return nssf;
}
////GIVES NSSF AMOUT TO BE CUT --------------
nssfCalculator(x);
console.log(nssfCalculator(x)) // checking if fuction is outputing correct figures

 //////////////////////The end.