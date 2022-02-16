import React from "react";
import './card.styles.css';

const Card=({place,country,activity,cost,reviews,rating,hours,image})=>{
    return (
        <div className="Main ">
            <div className="card">
                <div className="image" 
                    style={
                        {backgroundImage:`url(${image})`}
                    }
                >
                    <div className="time"  >
                        <img  className="myimg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEyIDIgQyA2LjQ4ODk5NzEgMiAyIDYuNDg4OTk3MSAyIDEyIEMgMiAxNy41MTEwMDMgNi40ODg5OTcxIDIyIDEyIDIyIEMgMTcuNTExMDAzIDIyIDIyIDE3LjUxMTAwMyAyMiAxMiBDIDIyIDYuNDg4OTk3MSAxNy41MTEwMDMgMiAxMiAyIHogTSAxMiA0IEMgMTYuNDMwMTIzIDQgMjAgNy41Njk4Nzc0IDIwIDEyIEMgMjAgMTYuNDMwMTIzIDE2LjQzMDEyMyAyMCAxMiAyMCBDIDcuNTY5ODc3NCAyMCA0IDE2LjQzMDEyMyA0IDEyIEMgNCA3LjU2OTg3NzQgNy41Njk4Nzc0IDQgMTIgNCB6IE0gMTEgNiBMIDExIDEyLjQxNDA2MiBMIDE1LjI5Mjk2OSAxNi43MDcwMzEgTCAxNi43MDcwMzEgMTUuMjkyOTY5IEwgMTMgMTEuNTg1OTM4IEwgMTMgNiBMIDExIDYgeiI+PC9wYXRoPjwvc3ZnPg=="/>
                        <span>{`${hours}`}</span>
                    </div>

                    <div className="text-image">
                    <img className="location" src="https://img.icons8.com/ios/50/000000/marker--v2.png"/>
                    <span className="place-name">{`${place},${country}`}</span>
                    </div>
                </div>
                <div className="title">{`${activity},${place}`}</div>

                <div className="icons-container">
                    <div className="icon-container">
                        <img src="https://img.icons8.com/ios-filled/50/000000/food-bar.png"/>
                        <h6>Snacks</h6>
                    </div>

                    <div className="icon-container">
                        <img src="https://img.icons8.com/ios-glyphs/50/000000/car--v1.png"/>
                        <h6>Transport</h6>
                    </div>

                    <div className="icon-container">
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/compact-camera.png"/>
                        <h6>Photo/Video</h6>
                    </div>
                    
                    <div className="icon-container">
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/mountain.png"/>
                        <h6>Activities</h6>
                    </div>
                    <div className="icon-container">
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/mountain.png"/>
                        <h6>Activities</h6>
                    </div>
                    <div className="icon-container">
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/mountain.png"/>
                        <h6>Activities</h6>
                    </div>

                    <div className="icon-container">
                    <img src="https://img.icons8.com/ios-glyphs/50/000000/mountain.png"/>
                        <h6>Activities</h6>
                    </div>

                    </div>
                <div className="description-container">
                    <div className="description">{`Long tail boat ride`}</div>
                    <div className="description">{`Underwater Photo & Video`}</div>
                    <div className="description">{`Underwater Photo & Video`}</div>
                    <div className="description">{`Long tail boat ride`}</div>
                </div>
                <hr />
                <div className="bottom-container">
                        <div className="costtitle">
                        <p className="text">Starting from </p>
                        <h3 className="cost">{`₹${cost}`}</h3>
                        </div>

                        <div className="rating">
                            <div className="iconandrating">
                                <div className="icon">
                                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
                                    <img src="https://img.icons8.com/fluency/20/000000/star.png"/>
            
                                    </div>
                                <div className="rating"><h2>{rating}</h2></div>

                            </div>
                            <div className="reviews">{`${reviews} reviews`}</div>
                        </div>
                </div>
                <button className="view">View Details</button>
                
                

            </div>
        </div>

    );

}
export default Card;