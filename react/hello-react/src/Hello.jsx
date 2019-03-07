import React,{Component} from 'react'

 class Hello extends Component{
    render(){
        return (
            <div>
                <h1> {this.props.msg}!</h1>
            <i>{this.props.msgUser}</i>
            </div>
            
        )
    }
}
export default Hello;