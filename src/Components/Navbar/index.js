import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarSeaction,LinkAnchor ,Logo ,LogoText, UlList ,ListItem ,Anchor } from './style.js';

export default function Navbar() {
    return (
      <NavbarSeaction>
            
      <div className="container">
          
          <Logo>
              <LogoText>Ultra Profile</LogoText>
          </Logo>
          
          
          
          <UlList>
              <ListItem><LinkAnchor to="/">Home</LinkAnchor></ListItem>
              <ListItem><Anchor href="#">Work</Anchor></ListItem>
              <ListItem><Anchor href="#">Portfo </Anchor></ListItem>
              <ListItem><Anchor href="#">Resume</Anchor></ListItem>
              <ListItem><Anchor href="#">About</Anchor></ListItem>
              <ListItem><LinkAnchor to="/contact">Contact</LinkAnchor></ListItem>
              
          </UlList>
          
      </div>
      
  </NavbarSeaction>
  
    )
}
