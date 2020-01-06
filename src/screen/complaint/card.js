import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    minWidth:400,
    margin: 20,
    flexDirection:"row",
  },
  box: {
    marginTop: 10,
    backgroundColor: "#F0F7F7",
    textAlign: "center",
    padding: 6,
    borderRadius: 10,
    marginBottom:10
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* Awadhesh Chaurasia */}
            {props.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2" align="right">
            {props.address}
          </Typography>

          <div className={classes.box}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color="inherit"
            >
              {props.productName}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.reactionInfo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
