$(document).ready(()=>{
    $.validator.addMethod('customEmailValidator',(value,element)=>{
        let regExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        let isValid = regExpression.test(value);
        return isValid;
    });
    $.validator.addMethod('customPasswordValidator',(value,element)=>{
        let regex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/ ;
        let isValid = regex.test(value);
        return isValid;
    });


$('#register').click(()=>{

$('#register-form').validate({

rules: {
    name: {
        required:true,

           },


email: {
 required:true,
customEmailValidator:true
  },
phone:{
 required:true,
 min:5,
 max:9999999


   },
password: {
  required:true,
  customPasswordValidator:true
    }
},
messages:{
name: 'Name cannot be left blank',
email:{
required: 'Email cannot be left Blank',
customEmailValidator:'Please re-enter a valid Email'

},
phone:{
required:'Phone cannot be left blank',
min:'Phone number cannot be less than 4000000001',
max: 'Phone number cannot be greater than 9999999999'
},
password:{
required:'Password cannot be left blank!!',
customPasswordValidator:' must include digit ,caps and small alphabet and strength must be greater than 8'
}
}
});

});
});