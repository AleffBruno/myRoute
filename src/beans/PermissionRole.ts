import {Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Role } from "./Role";
import { Permission } from "./Permission";

@Entity()
export class PermissionRole {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(_type => Permission, permission => permission.permissionsRoles)
    permission!: Permission;

    @ManyToOne(_type => Role, role => role.permissionsRoles)
    role!: Role;

}