import React from 'react';
import './App.css';
import {Button, Container, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    main: {},
    paperStyle: {
        maxWidth: 400,
        margin: 20,
        padding: 20,
        backgroundColor: "gray",
        fontSize: 30
    },
    button: {
        backgroundColor: "gold",
        border: '2px solid green',
        borderRadius: 10
    }
}))

function App() {
    const classes = useStyles()
  return (
      <div style={{backgroundColor: 'lightblue'}}>
          <Container fixed>
              <main className={classes.main}>
                  <Paper className={classes.paperStyle}>
                      Max value: <input type="number"/>
                      <br/>
                      Start value: <input type="number"/>
                      <br/>
                      <Button variant="outlined" className={classes.button}>Set</Button>
                  </Paper>
                  <Paper className={classes.paperStyle}>
                      222
                      <br/>
                      <Button variant="outlined" className={classes.button}>Inc</Button>
                      <Button variant="outlined" className={classes.button}>Reset</Button>
                  </Paper>

              </main>
          </Container>

      </div>
  );
}

export default App;
