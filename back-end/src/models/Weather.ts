import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Locale from './Locale';

@Entity('weather')
class Weather {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @PrimaryColumn()
    locale_id: string;

    @Column()
    date: Date;
    
    @Column()
    text: string;
    
    @Column('json')
    temperature: { min: number, max: number};
   
    @Column('json')
    rain: { probability: number, precipitation: number};

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne( () => Locale )
    @JoinColumn({ name: 'locale_id'})
    locales: Locale;
}

export default Weather;