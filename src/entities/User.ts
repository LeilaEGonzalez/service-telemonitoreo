interface User {
  id: string;
  idCC: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  image: string;
  firstLogin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export default User;
