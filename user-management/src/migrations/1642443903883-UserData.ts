import {MigrationInterface, QueryRunner} from "typeorm";

export class UserData1642443903883 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying(60), "lastName" character varying(60), "email" character varying(15), "password" character varying(15), "confirm_password" character, "gender" character, PRIMARY KEY ("id")    )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
