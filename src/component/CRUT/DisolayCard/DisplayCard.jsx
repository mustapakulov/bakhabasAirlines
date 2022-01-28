import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { tiketContext } from "../../MyContext/MyContext";
import { IconButton } from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function DisplayCard({ item }) {
  const { deleteTiket, addCartTiket, checkTiketInCart, useAuth } =
    React.useContext(tiketContext);
  // console.log(checkTiketInCart, "doghi");
  const currentUser = useAuth();
  const [count, setCount] = React.useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  //   changeColor () {
  //   this.setState({ red: !this.state.red })
  // }

  return (
    <Card sx={{ maxWidth: 800, minWidth: 300, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h4" color="text.secondary" sx={{ pt: 1, pb: 1 }}>
          {item.town}
        </Typography>
        <Typography variant="a" color="text.secondary" sx={{ pt: 1, pb: 1 }}>
          {item.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ pt: 1, pb: 1 }}
        >
          {item.describetion}
        </Typography>
      </CardContent>
      <CardActions>
        {currentUser?.email === "admin@gmail.com" ? (
          <>
            <Link to={`edit/${item.id}`}>
              <Button size="small">Edit</Button>
            </Link>
            <Button size="small" onClick={() => deleteTiket(item.id)}>
              Delete
            </Button>
          </>
        ) : (
          <>
            <p style={{ fontSize: "20px", marginTop: "13px" }}>
              {count ? count : ""}
            </p>
            <IconButton onClick={handleCount}>
              <FavoriteIcon />
            </IconButton>
            <IconButton
              onClick={() => addCartTiket(item)}
              color={checkTiketInCart(item.id) ? "secondary" : "inherit"}
            >
              <LocalGroceryStoreIcon />
            </IconButton>
            <Link to="/credit">
              <IconButton>
                <LocalMallIcon />
              </IconButton>
            </Link>
          </>
        )}
      </CardActions>
    </Card>
  );
}
