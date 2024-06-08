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

type AuthDataResponse = {
  accessToken: string;
  accountType: string;
};

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  subscribe_to_email: boolean;
};

type ErrorResponse = {
  message: string;
};
