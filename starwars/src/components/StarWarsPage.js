import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard"
import styled from "styled-components";

const ContainerMain = styled.div `
display:flex;
flex-wrap: wrap;
justify-content:space-evenly;
`

export default function StarWarsPage () {
    const [names, setNames] = useState ([])

    useEffect (() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            const names = response.data.results;
            setNames(names)
            console.log(names);
            console.log(names[0].name);
        })
        .catch(error => {
            console.log('oof', error)
        });
    },[]);

    return (
        <div>
          <ContainerMain>
    
            {names.map((data, index )=> {
                return (
                <StarWarsCard key={index} name={data.name} height={data.height} mass={data.mass} gender={data.gender} birth_year={data.birth_year}
                hair_color={data.hair_color} skin_color={data.skin_color} eye_color={data.eye_color}/>
        
                 ) }
            )}
          </ContainerMain>
        </div>
      );
    };












    //     return (

//          <div className="containers">

//                 {names.map((data, index) => {
                   
//                     console.log(data)
//                    console.log(data.names)
                       
                    
    
//                 return (
                    
//                     <StarWarsCard 
//                     key={index}
//                     name={data.name}
                   
//                     /> 
                   
//                 ) 
//                 })
            
//             }
//         </div>
//     )
// }