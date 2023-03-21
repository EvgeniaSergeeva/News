import * as React from "react";
import { Card as MaterialCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Card = ({ item }) => {
  return (
    <MaterialCard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.source.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {item?.author && item.author}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {item?.title && item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
};
export default Card;
