import React,{useState} from "react";
import './homepage.styles.css';
import Banner from "../components/Banner/Banner.component";
import Card from "../components/card/Card.component";
import image1 from "./Image-1.jpg";
import image2 from './image2.jpg';
import image3 from './image3.jpg';


const Homepage=()=>{
    const [Places,setPlaces]=useState([
            {
                id:1,
                place:'Goa',
                country:'India',
                activity:'Scuba Diving in Grande Island',
                cost:'1799',
                reviews:'36',
                rating:'4.7',
                hours:'8 hours',
                image:image1
            },
            {
                id:2,
                place:'Goa',
                country:'India',
                activity:'Bungee Jumping in Goa ',
                cost:'2800',
                reviews:'36',
                rating:'4.3',
                hours:'30 min',
                image:image2
            },
            {
                id:3,
                place:'Goa',
                country:'India',
                activity:'Sky diving',
                cost:'15000',
                reviews:'136',
                rating:'4.4',
                hours:'12 hours',
                image:image3
            }

    ])
    return (
            <>
            <Banner />
            <div className="contain">   
                {
                    Places.map(({id,...props})=>(
                        <Card key={id} {...props} />
                              ))
                }
            </div>

            
            
            </>
    )
}
export default Homepage;