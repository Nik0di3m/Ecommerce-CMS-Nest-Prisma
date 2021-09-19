import { ApiProperty } from '@nestjs/swagger';

export class Auth {
  @ApiProperty()
  accesToken: string;

  @ApiProperty()
  user?: string;
}
