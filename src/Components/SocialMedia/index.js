import axios from 'axios';
import React ,{useState , useEffect}  from 'react';
import {SocialMediaSeaction,Social,Icon,SocialP,Span,SpanInfo} from './style.js';

export default function SocialMedia() {

  const [social , setsocial] = useState([]);

  useEffect(()=>{
    axios.get('js/data.json')
    .then(res => {setsocial(res.data.social)}
    )
},[])

const socialList = social.map((socialItem)=>{
  return(
<Social item={socialItem.id} key={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <SocialP>
              <Span>{socialItem.title}</Span>
              <SpanInfo>{socialItem.body}</SpanInfo>
          </SocialP>
      </Social>
  )
})
    return (
      <SocialMediaSeaction>
            
      {socialList}
      
     
  </SocialMediaSeaction>
    )
}
