// import React from 'react';
import './activities.css';
import Card from "./Card";
import data from './Activities-api';



const Activities = () => {
  return (
    <> 
        <section className='activities top' id='activities'>
            <div className="container">
                <div className="heading">
                    <h3>JOIN US IN</h3>
                </div>

                <div className="content grid">
                    {
                        data.map((val, index) =>{
                            return<Card key={index} image={val.image} name={val.name}/>
                        }) 
                    }
                </div>
            </div>
            
        </section>
    </>
  )
}

export default Activities