var msg:string='hello'
console.log(msg)

function getdata(msg:string='helloo how are you')
{
    console.log(msg)
}
getdata();
function getmsg(msg:string)
{
    console.log(msg)
}
getmsg('hello how are you...ready to go!!!!!');

const execute=(action:string,x:number,y:number)=>{
    var result:number=0
    switch(action){

        case 'ADD':
                    result=_add(x,y)
    }
    return result
}
const _add=(x:number,y:number)=>{
    return x+y
}
let _action=process.argv[2]
let _x=process.argv[3]
let _y=process.argv[4]
let result=execute(_action,_x,_y);