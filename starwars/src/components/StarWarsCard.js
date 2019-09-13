import React from "react";
import styled from "styled-components";

const Card = styled.div `
background:white;
width 500px;
`

const Name = styled.h2 `

`

export const StarWarsCard = props => {
   
    return (
        <Card key={props.index}>
            <Name name={props.name}/>
           
        </Card>
    )
} 