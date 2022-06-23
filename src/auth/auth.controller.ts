import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/loginDto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post()
    login(@Body() loginDto: LoginAuthDto){
        return this.authService.login(loginDto);
    }
    


}
