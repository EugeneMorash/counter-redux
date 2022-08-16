export const INC_COUNT = "INC-COUNT"
export const RES_COUNT = "RES-COUNT"
export const SET_COUNT = "SET-COUNT"
export const SET_SETTINGS = "SET-SETTINGS"
export const SET_START = 'SET-START'
export const SET_MAX = 'SET-MAX'


export type ActionType =
    IncCountAT |
    ResCountAT |
    SetCountAT |
    ChangeSettingsAT |
    setStartValueAT |
    setMaxValueAT

export type IncCountAT = ReturnType<typeof incCountAC>
export type ResCountAT = ReturnType<typeof resCountAC>
export type SetCountAT = ReturnType<typeof setCountAC>
export type ChangeSettingsAT = ReturnType<typeof changeSettingsAC>
export type setStartValueAT = ReturnType<typeof setStartValueAC>
export type setMaxValueAT = ReturnType<typeof setMaxValueAC>


const initialState = {
    startValue: 0,
    maxValue: 10,
    count: 0,
    isSettings: false
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
                maxValue: action.max,
                count: action.startValue
            }
        case SET_SETTINGS:
            return {
                ...state,
                isSettings: action.isSettings
            }
        case SET_START:
        return {
            ...state,
            startValue: action.startValue
        }
         case SET_MAX:
        return {
            ...state,
            maxValue: action.maxValue
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

export const setCountAC = (startValue: number, max: number) => ({
    type: SET_COUNT,
    startValue,
    max
}) as const

export const changeSettingsAC = (isSettings: boolean) => ({
    type: SET_SETTINGS,
    isSettings
}) as const

export const setStartValueAC = (startValue: number) => ({
    type: SET_START,
    startValue
}) as const

export const setMaxValueAC = (maxValue: number) => ({
    type: SET_MAX,
    maxValue
}) as const

