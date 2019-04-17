import TypeBase from '@Types/TypeBase';

export default class InvalidCastError extends TypeError {
  public static create(from: TypeBase, to: TypeBase) {
    return new InvalidCastError(`Invalid cast from type ${from.name()} to ${to.name()}`);
  }
  public name = 'InvalidCastError';
}
