import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {changeSettingsAC, CounterType, setCountAC} from "../redux/state-reducer";
import {useStyles} from "../components/Styles";
import Button from "@material-ui/core/Button";
import RangeSlider from "./Slider";
import Box from '@material-ui/core/Box';

export function SetBlock() {

    const classes = useStyles();

    const counter = useSelector<AppRootStateType, CounterType>(
        (newState) => newState.counter
    )

    const dispatch = useDispatch()

    const onSetClickHandler = () => {
        dispatch(setCountAC(counter.startValue, counter.maxValue))
        dispatch(changeSettingsAC(false))
    };

    const isSetDisable =
        counter.startValue < 0 ||
        counter.maxValue <= 0 ||
        counter.maxValue <= counter.startValue ||
        !counter.isSettings


    return (
        <Box className={classes.box}>

            <Box m={1}>Max value: {counter.maxValue}</Box>
            <Box m={1}>Start value: {counter.startValue}</Box>

            <RangeSlider/>

            <Button variant="contained"
                    size="large"
                    onClick={onSetClickHandler}
                    disabled={isSetDisable}
            >
                Set
            </Button>
        </Box>
    );
}
