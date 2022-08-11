export const INC_COUNT = "INC-COUNT"
export const RES_COUNT = "RES-COUNT"
export const SET_COUNT = "SET-COUNT"
export const SET_SETTINGS = "SET-SETTINGS"


export type ActionType = IncCountAT | ResCountAT | SetCountAT | ChangeSettingsAT

export type IncCountAT = ReturnType<typeof incCountAC>
export type ResCountAT = ReturnType<typeof resCountAC>
export type SetCountAT = ReturnType<typeof setCountAC>
export type ChangeSettingsAT = ReturnType<typeof changeSettingsAC>


const initialState = {
    startValue: 0,
    maxValue: 10,
    count: 0,
    isSettings: true
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
                startValue: action.start,
                maxValue: action.max,
                count: action.start
            }
        case SET_SETTINGS:
            return {
                ...state,
                isSettings: !action.isSettings
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
    count,
    startValue
}) as const

export const setCountAC = (start: number, max: number) => ({
    type: SET_COUNT,
    start,
    max
}) as const

export const changeSettingsAC = (isSettings: boolean) => ({
    type: SET_SETTINGS,
    isSettings
}) as const

