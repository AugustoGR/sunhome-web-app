
export class Login {
  public UserName: string | undefined;
  public Password: string | undefined;

  constructor(data?: Partial<Login>) {
    Object.assign(this, data);
  }

}
