import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCrentialsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) AuthCrentialsDto: AuthCrentialsDto): Promise<void> {
    return this.authService.signUp(AuthCrentialsDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCrentialsDto) {
    console.log(1);
    return this.authService.signIn(authCredentialsDto);
  }
}
