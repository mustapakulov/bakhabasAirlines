import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DisplayCard() {
  return (
    <Card sx={{ maxWidth: 350,minWidth: 300, margin:2}}>
      <CardMedia
        component="img"
        height="140"
        image="https://ideacluber.ru/uploads/s/9/p/s/9psidbib2tqd/img/full_NHAk5tvM.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`Город`}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{pt:1,pb:1}}>
          {`описание`}
        </Typography>
         <Typography variant="body2" color="text.secondary" sx={{pt:1,pb:1}}>
          {`Цена`}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{pt:1,pb:1}}>
          {`Время`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Сохраненить</Button>
        <Button size="small">Купить</Button>
      </CardActions>
    </Card>
  );
}
