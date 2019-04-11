import { ObjectInt } from '../types';
import ObjectFloat from '../Types/ObjectFloat';

export default class OutOfRangeError extends TypeError {
  public static create(min: ObjectFloat | ObjectInt, max: ObjectFloat | ObjectInt) {
    return new OutOfRangeError(`Invalid range, min is ${min.value()}, max is ${max.value()}`);
  }
  public name = 'OutOfRangeError';
}
