import React ,{useState , useEffect} from 'react';
import {PortolioSeaction,PortfolioTitle,Span , PortfolioList ,PortfolioItem,Image,ImageWapper ,Overlay ,OverlaySpan  } from './style.js';
import axios from 'axios';

export default function Portifolio(){

    const [ images , setImages] = useState([]);

    useEffect(()=>{
        axios.get('js/data.json')
        .then(res => {setImages(res.data.portfolio)}
        )
    },[])

    const handleclick =(e)=>{
        const num = e.target.id
        console.log(num)
    }
    
    const portfolioImages = images.map((imageItem)=>{
        console.log(imageItem)
        return(
            <ImageWapper key={imageItem.id}>
            <Image src={imageItem.image} alt=""/>
            <Overlay>
                <OverlaySpan onClick={handleclick}>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImageWapper> 
        )
    })
    return (
        <PortolioSeaction>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        
        <div className="box">
            
        {portfolioImages}  
        
        </div>
        
    </PortolioSeaction>
    
    )
   
}

