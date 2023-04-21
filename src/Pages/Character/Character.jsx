import React from 'react'
import { useEffect, useState } from 'react'
import getAllCharacters from '../../Services/AllCharacters'
import { useParams } from 'react-router-dom'
import getCharacterById from '../../Services/CharacterId'
import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@mui/material";
import './Character.css'

function Character() {
const [character, setCharacter ] = useState({})
const {id} = useParams()


  const getCharacter = async () => {
    const result = await getCharacterById(id);
    console.log(result.data)
    setCharacter(result.data);
  };

  useEffect(() => {
    getCharacter();
  }, [id]);

  const displayCharacter = () => {
    return (
      <div className="character-content">
        <Card
          key={character.id}
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: 3000,
            marginBottom: "20px",
            borderRadius: "10%",
            border: "",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={character.image}
            alt={character.name}
            sx={{ width: "100%" }}
          />

          <CardContent
            sx={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom variant="h4" component="div">
              Name: {character.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Specie: {character.species}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Status: {character.status}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Gender: {character.gender}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className='card-content'>
        {displayCharacter()}
    </div>
  )
}

export default Character;