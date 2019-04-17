import Assign from '@Operators/Assign';
import ObjectString from '@Types/ObjectString';
import ObjectVariable from '@Types/ObjectVariable';
import ObjectInt from '@Types/ObjectInt';

describe(`Assign`, () => {
  test(`Can assign a value`, () => {
    expect(() => new Assign()).not.toThrowError();

    const assignment = new Assign();

    assignment.left(new ObjectString('varname'));
    assignment.right(new ObjectInt(10000));

    expect(() => assignment.apply()).not.toThrowError()
    expect(assignment.apply()).toBeDefined()
    expect(assignment.apply().signedName().value()).toBe('varname');
    expect(assignment.apply().name()).toBe(new ObjectVariable(ObjectString, new ObjectString(``), new ObjectString('')).name());
  });
});
