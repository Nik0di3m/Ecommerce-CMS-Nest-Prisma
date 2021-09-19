import { Type } from '@nestjs/common';
export declare const ApiPageResponse: <TModel extends Type<any>>(model: TModel) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
