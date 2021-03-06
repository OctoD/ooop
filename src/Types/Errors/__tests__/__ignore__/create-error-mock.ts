import { ConstructorOf } from '../../../ConstructorOf';
import ObjectError from '../../../ObjectError';

export default function createErrorMock(ErrorConstructor: ConstructorOf<ObjectError>) {
  return describe(ErrorConstructor.name, () => {
    test('It can be instanced', () =>
      expect(() => new ErrorConstructor()).not.toThrowError()
    );

    test('It has a message', () =>
      expect(new ErrorConstructor()).toHaveProperty('message')
    );

    test('It has a name', () =>
      expect(new ErrorConstructor()).toHaveProperty('name')
    );

    test('It has a stack', () =>
      expect(new ErrorConstructor()).toHaveProperty('name')
    );

    test('It has a create static method', () => 
      expect('create' in ErrorConstructor).toBeDefined()
    );

    test(`Static create will return an instance of ${ErrorConstructor.name}`, () => {
      const mocked = new Proxy({}, {
        get: () => jest.fn().mockReturnValue('a'),
      });
      const mocks = [] as any;

      while (mocks.length < 10) {
        mocks.push(mocked);
      }
      
      expect(() => (ErrorConstructor as any)['create'].apply(null, mocks as any)).not.toThrowError();
      expect((ErrorConstructor as any)['create'].apply(null, mocks as any).name()).toBe(new ErrorConstructor().name());
    });
  });
}
