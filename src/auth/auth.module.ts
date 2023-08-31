import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import * as config from 'config';

const jwtConfig = config.get('jwt');

@Module({
  imports: [
    // 유저를 인증하기 위해 사용할 기본 strategy를 명시해 주기 여기서는 jwt 명시.
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // jwt 인증 부분을 담당, 그리고 주로 sign()을 위한 부분.
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: {
        expiresIn: process.env.JWR_SECRET || jwtConfig.expiresIn,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // JwtStrategy, AuthService 를 이 Auth 모듈에서 사용할 수 있게 등록
  exports: [JwtStrategy, PassportModule], // JwtStrategy, PassportModule 을 다른 모듈에서 사용할 수 있게 등록
})
export class AuthModule {}
