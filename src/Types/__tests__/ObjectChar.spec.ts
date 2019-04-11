import ObjectChar from '../ObjectChar';
import * as basetests from './__ignore__/baseTests';
import { ObjectInt } from '../../types';

describe(ObjectChar.name, () => {
  basetests.hasEqualsTo(ObjectChar);
  basetests.hasName(ObjectChar);
  basetests.hasToString(ObjectChar);
  basetests.hasValue(ObjectChar);
  basetests.isNullable(ObjectChar, false);

  test(ObjectChar.prototype.charCode.name, () => {
    const char = new ObjectChar('a');

    expect(char.charCode().value()).toBe(97);
  });

  test(ObjectChar.prototype.toInt.name, () => {
    const char = new ObjectChar('b');

    expect(char.toInt().name()).toBe(new ObjectInt(1).name());
    expect(char.toInt().value()).toBe(98);
  });
});
