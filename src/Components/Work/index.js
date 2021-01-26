
import React, { Component } from 'react';
import {WorkSaction ,WorkTitle ,Span ,WorkPart ,Icon , Title ,Line ,Desc } from './style.js';
import axios from 'axios';

export default class index extends Component {

    state ={
        works:[]
    }

    componentDidMount(){
    axios.get('js/data.json')
    .then(res => {this.setState({works:res.data.works})}
    )}

    render() {

        const {works} = this.state;
        const workList =works.map((workItem) =>{
            return(
              
                    <WorkPart first={workItem.id} key ={workItem.id} >
                        <Icon className={workItem.icon_name}></Icon>
                        <Title>{workItem.title}</Title>
                        <Line/>
                        <Desc>
                           {workItem.body}
                        </Desc>
                    </WorkPart>
            )
        })
        
        return (
           
            <WorkSaction >
            <div className="container">
                <WorkTitle><Span>My</Span>Work</WorkTitle>     
                {workList}
                
            </div>
        </WorkSaction>
        )
    }

}
