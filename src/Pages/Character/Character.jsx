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
      <div className='character-content'>
        <Card key={character.id} sx={{ maxWidth: 345, marginBottom: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={character.image}
              alt={character.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name: {character.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Specie: {character.species}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Status: {character.status}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Gender: {character.gender}
              </Typography>
            </CardContent>
          </CardActionArea>
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