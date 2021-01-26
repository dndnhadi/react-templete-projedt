import React, { Component } from 'react';
import {ProfileSkills,ProfileSection ,ProfileList ,ProfileItem ,ProfileTitleSpan ,SkillsTitleSpan,Span ,SpanWeb ,Skills ,SkillsDesc ,Bar ,BarTitle ,BarPerc ,BarParent ,ParentSpan ,ProfileTitle ,SkillsTitle} from './style.js';
import axios from 'axios';

export default class index extends Component {

    state={
        profiles:[]
    }

    componentDidMount(){
        axios.get('js/data.json')
        .then(res=>{this.setState({profiles:res.data.profile})}
        )}

    render() {
        const {profiles} = this.state;
        const profileList = profiles.map((pro)=>{
            
            return (
                <Bar key={pro.id}>
                        <BarTitle>{pro.title}</BarTitle>
                        <BarPerc>{pro.body}</BarPerc>
                        <BarParent>
                            <ParentSpan first={pro.id}></ParentSpan>
                        </BarParent>
                    </Bar>
                    
            )
        })

        return (
            <ProfileSkills>
            <div class="container">
                <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Daniz Hadi
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            15/1/1976
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Sana'a
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            771713433
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            dndnhadi@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.arabseo123.org</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {profileList}
                </Skills>
                </div>
        </ProfileSkills>
        )
    }
}



