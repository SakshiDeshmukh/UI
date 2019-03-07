var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            {
                firstname: 'mike',
                lastname: 'imen'
            },
            {
                firstname: 'rasika',
                lastname: 'tupe'
            }
        ];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    return UserService;
}());
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.employ = [
            {
                firstname: 'shital',
                lastname: 'jagdale',
                id: 1,
                salary: 30000
            }
        ];
    }
    EmployeeService.prototype.getEmployee = function () {
        return this.employ;
    };
    return EmployeeService;
}());
var BusinessService = /** @class */ (function () {
    function BusinessService() {
        this.business = [
            {
                firstname: 'pooja',
                lastname: 'chidrawar',
                salary: 80000,
                post: 'CEO'
            }
        ];
    }
    BusinessService.prototype.getBusiness = function () {
        return this.business;
    };
    return BusinessService;
}());
var userobj = new UserService();
//userobj =new UserService()
var users = userobj.getUsers();
//console.log(users)
var isUser = userobj instanceof UserService;
console.log(isUser);
var employobj = new EmployeeService();
var employ = employobj.getEmployee();
//console.log(employ)
var isEmployee = employobj instanceof EmployeeService;
console.log(isEmployee);
var businessobj = new BusinessService();
var business = businessobj.getBusiness();
//console.log(business)
var isBusiness = businessobj instanceof UserService;
console.log(isBusiness);
