//TODO: These are placeholder methods where most require cookies and the database to be implemented before being able to be finished

export function validateUserSignup(name, password) {
    if (name != '' && password != '') {
        return true;
    } else {
        return false
    }
}
///note: This function does not check if the user exists in the database
export function validateUserLogin(name, password) {
    if (name != '' && password != '') {
        return true;
    } else {
        return false
    }
}

export function checkIfUserLoggedIn(req) {
    return true;
}

export function getUserId(req) {
    return 0;
}
