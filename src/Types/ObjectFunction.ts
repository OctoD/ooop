import { TypeBase, ObjectVoid } from '../types';
import InvalidCastError from '../Errors/InvalidCastError';

export default class ObjectFunction<TFunction extends (... args: any[]) => TypeBase> extends TypeBase<TFunction> {
  public cast<T extends TypeBase<unknown>>(type: T): TypeBase<TFunction> {
    throw InvalidCastError.create(type, this);
  }

  public apply<TArgs extends Array<TypeBase>>(args: TArgs): ReturnType<TFunction> {
    return this['underlyingValue'].apply(null, args) as ReturnType<TFunction>;
  }

  public call<TArgs extends Array<TypeBase>>(... args: TArgs): ReturnType<TFunction> {
    return this['underlyingValue'].call(null, ... args) as ReturnType<TFunction>;
  }
  
  public name(): string {
    return `[object Function]`;
  }
  
  public nullable(): boolean {
    return false;
  }
}