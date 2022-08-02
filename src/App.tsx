import React, {ChangeEvent, useState} from 'react';
import {Button, Container, makeStyles, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {CounterType, incCountAC, resCountAC, setCountAC} from "./redux/state-reducer";

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

    const counter = useSelector<AppRootStateType, CounterType>(
        (newState) => newState.counter
    )


    const dispatch = useDispatch()


    const onIncClickHandler = () => {
        dispatch(incCountAC(counter.count))
    };

    const onResClickHandler = () => {
        dispatch(resCountAC(counter.count, counter.startValue))
    };

    const [start, setStart] = useState(counter.startValue)
    const [max, setMax] = useState(counter.maxValue)

    const onStartChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
    };

    const onMaxChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
    };

    const onSetClickHandler = () => {
        dispatch(setCountAC(start, counter.maxValue))
    };

    return (
        <div style={{backgroundColor: 'lightblue'}}>
            <Container fixed>
                <main className={classes.main}>
                    <Paper className={classes.paperStyle}>
                        Max value: <input type="number" onChange={onMaxChangeValue} value={max}/>
                        <br/>
                        Start value: <input type="number" onChange={onStartChangeValue} value={start}/>
                        <br/>
                        <Button variant="outlined" className={classes.button} onClick={onSetClickHandler}>Set</Button>
                    </Paper>
                    <Paper className={classes.paperStyle}>
                        {counter.count}
                        <br/>
                        <Button variant="outlined" className={classes.button} onClick={onIncClickHandler}>Inc</Button>
                        <Button variant="outlined" className={classes.button} onClick={onResClickHandler}>Reset</Button>
                    </Paper>

                </main>
            </Container>

        </div>
    );
}

export default App;
