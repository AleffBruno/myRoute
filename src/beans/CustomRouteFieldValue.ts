import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { CustomRouteField } from "./CustomRouteField";
import { Route } from "./Route";

@Entity()
export class CustomRouteFieldValue {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    value!: string;

    @ManyToOne(_type => CustomRouteField, customRouteField => customRouteField.customRouteFieldValues)
    customRouteField!: CustomRouteField;

    @ManyToOne(_type => Route, route => route.customRouteFieldValues)
    route!: Route;
}