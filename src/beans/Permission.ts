import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { PermissionRole } from "./PermissionRole";

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    label!: string;

    @OneToMany(_type => PermissionRole, permissionRoles => permissionRoles.permission)
    permissionsRoles!: PermissionRole[];
}