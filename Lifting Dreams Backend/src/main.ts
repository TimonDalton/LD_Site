import express from 'express';
import session from 'express-session';
// const db = require('./src/database/db.config.ts')
import cors from 'cors';
const port = 3000
import {applyRoutes} from './routes/routes.ts';
const app = express()
async function main() {

  // await db.initDB();
  app.use(cors());//NB TODO: replace before launch
  app.use(session({
    secret: 'skroodado54321',
    resave: false,
    saveUninitialized: true
  }));
  applyRoutes(app);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
main();

// function applyRoutes(app) {
//   app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
// }