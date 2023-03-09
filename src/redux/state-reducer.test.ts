import {changeSettingsAC, counterReducer, incCountAC, resCountAC} from "./state-reducer";


test('Count should be increase', () => {

    const state = {
        maxValue: 5,
        startValue: 0,
        count: 0,
        isSettings: true
    }

    const newState = counterReducer(state, incCountAC(state.count))
    expect(newState.count).toBe(1)
})

test('Count should be reset', () => {

    const state = {
        maxValue: 5,
        startValue: 3,
        count: 10,
        isSettings: true
    }

    const newState = counterReducer(state, resCountAC(state.count, state.startValue))
    expect(newState.count).toBe(newState.startValue)

})

test('isSettings could could be toggled', () => {

    const state = {
        maxValue: 10,
        startValue: 5,
        count: 0,
        isSettings: false
    }

    const newState = counterReducer(state, changeSettingsAC(true))
    expect(newState.isSettings).toBe(true)

})


