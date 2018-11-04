import {Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, ManyToOne} from "typeorm";
import { Company } from "./Company";
import { CustomRouteFieldValue } from "./CustomRouteFieldValue";

@Entity()
export class CustomRouteField {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    customField!: string;

    @CreateDateColumn({type: "timestamp"})
    createdAt!: Date;

    @ManyToOne(_type => Company, company => company.customRouteField)
    company!: Company;

    @OneToMany(_type => CustomRouteFieldValue, customRouteFieldValue => customRouteFieldValue.customRouteField)
    customRouteFieldValues!: CustomRouteFieldValue[];
}