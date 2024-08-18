import { EventEmitter } from "events";
import baseService from "./BaseService";

class AuthService extends EventEmitter {
  private tokenKey = "authToken";

  async login(username: string, password: string): Promise<void> {
    const response = await baseService.post("/Auth/login", {
      username,
      password,
    }) as any;

    const token = response.token;
    if (token) {
      this.setToken(token);
      this.emit("authChange", true); // Emit event
    }
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.emit("authChange", true); // Emit event
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.emit("authChange", false); // Emit event
  }
}

export default new AuthService();
