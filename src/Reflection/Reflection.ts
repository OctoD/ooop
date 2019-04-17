import { ConstructorOf } from '@Types/ConstructorOf';
import TypeBase from '@Types/TypeBase';
import ObjectVoid from '@Types/ObjectVoid';
import ObjectString from '@Types/ObjectString';

export function construct<T extends TypeBase<K>, K>(Type: ConstructorOf<T>, args: K): T {
  return new Type(args);
}

export function createType<T>(TypeName: ObjectString): ConstructorOf<TypeBase<T>> {
  const map = { 
    [TypeName.value()](this: TypeBase<T>, arg: T) {
      this[`underlyingValue`] = arg;
    }
  }
  const ctor = map[TypeName.value()] as any as ConstructorOf<TypeBase<T>>;

  ctor.prototype = TypeBase.prototype;
  ctor.prototype.name = () => {
    return `[object ${TypeName.value()}]`;
  }
  (<any> ctor).skipToken = TypeBase.skipToken;

  return ctor;
}

export function defineProperty<T extends TypeBase<K>, K>(Type: ConstructorOf<T>, propertyName: ObjectString, property: TypeBase): ObjectVoid {
  Type.prototype[propertyName.value()] = property;
  return new ObjectVoid();
}

export function typeOf<T extends TypeBase<K>, K>(Type: ConstructorOf<T>): string {
  return construct(Type, TypeBase.skipToken as any).name();
}
