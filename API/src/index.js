import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import restful from 'express-restful-es6';
import config from '../config.json';

var server = express();

server.use(cors());

server.use(bodyParser.json());

restful.configure(server,{
    dirname:__dirname+'/controllers'
});

server.listen(config.port);
