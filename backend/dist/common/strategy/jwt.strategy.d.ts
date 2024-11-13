import { EntityManager } from 'typeorm';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    validate(payload: any): Promise<any>;
}
export {};
