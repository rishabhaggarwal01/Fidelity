export interface UserStatus {
    nonrepudiation: boolean;
    supportAdmin: boolean;
    support: boolean;
    approver: boolean;
}

export class UserStatusParam {
    nonrepudiationUser: boolean = false;
    supportAdminUser: boolean = false;
    checkApprover: boolean = false;
    showSearch: boolean = false;
}