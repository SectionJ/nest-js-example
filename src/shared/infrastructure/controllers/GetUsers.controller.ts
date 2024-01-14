import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserServices } from 'src/shared/application/GetUser.service';
import { REST_ROUTE } from '../const';

@Controller(REST_ROUTE + 'users')
@ApiTags('Users')
export class GetUsersController {
  constructor(private readonly service: GetUserServices) { }

  @Get()
  method() {
    return this.service.execute();
  }
}
