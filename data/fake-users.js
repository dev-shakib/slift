const fakeUsers = [
  {
    email: "newuser@email.com",
    password: "password",
    userData: {
      email: "newuser@email.com",
      name: "New User",
    },
    onboarding: {
      onboarded: false,
    },
  },
  {
    email: "existinguser@email.com",
    password: "password",
    userData: {
      email: "existinguser@email.com",
      name: "Existing User",
    },
    onboarding: {
      onboarded: true,
    },
  },
];

export const mockLogin = ({ email, password }) => {
  return fakeUsers.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
  );
};

export const mockFindUser = (email) => {
  return fakeUsers.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
};
