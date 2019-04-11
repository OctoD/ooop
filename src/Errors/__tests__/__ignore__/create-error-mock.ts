import { ConstructorOf } from '../../../Types/ConstructorOf';

export default function createErrorMock(ErrorConstructor: ConstructorOf<Error>) {
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
      const mocked = {
        name: jest.fn().mockReturnValue('a'),
        value: jest.fn().mockReturnValue('a'),
      };
      
      expect(() => ErrorConstructor['create'](mocked, mocked)).not.toThrowError();
      expect(ErrorConstructor['create'](mocked, mocked).name).toBe(new ErrorConstructor().name);
    });
  });
}
