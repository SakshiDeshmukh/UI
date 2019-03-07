interface Employees{
    id:number,
    name:string,
    salary:number
}

let emp:Employees[] 
 emp= [
    {
        id:1,
        name: 'Bob',
        salary: 10000
    },
    {
        id:2,
        name: 'John',
        salary: 19000
    },
    {
        id: 3,
        name: 'Roger',
        salary: 20000
    },
    {
        id: 4,
        name: 'nick',
        salary: 60000
    },
    {
        id: 5,
        name: 'Mike',
        salary: 50000
    },
    {
        id: 6,
        name: 'robert',
        salary: 9000
    },
    {
        id: 7,
        name: 'smith',
        salary: 45000
    },
    {
        id: 8,
        name: 'joy',
        salary: 5000
    },
    {
        id: 9,
        name: 'om',
        salary: 80000
    },
    {
        id: 10,
        name: 'sid',
        salary: 35000
    }
] 
let salaryTo=parseInt(process.argv[2])
let salaryFrom = parseInt(process.argv[3])

/*const empBySalary:string[]=emp
.filter(u=>u.salary>20000 && u.salary<60000)
.map(u=>{return u.name + '=>' + u.salary})
console.log(empBySalary)*/
let empSals =(emp:Employees[],salaryFrom:number,salaryTo:number):string[]=>{ 
    return emp
    .filter(u=>u.salary>salaryFrom && u.salary<salaryTo)
    .map(u=>{ return u.name + "=>" + u.salary})
}
console.log(empSals(emp,salaryTo,salaryFrom));