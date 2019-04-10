import { TypeBase, ObjectString, ObjectBoolean } from '../types';

export function hasKey(key: ObjectString, Type: TypeBase): ObjectBoolean {
  return new ObjectBoolean(key.value() in Type);
}

export function hasProperty(key: ObjectString, Type: TypeBase): ObjectBoolean {
  return new ObjectBoolean(key.value() in Type && typeof Type[key.value()] === 'function');
}
