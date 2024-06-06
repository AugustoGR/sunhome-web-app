
export class Login {
  public Login: string | undefined;
  public Password: string | undefined;

  constructor(data?: Partial<Login>) {
    Object.assign(this, data);
  }

}
