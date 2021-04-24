{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) %2;
    if (empCheck == IS_ABSENT)
    {
        console.log("UC-1 Employee is absent");
    }
    else{
        console.log("UC-2 Employee is present");
    }
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) %3;
    switch(empCheck)
    {
        case IS_PART_TIME:
                    empHrs = PART_TIME_HOURS;
                    break;
        case IS_FULL_TIME:
                    empHrs = FULL_TIME_HOURS;
                    break;
        default:
                empHrs = 0;
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC-2 Emp Wage: " +empWage);
}

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
                return PART_TIME_HOURS;
        case IS_FULL_TIME:
                return FULL_TIME_HOURS;
        default:
                return 0;
    }
}

let empCheck = Math.floor(Math.random() * 10) %3;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Hour: " +empHrs +  "Emp wage" + empWage);
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    for(let day = 0; day < NUM_OF_WORKING_DAYS; day++)
    {
        let empCheck = Math.floor(Math.random() * 10) %3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC-4 Total Hes: " +totalEmpHrs+ "Emp Wage: " + empWage);
}

{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC-5 Total Days: " +totalWorkingDays + " Total Hrs :" + totalEmpHrs + " Emp Wage :" + empWage);
}

const MAX_HRS_IN_MONTH = 160;
//const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

function calcDailyWage(empHrs)
{
   return empHrs * WAGE_PER_HOUR; 
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
   totalWorkingDays++;
   let empCheck = Math.floor(Math.random() *10) % 3;
   let empHrs = getWorkingHours(empCheck);
   totalEmpHrs += empHrs;
empDailyWageArr.push(calcDailyWage(empHrs));
empDailyHrsMap.set(totalWorkingDays, empHrs);
empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let totalEmpWage = calcDailyWage(totalEmpHrs);
console.log("UC-6 Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + "Emp Wage: " + totalEmpWage);