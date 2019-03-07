import React,{Component} from 'react'

class UserForm extends Component{
    constructor(){
        super()
        this.state={
            FormName:'',
            FormEmail:''
        }
        this.handleName = this.handleName.bind(this),
        this.handleEmail = this.handleEmail.bind(this)
        this.handleAddUser = this.handleAddUser.bind(this)
    }
    handleName(e){
        this.setState={FormName:this.target.value}
    }
    handleEmail(e){
        this.setState={FormEmail:this.target.value}
    }
    handleAddUser(e){
       alert('user Added')
       let userobj={
           FormName=this.state.name,
           FormEmail=this.state.email
       } 
       this.props.handleCreateUser(userObj)

    }




    render(){
        return(
            <div>
                <input type="text" name="name" onChange={this.handleName}/>
                <input type="text" name="email" onChange={this.handleEmail}/>
                <button type="login" onChange={this.handleAddUser}>Add User</button>
            </div>

        )

    }
}