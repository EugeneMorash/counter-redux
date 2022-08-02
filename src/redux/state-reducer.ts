

export const INC_COUNT = "INC-COUNT"
export const RES_COUNT = "RES-COUNT"
export const SET_COUNT = "SET-COUNT"


export type ActionType = IncCountAT | ResCountAT | SetCountAT

export type IncCountAT = ReturnType<typeof incCountAC>
export type ResCountAT = ReturnType<typeof resCountAC>
export type SetCountAT = ReturnType<typeof setCountAC>


const initialState = {
    maxValue: 5,
    startValue: 0,
    count: 0
}

export type CounterType = typeof initialState

export const counterReducer = (state: CounterType = initialState, action: ActionType) => {
    switch (action.type) {
        case INC_COUNT:
            return {...state, count: action.count + 1}
        case RES_COUNT:
            return {...state, count: action.startValue}
        case SET_COUNT:
            return {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue,
                count: action.startValue
            }

        default:
            return state
    }

}


export const incCountAC = (count: number) => ({
    type: INC_COUNT,
    count
}) as const

export const resCountAC = (count: number, startValue: number) => ({
    type: RES_COUNT,
    startValue,
    count
}) as const

export const setCountAC = (startValue: number, maxValue: number) => ({
    type: SET_COUNT,
    startValue,
    maxValue
}) as const

