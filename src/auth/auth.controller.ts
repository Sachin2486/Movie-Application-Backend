import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signUp(@Body("email") email: string, @Body("password") password: string) {
    return this.authService.signUp(email, password);
  }

  @Post("login")
  signIn(@Body("email") email: string, @Body("password") password: string) {
    return this.authService.signIn(email, password);
  }
}
