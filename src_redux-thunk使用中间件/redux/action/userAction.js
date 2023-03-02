let setPasswordActions = (password) =>{
    return {
        type:'SET_PASSWORD',
        password:password
    }
}

let setSexActions = (sex) =>{
    return {
        type:'SET_SEX',
        sex:sex
    }
}


export {
    setPasswordActions,
    setSexActions
}