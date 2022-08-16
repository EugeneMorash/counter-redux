import React, {ChangeEvent} from 'react';
import {Button, Container, makeStyles, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {
    changeSettingsAC,
    CounterType,
    incCountAC,
    resCountAC,
    setCountAC, setMaxValueAC,
    setStartValueAC
} from "./redux/state-reducer";

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
    },
    input: {
        width: 100,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: "gold"
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

    const onStartChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(Number(e.currentTarget.value)))
        dispatch(changeSettingsAC(true))
    };

    const onMaxChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
        dispatch(changeSettingsAC(true))
    };

    const onSetClickHandler = () => {
        dispatch(setCountAC(counter.startValue, counter.maxValue))
        dispatch(changeSettingsAC(false))
    };

    return (
        <div style={{backgroundColor: 'lightblue'}}>
            <Container fixed>
                <main className={classes.main}>
                    <Paper className={classes.paperStyle}>
                        Max value: <input type="number"
                                          onChange={onMaxChangeValue}
                                          value={counter.maxValue}
                                          className={classes.input}
                                          style={(counter.maxValue < 0 ||
                                              counter.maxValue <= counter.startValue)
                                              ?
                                              {backgroundColor: 'red'} : {backgroundColor: 'gold'}}
                    />
                        <br/>
                        Start value: <input type="number"
                                            onChange={onStartChangeValue}
                                            value={counter.startValue}
                                            className={classes.input}
                                            style={(counter.startValue < 0 ||
                                                counter.maxValue <= counter.startValue)
                                                ?
                                                {backgroundColor: 'red'} : {backgroundColor: 'gold'}}
                    />
                        <br/>
                        <Button
                            variant="outlined"
                            className={classes.button}
                            onClick={onSetClickHandler}
                            disabled={counter.startValue < 0 ||
                                counter.maxValue <= 0 ||
                                counter.maxValue === counter.startValue ||
                                !counter.isSettings}
                        >
                            Set
                        </Button>
                    </Paper>
                    <Paper className={classes.paperStyle}>
                        <div style={counter.count === counter.maxValue ? {color: "red"} : {}}>
                            {(counter.startValue >= counter.maxValue || counter.startValue < 0) ? "Invalid value!" : counter.count}
                        </div>

                        <Button
                            variant="outlined"
                            className={classes.button}
                            onClick={onIncClickHandler}
                            disabled={counter.count === counter.maxValue || counter.startValue < 0 || counter.isSettings}>
                            Inc
                        </Button>
                        <Button variant="outlined" className={classes.button} onClick={onResClickHandler}
                                disabled={counter.count === counter.startValue || counter.isSettings}>
                            Reset
                        </Button>
                    </Paper>

                </main>
            </Container>

        </div>
    );
}

export default App;
