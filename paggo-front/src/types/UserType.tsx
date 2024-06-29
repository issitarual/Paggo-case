type CreateUser = {
  email: string;
  username: string;
  password: string;
};

type GetUser = {
  email: string;
  password: string;
};

type User = {
  id: string;
  email: string;
  username: string;
  password: string;
};

export type { CreateUser, GetUser, User };
