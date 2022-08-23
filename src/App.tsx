import React from 'react';
import Container from "@material-ui/core/Container";
import {SetBlock} from "./components/SetBlock";
import {CountBlock} from "./components/CountBlock";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./components/Styles";
import Paper from "@material-ui/core/Paper";

function App() {

    const classes = useStyles();

    return (
        <div className={classes.body}>
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                            <SetBlock/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                            <CountBlock/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}

export default App;
