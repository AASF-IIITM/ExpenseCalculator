import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { MdShoppingCart } from "react-icons/md";
import { GiMilkCarton } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import SettingMenu from "./settingOptions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      id="carde"
      style={{ backgroundColor: "#80ffaa" }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <SettingMenu
              deleteCard={(index, price) => props.deleteCard(index, price)}
              amount={props.amount}
              index={props.index}
            />
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Amount: {props.amount}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Type: {props.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
