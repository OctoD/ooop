import ObjectError from '@Types/ObjectError';
import ObjectFloat from '@Types/ObjectFloat';
import ObjectInt from '@Types/ObjectInt';
import ObjectString from '@Types/ObjectString';

export default class OutOfRangeError extends ObjectError {
  public static create(min: ObjectFloat | ObjectInt, max: ObjectFloat | ObjectInt) {
    return new OutOfRangeError(
      new ObjectString(
        `Invalid range, min is ${min.value()}, max is ${max.value()}`,
      )
    );
  }
  public name() {
    return `[error OutOfRangeError]`;
  }
}