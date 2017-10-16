
export class AuthService {
    token: string = '';
    public authenticatedUser = false;
    signUpUser(email: string, password: string) {
    }
    signinUser(email, password) {
    }
  
    isAuthenticated() {
        return this.authenticatedUser;
    }
  
    userLogout() {
    }
  }