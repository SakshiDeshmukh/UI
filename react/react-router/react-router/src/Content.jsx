import { Route,Switch,Router } from 'react-router-dom';
import React from 'react';
import { Home } from "./Home";
import { AboutUs } from "./AboutUs";
import {User} from './User'
export class Content extends React.Component{
    render(){
        return(
            <div>
                
                <Route path='' exact='true' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/aboutus' component={AboutUs} />
                <Route path='/user/:id' component={User}/>
                
            </div>
        )
    }
}
/*import React,{Component} from 'react'
import {Router,Route} from 'react-router-dom'

import { Home } from "./Home";
import { Aboutus } from "./Aboutus";
class Content extends React.Component{
    render(){
        return(
            <div>
                <Route path='' exact='true' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/aboutus' component={Aboutus} />
            </div>
        )
    }
}
export default Content*/