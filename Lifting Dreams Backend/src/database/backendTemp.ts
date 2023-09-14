import {users,locationEvents,locations,signupInformation} from './dummyData';

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 500);
    });
}

export async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}

export async function insertUserToDb(username: string, password: string) {
    await asyncCall();
    const lastId = users.length>0?users[users.length-1]['id']:0;
    users.push(
        {   
            id: lastId+1,
            name: username,
            password: password,
        }
    );
    console.log(users);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 500);
    });
}

export async function checkLoginDetails(username: string, password: string) {
    await asyncCall();
    console.log(users);
    return new Promise((resolve) => {
        const user = users.find((user) => user.name == username && user.password == password);
        if (user != undefined) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

export async function getLocations(location: string) {
    await asyncCall();
    return new Promise((resolve) => {
        console.log(locations);
       resolve(locations);
    });
}
export async function getLocationDates(location: string) {
    await asyncCall();
    return new Promise((resolve) => {
        console.log(locationEvents);
       resolve(locationEvents);
    });
}

export async function getSignupDetails(signupDateId: Number, userId:Number) {
    await asyncCall();
    return new Promise((resolve) => {
       resolve(signupInformation);
    });
}
