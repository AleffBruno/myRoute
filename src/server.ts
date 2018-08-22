import * as http from 'http';
import app from './App';

let myHttp = http.createServer(app);

myHttp.listen(3000,function(){
    console.log("l on 3k");
})