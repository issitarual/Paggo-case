import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { GoogleStrategy } from 'src/strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'change it',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy]
})
export class AuthModule {}
