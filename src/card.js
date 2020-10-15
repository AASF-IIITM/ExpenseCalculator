import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MdShoppingCart } from 'react-icons/md';
import { GiMilkCarton } from 'react-icons/gi'
import { FaMobileAlt } from 'react-icons/fa'
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 225,
    padding: "20px 0"
  },
  media: {
    height: 140,
  },
});

const getIcon = (type) => {
  if(type===" Clothing") {
    return <MdShoppingCart style={{fontSize: "50px"}} />;
  } else if(type===" Eateries") {
    return <GiMilkCarton style={{fontSize: "50px"}} />;
  } else {
    return <FaMobileAlt style={{fontSize: "50px"}} />;
  }
}

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} id="carde" style={{backgroundColor:"#ebe6e6"}}>
      <Container>
        <div style={{display: "flex"}}>
          <div style={{width: "20%", float:"left"}}>
          <Tooltip title={props.type}>{getIcon(props.type)}</Tooltip>
          </div>
          <div style={{width: "80%"}}>
            <div id="cardName">
              {props.name}
            </div>
            <div id="cardAmount">
              &#8377; {props.amount}
            </div>
            {/* <div style={{display: "flex", justifyContent: "space-between"}}> */}
              <div id="cardDate">
                <EventIcon />&nbsp;{props.date}
              </div>
              <div id="cardTime">
                <ScheduleIcon />&nbsp;{props.time}
              </div>
            {/* </div> */}
          </div>
        </div>
        <Divider style={{margin: "20px 0"}} />
        {/* <div style={{display: "flex", justifyContent: "space-between"}}>
          <Tooltip title="Edit">
          <CreateIcon style={{fontSize: "30px", cursor: "pointer"}} />
          </Tooltip>
          <Tooltip title="Delete">
          <DeleteIcon style={{fontSize: "30px", cursor: "pointer"}} />
          </Tooltip>
        </div> */}
      </Container>
      {/* <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Name: <span id="expensename">{props.name}</span>
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Amount: {props.amount}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Type: {props.type}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"> 
            Date: {props.date}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"> 
            Time: {props.time}
          </Typography>
        </CardContent>
      </CardActionArea> */}
    </Card>
  );
}
