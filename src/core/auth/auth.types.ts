export type User = {
  id: string;
  email: string;
  permissions: string[];
};

export type Company = {
  id: string;
  name: string;
};

export type AuthUser = {
  id: string;
  role: string;
  last_login_at: string;
  company: Company;
  permissions: string[];
};

export type AuthData = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: "Bearer";
  user: AuthUser;
  modules: string[];
  scope: string[];
};

export type AuthResponse =
  | {
      success: true;
      message: string;
      data: AuthData;
    }
  | { success: false; message: string };
