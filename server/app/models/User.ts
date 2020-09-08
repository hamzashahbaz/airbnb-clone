import * as bcrypt from 'bcrypt';
import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('varchar', { length: 255, unique: true })
	email: string;

	@Column('text')
	password: string;

	@Column('boolean', { default: false })
	confirmed: boolean;

	@Column('boolean', { default: false })
	forgotPasswordLocked: boolean;

	@BeforeInsert()
	async hashPasswordBeforeInsert() {
		this.password = await bcrypt.hash(this.password, 10);
	}
}
