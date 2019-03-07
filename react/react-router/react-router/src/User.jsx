import React from 'react'

export class User extends React.Component{
    users=[
        {
            id:1,
            name:'sakshi'

        },
        {
            id:2,
            name:'sak'

        },
        {
            id:4,
            name:'sakkk'

        }
    ]
    render(){
        let user = this.users.find(u=>{
            return u.id === parseInt(this.props.match.params.id)
        })
        return(
        <div>
            <h3>{user!== undefined ? user.id + ',' + user.name:'user not found'}</h3>
        </div>
            );
    }
}