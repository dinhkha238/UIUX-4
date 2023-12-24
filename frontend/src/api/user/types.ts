interface User {
  id: number;
  username: string;
  password: string;
}

interface Role {
  id: number;
  name: string;
}

interface UserRole {
  primary: boolean;
  UserId: number;
  RoleId: number;
}

export type { User, Role, UserRole };
