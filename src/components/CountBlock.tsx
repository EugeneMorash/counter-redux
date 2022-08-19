import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {CounterType, incCountAC, resCountAC} from "../redux/state-reducer";
import {useStyles} from "../components/Styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {ButtonGroup} from "@material-ui/core";

export function CountBlock() {

    const classes = useStyles();

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

    const getCondition = () => {
        if (counter.startValue >= counter.maxValue || counter.startValue < 0) {
            return "Invalid value!"
        } else if (counter.isSettings) {
            return "Enter values and press 'Set'"
        } else {
            return counter.count
        }
    }

    return (
        <Box className={classes.box}>
            <Box
                style={(counter.count === counter.maxValue || counter.startValue === counter.maxValue) ? {color: "red"} : {}}>
                <p>{getCondition()}</p>
            </Box>
            <ButtonGroup disableElevation variant="contained" size='large' style={{marginTop: 30}}>
                <Button onClick={onIncClickHandler}
                        disabled={counter.count === counter.maxValue || counter.startValue < 0 || counter.isSettings}>
                    Inc
                </Button>
                <Button onClick={onResClickHandler}
                        disabled={counter.count === counter.startValue || counter.isSettings}>
                    Reset
                </Button>
            </ButtonGroup>
        </Box>
    );
}

