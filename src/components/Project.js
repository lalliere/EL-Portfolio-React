import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: "20px",
        marginBottom: "0",
    },
    body: {
        fontSize: "12pt",
    },
    button: {
        margin: 'auto',
        color: "#4E878C"
    }

});

export default function Project(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.imgAlt}
                    height="200px"
                    src={require(`../../public/logos/${props.img}.png`)}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"> {props.title}
                    </Typography>
                    <Typography className={classes.body} variant="body2" color="textSecondary" component="p">{props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={classes.button} size="small" color="primary" target="_blank" href={props.deployed} rel="noopener">
                    View Site
                </Button>
                <Button className={classes.button} size="small" color="primary" target="_blank" href={props.github} rel="noopener">
                    See the Code
                </Button>
            </CardActions>
        </Card>




    );
}