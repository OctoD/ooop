import ObjectFloat from '@Types/ObjectFloat';
import ObjectInt from '@Types/ObjectInt';

export default class OutOfRangeError extends TypeError {
  public static create(min: ObjectFloat | ObjectInt, max: ObjectFloat | ObjectInt) {
    return new OutOfRangeError(`Invalid range, min is ${min.value()}, max is ${max.value()}`);
  }
  public name = 'OutOfRangeError';
}
