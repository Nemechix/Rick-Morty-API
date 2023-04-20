import { useEffect, useState } from "react";
import getAllCharacters from "../../Services/AllCharacters";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { CenterFocusStrong } from "@mui/icons-material";


function CharacterCard() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const result = await getAllCharacters();
    setCharacters(result.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);



  const displayCharacters = () => {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {characters.map((character) => {
          return (
            <Link
              to={`/character/${character.id}`}
              key={character.id}
              style={{ textDecoration: "none" }}
            >
              <Card
                key={character.id}
                sx={{ maxWidth: 345, marginBottom: "20px"  }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={character.image}
                    alt={character.name}
                  />
                  <CardContent>
                    <Typography fontFamily={'"Segoe UI"'} align="center" gutterBottom variant="h6" component="div">
                      {character.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </div>
    );
  };

  return <>{displayCharacters()}</>;
}

export default CharacterCard;
