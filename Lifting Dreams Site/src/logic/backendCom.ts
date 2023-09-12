import { users, locationSignups, locations, signupInformation } from './dummyData';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';
export async function postUserSignup(username: string, password: string): Promise<Number> {
    try {
        console.log(`Did: postUserSignup`);
        const res = await axios.post(`${baseUrl}/api/signupUser`, { name: username, password: password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.data['message'] != undefined) {
            console.log(`message: ${res.data['message']}`);
        };
        console.log(`res code: ${res.status}`);
        return res.status;
    } catch (e) {
        console.log('error:');
        console.log(e);
        return 400;
    }
}

export async function checkLoginDetails(username: string, password: string): Promise<boolean> {
    try {
        console.log(`Did: checkLoginDetails`);
        const res = await axios.post(`${baseUrl}/api/loginUser`, { name: username, password: password });
        if (res.data['message'] != undefined) {
            console.log(`message: ${res.data['message']}`);
        };
        console.log(`res code: ${res.status}`);
        return res.status == 200;
    } catch (e) {
        console.log('error:');
        console.log(e);
        return false;
    }
}

export async function getLocations(): Promise<any> {
    try {
        console.log(`Did: getLocations`);
        const res = await axios.post(`${baseUrl}/api/getLocations`);
        if (res.data['message'] != undefined) {
            console.log(`message: ${res.data['message']}`);
        };
        console.log(`res code: ${res.status}`);
        return res.data;
    } catch (e) {
        console.log('error:');
        console.log(e);
        return {};
    }
}
export async function getLocationNameById(locationId) {
    return 'mamelodi';
}

export async function getLocationDates(locationId: Number): Promise<any> {
    try {
        console.log(`Did: getLocationDates`);
        const res = await axios.post(`${baseUrl}/api/getLocations`, { location: location });
        if (res.data['message'] != undefined) {
            console.log(`message: ${res.data['message']}`);
        };
        console.log(`res code: ${res.status}`);
        return res.data;
    } catch (e) {
        console.log('error:');
        console.log(e);
        return {};
    }
}

export async function getSignupDetails(dateId: Number): Promise<any> {
    try {
        console.log(`Did: getSignupDetails`);
        const res = await axios.post(`${baseUrl}/api/getVolunteeringDateUserSingup`, { signup_date_id: dateId });
        if (res.data['message'] != undefined) {
            console.log(`message: ${res.data['message']}`);
        };
        console.log(`res code: ${res.status}`);
        return res.data;
    } catch (e) {
        console.log('error:');
        console.log(e);
        return {};
    }
}


