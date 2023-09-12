// const { doQuery, tableNames } = require("../../../configs/config");

// const { log } = require('../../../configs/logging');
// const  = require('../logic/routeValidation');
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();
import { validateUserSignup, validateUserLogin, checkIfUserLoggedIn, getUserId } from '../logic/routeValidation.ts';
import { insertUserToDb, checkLoginDetails, getLocations, getLocationDates, getSignupDetails } from '../database/backendTemp';

export function applyRoutes(app) {
    app.use('/',jsonParser, async function (req, res, next) {
        console.log(`request to : ${req.path}`);

        next();
    });
    app.post('/api/signupUser',jsonParser, async function (req, res, next) {
        console.log("In /api/signupUser");
        // console.log(req);
        let data = req.body;
        let name = '';
        let password = '';
        if (data != undefined) {
            name = data['password'];
            password = data['name'];
        }else{
            console.log('body undefined');
        }
        let valid = validateUserSignup(name, password);
        if (!valid) {
            res.status(401).send({ message: 'Username or password in invalid format' });
        } else {
            try {
                await insertUserToDb(name, password);
                res.status(200).send({ message: 'User Successfully Signed Up' });
            } catch (e) {
                res.status(402).send({ message: 'Error Inserting User' });
            }
        }
    });

    app.post('/api/loginUser',jsonParser, async function (req, res, next) {
        console.log("In /api/signupUser");
        let data = req.body;

        let name = data['name'];
        let password = data['password'];
        let valid = validateUserLogin(name, password);
        if (!valid) {
            res.status(400).send({ message: 'Username or password in invalid format' });
        } else {
            try {
                const validUser = await checkLoginDetails(name, password);
                if (validUser) {
                    res.send({ message: 'User Successfully Logged In' });
                } else {
                    res.status(400).send({ message: 'No Such User and Password in System' });
                }
            } catch (e) {
                res.status(400).send({ message: 'Error Inserting User' });
            }
        }
    });
    app.get('/api/getLocations',jsonParser, async function (req, res, next) {
        const userLoggedIn = checkIfUserLoggedIn(req);
        if (!userLoggedIn) {
            res.status(400).send({ message: 'User not logged in' });
        } else {
            try {
                const locationsData = getLocations('');
                res.send({ locations: locationsData });
            } catch (e) {
                res.status(400).send({ message: 'Error getting locations User' });
            }
        }
    });
    app.get('/api/getLocationDates',jsonParser, async function (req, res, next) {
        const userLoggedIn = checkIfUserLoggedIn(req);
        if (!userLoggedIn) {
            res.status(400).send({ message: 'User not logged in' });
        } else {
            const locationId = req.body['location_id'];
            try {
                const locationsData = getLocationDates(locationId);
                res.send({ locations: locationsData });
            } catch (e) {
                res.status(400).send({ message: 'Error getting locations User' });
            }
        }
    });

    app.get('/api/getVolunteeringDateUserSingup',jsonParser, async function (req, res, next) {
        const userLoggedIn = checkIfUserLoggedIn(req);
        let data = req.body;

        let signupDateId = data['signup_date_id'];
        let userId = getUserId(req);
        if (!userLoggedIn) {
            res.status(400).send({ message: 'User not logged in' });
        } else {
            try {
                const signupDateData = getSignupDetails(signupDateId, userId);
                res.send({ signupDetails: signupDateData });
            } catch (e) {
                res.status(400).send({ message: 'Error getting user signup for this date' });
            }
        }
    });

    //catch all
    app.all('/api/*', jsonParser, async function (req, res, next) {
        console.log(`API path not found: ${req.url} using ${req.method}`);
        res.status(404).json({ "message": "API Endpoint not found" });
    });
    //catch all
    app.all('/*', jsonParser, async function (req, res, next) {
        console.log(`Path not found: ${req.url} using ${req.method}`);
        res.status(404).json({ "message": "API Endpoint not found" });
    });
}