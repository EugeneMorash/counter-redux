import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {changeSettingsAC, CounterType, setMaxValueAC, setStartValueAC} from "../redux/state-reducer";
import {useStyles} from "../components/Styles";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import {Dispatch} from "redux";
import {TextField} from "@material-ui/core";

export function SetBlock() {

    const classes = useStyles();

    const counter = useSelector<AppRootStateType, CounterType>(
        (newState) => newState.counter
    )

    const dispatch = useDispatch<Dispatch>()

    const isSetDisable =
        counter.maxValue <= counter.startValue ||
        counter.startValue < 0 ||
        counter.maxValue <= 0 ||
        !counter.isSettings

    const checkValidValue = (value: number) => {
        const checkLimits = counter.maxValue <= counter.startValue
        return {backgroundColor: (value < 0 || checkLimits) ? 'red' : ''}
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
        // dispatch(setCountAC(counter.startValue, counter.maxValue))
        dispatch(changeSettingsAC(false))
    };


    return (
        <Box className={classes.box}>

            <Box m={1}>Max value:
                <TextField type='number'
                           value={counter.maxValue}
                           onChange={onMaxChangeValue}
                           className={classes.input}
                           style={checkValidValue(counter.maxValue)}
                />
            </Box>
            <Box m={1}>Start value:
                <TextField type='number'
                           value={counter.startValue}
                           onChange={onStartChangeValue}
                           className={classes.input}
                           style={checkValidValue(counter.startValue)}
                /></Box>

            {/*<RangeSlider/>*/}

            <Button variant="outlined"
                    color="primary"
                    size="large"
                    onClick={onSetClickHandler}
                    disabled={isSetDisable}
            >
                Set
            </Button>
        </Box>
    );
}
