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

type Course = {
  thumbNail: string;
  title: string;
  id: string;
  rating: number;
  authors: string[];
  reviewsLength: number;
  price: number;
  isBestSeller: boolean;
};

type Lesson = {
  id: string;
  title: string;
  video_url: string;
  duration: number;
  courseTitle: string; //to be removed
};
