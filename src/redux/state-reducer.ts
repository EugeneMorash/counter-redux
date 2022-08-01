

export const INC_COUNT = "INC-COUNT"


export type ActionType = IncCountAT

export type IncCountAT = ReturnType<typeof incCountAC>


const initialState = {
    count: 10
}

export type StateType = typeof initialState

export const counterReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case INC_COUNT:
            return {...state, count: action.count + 1}
        default:
            return state
    }

}



export const incCountAC = (count: number) => ({
    type: INC_COUNT,
    count
}) as const