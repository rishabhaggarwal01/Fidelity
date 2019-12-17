export interface UserModel {
  name: string;
  admin: boolean;
  security: {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  };
}
