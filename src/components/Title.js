import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: "bold",
        color: "#916C80",
        fontStyle: "italic",
        marginTop: "50px",
    },
}))


export default function Title(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Typography variant="h2" component="h1" align={ props.align } className={ classes.title }>
            {props.children}
            </Typography>
        </React.Fragment>
    )
}

//so you just write <Title>Write Title</Title> and whatever is between the two <></> will be rendered with the above styling
//if you put <Title align="center"></Title> it'll center it