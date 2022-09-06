import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config.json';
import { Sequelize } from 'sequelize';
import { initModels } from './product/models';
import { LookupModel } from './product/models/lookup.model';
import { initRoutes } from './infrastructure/routes';

let app = express();
let router = express.Router();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
  exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
  limit: config.bodyLimit
}));


const dbConnect = () => {
  const sequelize = new Sequelize('postgres://devmachine:pass123@localhost:8088/floorhouz?currentSchema=floorhouz_customer', {
    dialect: "postgres",
    minifyAliases: true,

  });
  sequelize.authenticate().then((data) => {
    initModels(sequelize);
    sequelize.sync({force : false}).then((data) => {

      initRoutes(app,router);
      console.log('Model is '+LookupModel.getModel());
      app.server.listen(process.env.PORT || config.port, () => {
        console.log(`Started on port ${app.server.address().port}`);
      });
    }).catch((err) => {
      console.log(err);
      process.exit(0);
    })
   
  }).catch((err) => {
    console.log(err);
  })
}

dbConnect();


export default app;