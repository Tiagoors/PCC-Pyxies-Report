export interface IProblemPost {
    id: number,
      description: string,
      file: string,
      accepted: boolean,
      department: string,
      user_id: number,
      created_at: string | Date;
}