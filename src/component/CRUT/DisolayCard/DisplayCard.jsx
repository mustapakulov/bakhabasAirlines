import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { tiketContext } from "../../MyContext/MyContext";

export default function DisplayCard({ item }) {
  const { deleteTiket} = React.useContext(tiketContext)
  return (
    <Card sx={{ maxWidth: 350,minWidth: 300, margin:2}}>
      <CardMedia
        component="img"
        height="140"
        image={item.photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h4" color="text.secondary"  sx={{pt:1,pb:1}}>
          {item.town}
        </Typography>
        <Typography variant="a" color="text.secondary" sx={{pt:1,pb:1}}>
          {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{pt:1,pb:1}}>
          {item.describetion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Сохраненить</Button>
        <Button size="small">Купить</Button>
        <Link to={`edit/${item.id}`}>
        <Button size="small" >Edit</Button>
        </Link>
        <Button size="small"  onClick={() => deleteTiket(item.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}
