const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 200;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

const getWorkingHours = empCheck => empCheck === IS_PART_TIME ? PART_TIME_HOURS :
    empCheck === IS_FULL_TIME ? FULL_TIME_HOURS : 0;

const calcDailyWage = empHrs => empHrs * WAGE_PER_HOUR;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = [];

while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;

    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return `Day${this.dayNum} => Working Hours: ${this.dailyHours}, Wage Earned: ${this.dailyWage}`;
        }
    });
}

let totalWages = empDailyHrsAndWageArr
    .filter(daily => daily.dailyWage > 0)
    .reduce((total, daily) => total + daily.dailyWage, 0);
console.log("Total Wage: " + totalWages);

console.log("\nDaily Wage Map:");
empDailyHrsAndWageArr.map(daily => console.log(daily.toString()));

let fullTimeWageDays = empDailyHrsAndWageArr
    .filter(daily => daily.dailyWage === 160)
    .map(daily => daily.dayNum);
console.log("\nDays with Full Time Wage of 160: " + fullTimeWageDays.join(", "));

let firstFullTimeWageDay = empDailyHrsAndWageArr
    .find(daily => daily.dailyWage === 160);
console.log("\nFirst day with Full Time Wage of 160: " + (firstFullTimeWageDay?.dayNum || "None"));

let isEveryFullTimeWage = empDailyHrsAndWageArr
    .every(daily => (daily.dailyWage === 160 ? daily.dailyHours === 8 : true));
console.log("\nEvery Full Time Wage is truly holding Full Time Wage: " + isEveryFullTimeWage);

let isAnyPartTimeWage = empDailyHrsAndWageArr
    .some(daily => daily.dailyWage === 80);
console.log("\nIs there any Part Time Wage: " + isAnyPartTimeWage);

let daysWorked = empDailyHrsAndWageArr
    .filter(daily => daily.dailyHours > 0).length;
console.log("\nTotal Days Worked: " + daysWorked);
