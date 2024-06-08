type SignupFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subscribeToEmail: boolean;
  accountType: string;
};

type SigninFormType = {
  email: string;
  password: string;
};

type AuthErrorResponse = {
  message: string;
};
