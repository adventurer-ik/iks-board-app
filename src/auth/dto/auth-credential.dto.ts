import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCrentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  // 영어, 숫자만 허용
  // @Matches(/^[a-zA-Z0]*$/)
  // 최소 하나의 대문자, 소문자, 특수문자 (@$!%*?&#)
  // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,20}$/)
  // 최소 하나의 대문자, 소문자 / 특수문자는 필수 아님 (@$!%*?&#)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&#]{8,20}$/, {
    message: `Your password must meet the following requirements:
    1. At least one lowercase letter.
    2. At least one uppercase letter.
    3. At least one number.
    4. Optionally, you can include one or more of these special characters: @$!%*?&#.`,
  })
  password: string;
}
