import { Users } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { WebResponse } from '../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../common/validation/validation.service';
import { SignInUsersRequest, SignInUsersResponse, SignUpUsersRequest, SignUpUsersResponse, UpdatePasswordRequest, UsersResponse } from './dto/users.dto';
export declare class UsersService {
    private readonly entityManager;
    private validationService;
    private jwtService;
    constructor(entityManager: EntityManager, validationService: ValidationService, jwtService: JwtService);
    signUp(req: SignUpUsersRequest): Promise<{
        data: SignUpUsersResponse;
    }>;
    signIn(req: SignInUsersRequest): Promise<{
        data: SignInUsersResponse;
    }>;
    getUser(user: Users): Promise<{
        data: UsersResponse;
    }>;
    updatePassword(user: Users, req: UpdatePasswordRequest): Promise<WebResponse>;
    signOut(user: Users): Promise<WebResponse>;
}
