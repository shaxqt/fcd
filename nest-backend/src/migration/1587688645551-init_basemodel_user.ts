import {MigrationInterface, QueryRunner} from "typeorm";

export class initBasemodelUser1587688645551 implements MigrationInterface {
    name = 'initBasemodelUser1587688645551'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, "username_spotify" character varying(100) NOT NULL, "display_name" character varying(35) NOT NULL, "test" character varying(35) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username_spotify"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "display_name"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "test"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "username_spotify" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "display_name" character varying(35) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "test" character varying(35) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(250) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(100) NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "test"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "display_name"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username_spotify"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "test" character varying(35) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "display_name" character varying(35) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "username_spotify" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
