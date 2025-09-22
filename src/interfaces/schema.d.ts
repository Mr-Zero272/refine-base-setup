export interface IBase {
  id: string;
}

export interface IUser extends IBase {
  avatar?: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  status: string;
}
