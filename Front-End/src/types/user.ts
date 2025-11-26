export type UserType = {
  _id: string;
  name: string;
  username: string;
  email: string;
  password_hash: string;

  user_type: "Aluno" | "Professor";

  // Aluno
  ra?: string | null;
  curso?: string | null;
  turma?: string | null;

  // Professor
  rg?: string | null;
  materia?: string | null;

  role: "user" | "admin";

  created_at: Date;
};
