import ObjectObject from '../ObjectObject';
import * as basetests from './__ignore__/baseTests';
import ObjectString from '../ObjectString';

describe(ObjectObject.name, () => {
  basetests.hasEqualsTo(ObjectObject);
  basetests.hasName(ObjectObject);
  basetests.hasToString(ObjectObject);
  basetests.hasValue(ObjectObject);
  basetests.isNullable(ObjectObject, true);

  test('On object you can add custom properties', () => {
    const obj = new ObjectObject({});

    obj.foo = new ObjectString('hello');

    expect(obj).toHaveProperty('foo');
  });
});
