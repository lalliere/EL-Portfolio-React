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
    grid: {
        flexGrow: 1,
    },
    title: {
        fontWeight: "bold",
        textAlign: "left",
        color: "#EF6F6C",
    },
    body: {
        color: "#005C97",
        fontWeight: "bold",
        padding: "15px",
        paddingTop: "0",
        marginTop: "0",
        fontSize: "14pt"
    },
    // media: {
    //     height: 140,
    // },
});

export default function Project(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea>
                <CardMedia
                    // className={classes.media}
                    component="img"
                    alt={props.imgAlt}
                    height="200px"
                    src={require(`../../public/logos/${props.img}.png`)}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"> {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" target="_blank" href={props.deployed} rel="noopener">
                    View Site
                </Button>
                <Button size="small" color="primary" target="_blank" href={props.github} rel="noopener">
                    See the Code
                </Button>
            </CardActions>
        </Card>




    );
}