const one = ()=>{
    number.value+="1";
}
const two = ()=>{
    number.value+="2";
}
const three = ()=>{
    number.value+="3";
}
const four = ()=>{
    number.value+="4";
}
const five = ()=>{
    number.value+="5";
}
const six = ()=>{
    number.value+="6";
}
const seven = ()=>{
    number.value+="7";
}
const eight = ()=>{
    number.value+="8";
}
const nine = ()=>{
    number.value+="9";
}
const zero = ()=>{
    number.value+="0";
}
const add= ()=>{
    sessionStorage.setItem('a',number.value);
    number.value="";
    number.value+="+";
    sessionStorage.setItem('op',number.value);
    number.value="";
}
const sub= ()=>{
    sessionStorage.setItem('a',number.value);
    number.value="";
    number.value+="-";
    sessionStorage.setItem('op',number.value);
    number.value="";
}
const mul= ()=>{
    sessionStorage.setItem('a',number.value);
    number.value="";
    number.value+="*";
    sessionStorage.setItem('op',number.value);
    number.value="";
}
const div= ()=>{
    sessionStorage.setItem('a',number.value);
    number.value="";
    number.value+="/";
    sessionStorage.setItem('op',number.value);
    number.value="";
}
class Operator{
    calc(a,b)
    {

    }
}
class Add extends Operator{
    calc(a,b){
        return parseInt(a)+parseInt(b);
    }
}

class Sub extends Operator{
    calc(a,b){
        return parseInt(a)-parseInt(b);
    }
}
class Mul extends Operator{
    calc(a,b){
        return parseInt(a)*parseInt(b);
    }
}
class Div extends Operator{
    calc(a,b){
        return parseInt(a)/parseInt(b);
    }
}
const Calculate= ()=>{
    const a=sessionStorage.getItem('a');
    sessionStorage.setItem('b',number.value);
    number.value="";
    const lastvalue=sessionStorage.getItem('b');
    let result='';
    if (sessionStorage.getItem('op')=='+')
    {
        const addition=new Add();
        number.value=addition.calc(a,lastvalue);
    }
    else if (sessionStorage.getItem('op')=='-')
    {
        const substraction=new Sub();
        number.value=substraction.calc(a,lastvalue);
    }
    else if (sessionStorage.getItem('op')=='*')
    {
        const multiplication=new Mul();
        number.value=multiplication.calc(a,lastvalue);
    }
    else if (sessionStorage.getItem('op')=='/')
    {
        const division=new Div();
        number.value=division.calc(a,lastvalue);
    }
    
}
reset=() =>{
sessionStorage.removeItem('a');
sessionStorage.removeItem('b');
sessionStorage.removeItem('lastvalue');
number.value='';

}
