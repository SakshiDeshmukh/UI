var emp;
var id = parseInt(process.argv[3]);
var salary = parseInt(process.argv[4]);
var empBySalary = emp
    .filter(function (u) { return u.salary > 20000 && u.salary < 60000; })
    .map(function (u) { return u.id + '=>' + u.salary; });
console.log(empBySalary);
