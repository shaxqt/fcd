import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnUser1577029988784 implements MigrationInterface {
    name = 'addColumnUser1577029988784'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "test" character varying(35) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "test"`, undefined);
    }

}
