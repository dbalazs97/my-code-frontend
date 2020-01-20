class UserLogin {
	email: string;
	password: string;

	constructor(from?: UserLogin) {
		if (!from) {
			return;
		}
		this.email = from.email;
		this.password = from.password;
	}
}
