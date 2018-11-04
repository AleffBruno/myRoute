import {createConnection} from "typeorm";
import {User} from '../beans/User';
import { Company } from "../beans/Company";
import { Route } from "../beans/Route";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "myroute",
    entities: [
        __dirname + "\\..\\beans\\*.ts"
    ],
    synchronize: false,
}).then(async connection => {

    let user = new User();
    user.name = "jose";
    user.email = "jose@email.com";
    user.password = "123456";
    await connection.manager.save(user);

    let user2 = new User();
    user2.name = "pessoa";
    user2.email = "pessoa@email.com";
    user2.password = "123456";
    await connection.manager.save(user2);

    let company = new Company();
    company.name = "Ltda";
    company.cnpj = "99.11.22.33";
    company.users = [user2];
    await connection.manager.save(company);

    let route = new Route();
    route.name = "viaj1";
    route.origin = "casa";
    route.destination = "centro";
    route.departureTime = new Date();
    route.arrivalTime = new Date();
    route.distance = 12;
    route.user = user;
    await connection.manager.save(route);

    let route2 = new Route();
    route2.name = "viaj1";
    route2.origin = "casa";
    route2.destination = "centro";
    route2.departureTime = new Date();
    route2.arrivalTime = new Date();
    route2.distance = 12;
    route2.user = user2;
    route2.company = company;
    await connection.manager.save(route2);

    

}).catch(error => console.log(error));