import { PageInfo } from '@devoxa/prisma-relay-cursor-connection';
import { ApiProperty } from '@nestjs/swagger';
import { Edge } from './edge.dto';

export class Page<Record> {
  edges: Edge<Record>[];
  @ApiProperty()
  pageInfo: PageInfo;
  @ApiProperty()
  totalCount: number;

  constructor(partial: Partial<Page<Record>>) {
    Object.assign(this, partial);
  }
}
