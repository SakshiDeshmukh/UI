class UserService{

    users:User[]
    constructor(){
        this.users = [
         {
            firstname:'mike',
            lastname:'imen'
         },
         {
            firstname:'rasika',
            lastname:'tupe'
         }

 ]
    }

      getUsers():User[]{
          return this.users
         }
        
}

interface User{
    firstname:string,
    lastname:string
}
interface Employee extends User{
     
     id:number,
     salary:number
}
interface Business extends User{ 
    
    salary:number,
    post:string
}
class EmployeeService {
employ:Employee[]

constructor(){
    this.employ = [
        {
       firstname:'shital',
       lastname:'jagdale',
       id:1,
       salary:30000
        }

    ]

}
getEmployee():Employee[]{
    return this.employ
}

}
class BusinessService{
business:Business[]

constructor(){
    this.business = [
        {
        
            firstname:'pooja',
            lastname:'chidrawar',
            salary:80000,
            post:'CEO'
        }
    ]
}
getBusiness():Business[]{
    return this.business
}

}

let userobj = new UserService()
//userobj =new UserService()
let users:User[] = userobj.getUsers()
//console.log(users)
let isUser = userobj instanceof UserService
console.log(isUser)

let employobj = new EmployeeService()
let employ:Employee[] = employobj.getEmployee()
//console.log(employ)
let isEmployee = employobj instanceof EmployeeService
console.log(isEmployee)

let businessobj = new BusinessService()
let business:Business[] = businessobj.getBusiness()
//console.log(business)
let isBusiness = businessobj instanceof UserService
console.log(isBusiness)