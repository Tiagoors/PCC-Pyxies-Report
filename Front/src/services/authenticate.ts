export const authenticateUser = async (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUserData = () => {
  const user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(user);
  } else {
    return false;
  }
};

export const getAdminData = () => {
  const admin = localStorage.getItem("admin");

  if (admin) {
    return JSON.parse(admin);
  } else {
    return false;
  }
};

export const setUserLocal = (user: any) => {
  const userParsed = JSON.stringify(user);

  localStorage.setItem("user", userParsed);
};

export const setAdminLocal = (admin: any) => {
  const adminParsed = JSON.stringify(admin);

  localStorage.setItem("admin", adminParsed);
};
