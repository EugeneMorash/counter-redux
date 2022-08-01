import {counterReducer, incCountAC} from "./state-reducer";


test('Count should be increase', () => {

    const state = {
        count: 0
    }

    const newState = counterReducer(state, incCountAC(state.count))
    expect(newState.count).toBe(1)
})