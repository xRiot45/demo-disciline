import { Users } from './entities/user.entity';
import { WebResponse } from '../../common/dto/web.dto';
import { UsersService } from './users.service';
import { SignInUsersRequest, SignInUsersResponse, SignUpUsersRequest, SignUpUsersResponse, UpdatePasswordRequest, UsersResponse } from './dto/users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(req: SignUpUsersRequest): Promise<{
        data: SignUpUsersResponse;
    }>;
    signIn(req: SignInUsersRequest): Promise<{
        data: SignInUsersResponse;
    }>;
    getUsers(user: Users): Promise<{
        data: UsersResponse;
    }>;
    updatePassword(user: Users, req: UpdatePasswordRequest): Promise<WebResponse>;
    signOut(user: Users): Promise<WebResponse>;
}
