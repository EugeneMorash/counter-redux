import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {changeSettingsAC, CounterType, setMaxValueAC, setStartValueAC} from "../redux/state-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import Box from "@material-ui/core/Box";

export default function RangeSlider() {
    const counter = useSelector<AppRootStateType, CounterType>(
        (newState) => newState.counter
    )

    const dispatch = useDispatch()

    const [value, setValue] = useState<number[]>([counter.startValue, counter.maxValue]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        dispatch(setStartValueAC(value[0]))
        dispatch(setMaxValueAC(value[1]))
        dispatch(changeSettingsAC(true))
    };

    return (
        <Box>
            <Typography id="range-slider" gutterBottom>
                Slide and press Set
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{width: "100%"}}
            />
        </Box>
    );
}
