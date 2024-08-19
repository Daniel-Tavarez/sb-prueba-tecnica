import { EventEmitter } from "events";
import baseService from "./BaseService";

class AuthService extends EventEmitter {
  private tokenKey = "authToken";

  async login(username: string, password: string): Promise<void> {
    const response = (await baseService.post("/Auth/login", {
      username,
      password,
    })) as any;

    const token = response.token;
    if (token) {
      this.setToken(token);
      this.emit("authChange", true); // Emit event
    }
  }

  setToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.tokenKey, token);
      this.emit("authChange", true); // Emit event
    }
  }

  getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(this.tokenKey);
    } else {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.tokenKey);
      this.emit("authChange", false); // Emit event
    }
  }
}

export default new AuthService();
