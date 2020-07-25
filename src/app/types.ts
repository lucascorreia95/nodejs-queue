export type User = {
  name: string;
  email: string;
  password: string;
};

export type HandleData = {
  data: {
    user: User;
  };
};
