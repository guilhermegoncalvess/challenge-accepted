import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createWeather1625590636202 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'weather',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'locale_id',
                        type: 'uuid',
                    },
                    {
                        name: 'date',
                        type: 'date',
                        isNullable: false,
                    },
                    {
                        name: 'text',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'temperature',
                        type: 'json',
                        isNullable: false
                    },
                    {
                        name: 'rain',
                        type: 'json',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )

        await queryRunner.createForeignKey('weather', new TableForeignKey({
            name: 'WeatherOfLocale',
            columnNames: ['locale_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'locale',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey( 'weather','WeatherOfLocale');
        await queryRunner.dropTable('weather');
    }

}
