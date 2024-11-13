export declare class SignUpUsersRequest {
    username: string;
    password: string;
}
export declare class SignInUsersRequest {
    username: string;
    password: string;
}
export declare class UpdatePasswordRequest {
    password: string;
}
export declare class SignUpUsersResponse {
    id: string;
    username: string;
    role: string;
}
export declare class SignInUsersResponse {
    accessToken: string;
}
export declare class UsersResponse {
    id: string;
    username: string;
    role: string;
}
