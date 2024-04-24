import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../users/entities/user.entity';

export class Token {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    private user: User,
  ) {}

  accessToken = this.jwtService.signAsync(
    { id: this.user.id },
    {
      secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
      expiresIn: '1m',
    },
  );

  refreshToken = this.jwtService.signAsync(
    { id: this.user.id },
    {
      secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
      expiresIn: '7d',
    },
  );
}
