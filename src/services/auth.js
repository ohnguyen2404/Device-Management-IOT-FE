import {AuthApi} from "../api";

const register = (username, email, password) => {
  return AuthApi.register({
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return AuthApi.login({
    username,
    password,
  })
  .then((response) => {
    console.log('response', response);
    if (response.accessToken) {
      localStorage.setItem("user", JSON.stringify(response));
    }

    return response;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};