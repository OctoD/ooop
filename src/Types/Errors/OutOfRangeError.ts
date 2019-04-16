import ObjectError from '../ObjectError';
import ObjectFloat from '../ObjectFloat';
import ObjectInt from '../ObjectInt';
import ObjectString from '../ObjectString';

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