import { PageInfo } from '@devoxa/prisma-relay-cursor-connection';
import { Edge } from './edge.dto';
export declare class Page<Record> {
    edges: Edge<Record>[];
    pageInfo: PageInfo;
    totalCount: number;
    constructor(partial: Partial<Page<Record>>);
}
