import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "testnest" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "email", length: 100 })
  email: string;
}
