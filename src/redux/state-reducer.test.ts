import {counterReducer, incCountAC, resCountAC, setCountAC} from "./state-reducer";


test('Count should be increase', () => {

    const state = {
        maxValue: 5,
        startValue: 0,
        count: 0
    }

    const newState = counterReducer(state, incCountAC(state.count))
    expect(newState.count).toBe(1)
})

test('Count should be reset', () => {

    const state = {
        maxValue: 5,
        startValue: 3,
        count: 10
    }

    const newState = counterReducer(state, resCountAC(state.count, state.startValue))
    expect(newState.count).toBe(newState.startValue)

})

test('startValue and maxValue should be set', () => {

    const state = {
        maxValue: 10,
        startValue: 5,
        count: 0
    }

    const newState = counterReducer(state, setCountAC(3,7))
    expect(newState.maxValue).toBe(7)
    expect(newState.startValue).toBe(3)
    expect(newState.count).toBe(newState.startValue)
})

