import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('locale')
class Locale {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    code: number;
    
    @Column()
    name: string;
    
    @Column()
    state: string;
    
    @Column()
    latitude: number;
    
    @Column()
    longitude: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Locale;