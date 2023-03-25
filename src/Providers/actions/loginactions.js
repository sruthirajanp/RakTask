export const Login = {
    REQUEST: "LOGIN_REQUEST",
    SUCCESS: "LOGIN_SUCCESS",
    FAILED: "lOGIN_FAILED"
}
export const changenavigate = { CHANGENAVIGATION: 'CHANGENAVIGATION' }
export const loginapi = (payload) => ({
    type: Login.REQUEST,
    payload
})

export const savelogin = { SAVELOGIN: 'SAVELOGIN' }
export const removelogin = { REMOVELOGIN: 'REMOVELOGIN' }


export const navigatescreen = (from, to) => ({
    type: changenavigate.CHANGENAVIGATION, from, to
})