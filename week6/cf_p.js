function employee(name, jobtitle, salary, status = 'full-time'){
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = status;
}


function printEmployeeForm(employee){
    console.log(employee.name + " Job Title: " + employee.jobtitle + " Salary: " + employee.salary + " Status: " + employee.status);
}


employee.prototype.statusOverride = "contract";

var employee1 = new employee('Bob' , 'V School Instructor' , '$3000/hour');
var employee2 = new employee('Jane' , 'Web Developer' , '$300/hour');
var employee3 = new employee('Joe' , 'Auto-Mechanic' , '$30/hour' ,  employee.prototype.statusOverride);

printEmployeeForm(employee1);
printEmployeeForm(employee2);
printEmployeeForm(employee3);


console.log("----------------There's more than one way to do this-----------------")


employee.prototype.printEmployeeForm = function(){
    console.log(this.name + " Job Title: " + this.jobtitle + " Salary: " + this.salary + " Status: " + this.status);
}
employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

