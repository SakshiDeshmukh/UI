interface Employees{
    id:number,
    name:string,
    salary:number
}

let emp:Employees[] 

let id=parseInt(process.argv[3])
let salary = parseInt(process.argv[4])

const empBySalary:string[]=emp
.filter(u=>u.salary>20000 && u.salary<60000)
.map(u=>{return u.id + '=>' + u.salary})
console.log(empBySalary)