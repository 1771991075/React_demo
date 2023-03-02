let defaultState = {
    name: 'admin',
    password: 123456,
    sex: '男'
}

let userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PASSWORD':
            let passwordState = { ...state }
            passwordState.password = action.password
            return passwordState
        case 'SET_SEX':
            let sexState = { ...state }
            sexState.sex = action.sex
            return sexState
        default:
            return state
    }
}

export default userReducer