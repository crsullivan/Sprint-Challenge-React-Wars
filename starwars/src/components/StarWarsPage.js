import React, {useState, useEffect} from "react";
import axios from "axios";
import {StarWarsCard} from "./StarWarsCard"

export default function StarWarsPage () {
    const [names, setNames] = useState ([])

    useEffect (() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            const names = response.data.results;
            setNames([names])
            console.log(names);
            console.log(names[0].name);
        })
        .catch(error => {
            console.log('oof', error)
        });
    },[]);

    return (

         <div className="containers">
            {names.forEach(index =>   {
                index.map((data, index) => {
                   
                    console.log(data)
                   console.log(data.name)
                       
                    
    
                return (
                    <React.Fragment>
                    <StarWarsCard 
                    key={index}
                    name={data.name}
                   
                    /> 
                    </React.Fragment>
                ) 
                })
                
            })}
        </div>
    )
}