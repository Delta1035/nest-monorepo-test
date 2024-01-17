import {
  Controller,
  Get,
  Headers,
  Inject,
  Res,
  Session,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ServerResponse } from 'http';
import { JwtAndSessionService } from './jwt-and-session.service';

@Controller()
export class JwtAndSessionController {
  constructor(private readonly jwtAndSessionService: JwtAndSessionService) {}
  @Inject(JwtService)
  jwtService: JwtService;
  @Get()
  getHello(): string {
    return this.jwtAndSessionService.getHello();
  }

  @Get('session')
  getSession(@Session() session) {
    console.log('session', session);
    session.count = session.count ? session.count + 1 : 1;
    return session;
  }

  @Get('jwt')
  getJwt(
    /**
     * 确定是否将在路由处理程序中手动发送响应， 使用特定于平台的响应对象公开的本机响应处理方法， 或者它是否应该通过 Nest 响应处理管道。
     * 注入response之后，默认不会将返回值作为body，设置passthrough为true之后就会走nest响应的管道了
     */
    @Res({ passthrough: true })
    response: ServerResponse,
  ) {
    const newToken = this.jwtService.sign({
      count: 1,
    });
    console.log(response, newToken);
    response.setHeader('token', newToken);
    // response.headers.set(name, value);
    return 'response';
  }

  @Get('auth')
  getAuth(
    @Headers('token') authorization: string,
    @Res({
      passthrough: true,
    })
    response: ServerResponse,
  ) {
    if (authorization) {
      try {
        const token = authorization.split(' ')[1];
        console.log(token, authorization);
      } catch (error) {
        console.log(error);
        throw new UnauthorizedException();
      }
    } else {
      return 1;
    }
  }
}
