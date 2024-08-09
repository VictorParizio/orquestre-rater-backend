export type CreateUserInput = {
  fullName: string;
  userName: string;
  email: string;
  password: string;
};

export type AuthUserInput = {
  email: string;
  password: string;
};

export type UpdateUserInput = {
  fullName: string;
  userName: string;
};
