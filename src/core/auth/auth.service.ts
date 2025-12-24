import { loginApi } from "./auth.api";

export const login = async (email: string, password: string) => {
  const { token, user } = await loginApi(email, password);

  // set cookie cho middleware
  document.cookie = `access_token=${token}; path=/`;

  return user;
};
