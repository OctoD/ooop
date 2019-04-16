import TypeBase from '../TypeBase';

describe(TypeBase.name, () => {
  it(`Is an abstract class`, () => {
    expect(() => Reflect.construct(TypeBase, [])).toThrowError();
    expect(TypeBase.prototype.equalsTo).toBeDefined();
    expect(TypeBase.prototype.toString).toBeDefined();
    expect(typeof TypeBase.prototype.equalsTo).toBe('function');
    expect(typeof TypeBase.prototype.toString).toBe('function');
  });
});