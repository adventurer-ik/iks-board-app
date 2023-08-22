import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCrentialsDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCrentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto);
  }

  // async signIn(authCredentialsDto: AuthCrentialsDto): Promise<string> {
  //   const { username, password } = authCredentialsDto;
  //   const user = await this.userRepository.findOne({ username });

  //   // 로그 확인용
  //   console.log(user);
  //   console.log(password, user.password);
  //   console.log(await bcrypt.compare(password, user.password));

  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     return 'logIn Success';
  //   } else {
  //     throw new UnauthorizedException('logIn failed');
  //   }
  // }

  async signIn(authCredentialsDto: AuthCrentialsDto): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성
      const payload = { username };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
