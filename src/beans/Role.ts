import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { PermissionRole } from "./PermissionRole";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    label!: string;

    @OneToMany(_type => PermissionRole, permissionRoles => permissionRoles.role)
    permissionsRoles!: PermissionRole[];
}