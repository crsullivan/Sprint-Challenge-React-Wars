import React from "react";
import styled from "styled-components";

const Card = styled.div `
background:#DCDCDC;
width:25%;
margin:10%
border-radius:10%;
padding-bottom:1%;

`
const Container = styled.div `
display:flex;

`

const Name = styled.h2 `
color:black;

`

const Col1 = styled.div `
display:flex;
flex-direction:column;
margin-top:5%;
margin-left:8%

`

const H4 = styled.h4 `



`

const Col2 = styled.div `
display:flex;
flex-direction:column;
margin-left:10%;
margin-left:18%
`



 const StarWarsCard = props => {
   
    return (
       
            <Card key={props.index}>
                <Name>{props.name}</Name>
                <Container>
                        <Col1>
                            <H4>Height: {props.height} cm</H4>
                            <H4>Weight: {props.mass} kg</H4>
                            <H4>Gender: {props.gender}</H4>
                            
                        </Col1>
                        <Col2>
                            <H4>Born in the Year: {props.birth_year}</H4>
                            <H4>Hair: {props.hair_color}</H4>
                            <H4>Complexion: {props.skin_color}</H4>
                            <H4>Eyes: {props.eye_color}</H4>
                        </Col2>
                </Container> 
            </Card>
    )  
} 
export default StarWarsCard;