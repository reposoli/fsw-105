var employees = [];

function employee(name, jobtitle, salary, status = 'full-time'){
        this.name = name;
        this.jobtitle = jobtitle;
        this.salary = salary;
        this.status = status;
//Traditional Approach
    this.printEmployeeForm = function(){
    console.log("Employee Name: " + this.name);
     console.log("Job Title: " + this.jobtitle);
     console.log("Salary: " + this.salary);
    console.log("Status: " + this.status);
 }

}

//Prototype Approach
employee.prototype.printEmployeeForm = function(){
    console.log("Employee Name: " + this.name);
    console.log("Job Title: " + this.jobtitle);
    console.log("Salary: " + this.salary);
    console.log("Status: " + this.status);
}


employee.prototype.statusOverride = "contract";
console.log("---------------------------------")

var employee1 = new employee('Bob' , 'V School Instructor' , '$3000/hour');
employee1.printEmployeeForm();
console.log("---------------------------------")

var employee2 = new employee('Jane' , 'Web Developer' , '$300/hour');
employee2.printEmployeeForm();
console.log("---------------------------------")

var employee3 = new employee('Joe' , 'Auto-Mechanic' , '$30/hour' ,  employee.prototype.statusOverride);
employee3.printEmployeeForm();
console.log("---------------------------------")

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);
console.log(employees)