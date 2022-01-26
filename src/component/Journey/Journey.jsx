import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Journey() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly", m:2 }}>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="100%"
            image="https://www.onetwotrip.com/ru/blog/static/images/8-reasons-why-travel-good-than-goodbye/traveler.jpg"
            alt="Путишествие это"
          />

          <CardActions disableSpacing>
            <Typography variant="body2" color="text.secondary">
              Путешествия это
            </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Вы контролируете свою жизнь В путешествии вы вольны
                самостоятельно прокладывать маршрут и контролировать время,
                которое проводите в том или ином месте. Ваша независимость
                позволяет принимать решения, основываясь только на том, чего вы
                хотите. Когда вы встречаетесь с кем-то, изменения в жизни
                начинают происходить независимо от ваших желаний. Потеряв
                управление, вы сами можете стать тем, кого контролируют: куда
                идти и сколько там пробыть решают уже за вас. Путешествия дают
                вам свободу, а свидания забирают её. Читайте также
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="100%"
            image="https://www.cleverence.ru/upload/iblock/371/371f3b182c228591ee3dd8486bc9af3a.jpg"
            alt="Бизнес это"
          />

          <CardActions disableSpacing>
            <Typography variant="body2" color="text.secondary">
              Бизнес это
            </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Бизнес (англ. business - дело, предпринимательство) -
                инициативная экономическая деятельность, осуществляемая за счет
                собственных или заемных средств на свой риск и под свою
                ответственность, ставящая главными целями получение прибыли и
                развитие собственного дела.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </Box>
  );
}
