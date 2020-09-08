import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUsersTable1593100010133 implements MigrationInterface {
	name = 'createUsersTable1593100010133';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "password" text NOT NULL, "confirmed" boolean NOT NULL DEFAULT false, "forgotPasswordLocked" boolean NOT NULL DEFAULT false, UNIQUE ("email"), PRIMARY KEY ("id"))`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "users"`);
	}
}
