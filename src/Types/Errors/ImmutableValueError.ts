import ObjectError from '@Types/ObjectError';
import ObjectString from '@Types/ObjectString';
import ObjectVariable from '@Types/ObjectVariable';

export default class ImmutableValueError extends ObjectError {
  public static create(caller: ObjectVariable): ImmutableValueError {
    return new ImmutableValueError(
      new ObjectString(
        `Cannot mutate ${caller.signedName()} since it is marked as immutable`,
      )
    );
  }
  public name() {
    return `[error ImmutableValueError]`;
  }
}