import {MigrationInterface, QueryRunner} from "typeorm";

export class addPassword1578048070274 implements MigrationInterface {
    name = 'addPassword1578048070274'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(250) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
    }

}
