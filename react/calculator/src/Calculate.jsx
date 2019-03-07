import React,{Component} from 'react'
import '../src/css/CalStruct.css'
class Calculate extends Component{
    render(){
        let {result} =this.props;
        return(
<div className = 'result'>
{result}
</div>
        )
    }
}
export default Calculate