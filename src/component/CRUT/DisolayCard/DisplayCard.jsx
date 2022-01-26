import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DisplayCard({ item }) {
  return (
    <Card sx={{ maxWidth: 350,minWidth: 300, margin:2}}>
      <CardMedia
        component="img"
        height="140"
        image={item.photo}
        alt="green iguana"
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          {item.photo}
        </Typography> */}
        <Typography variant="body2" color="text.secondary"  sx={{pt:1,pb:1}}>
          {item.town}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{pt:1,pb:1}}>
          {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{pt:1,pb:1}}>
          {item.describetion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Сохраненить</Button>
        <Button size="small">Купить</Button>
      </CardActions>
    </Card>
  );
}
