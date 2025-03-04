function validateEmployeeDetails(empId, salary, gender, dateOfJoining) {
    try {
        const idPattern = /^[1-9]\d*$/;                     
        const salaryPattern = /^[1-9]\d*$/;                  
        const genderPattern = /^[MF]$/;                      
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;          

        if (!idPattern.test(empId)) {
            throw new Error("Invalid Employee ID! Must be a non-zero positive number.");
        }

        if (!salaryPattern.test(salary)) {
            throw new Error("Invalid Salary! Must be a non-zero positive number.");
        }

        if (!genderPattern.test(gender)) {
            throw new Error("Invalid Gender! Must be 'M' or 'F'.");
        }

        if (!datePattern.test(dateOfJoining)) {
            throw new Error("Invalid Date Format! Must be YYYY-MM-DD.");
        }

        const inputDate = new Date(dateOfJoining);
        const currentDate = new Date();
        if (inputDate > currentDate) {
            throw new Error("Invalid Date! Date cannot be in the future.");
        }

        console.log("Employee Details are Valid!");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

const empId = "123";
const salary = "5000";
const gender = "M";
const dateOfJoining = "2023-05-15";

validateEmployeeDetails(empId, salary, gender, dateOfJoining);