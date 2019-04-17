import TypeBase from '@Types/TypeBase';
import ObjectVariable from '@Types/ObjectVariable';
import InvalidCastError from '@Types/Errors/InvalidCastError';
import ObjectString from '@Types/ObjectString';
import Throw from '@Operators/Throw';
import ObjectObject from '@Types/ObjectObject';
import ObjectNull from '@Types/ObjectNull';
import ObjectArray from '@Types/ObjectArray';
import ObjectFunction from '@Types/ObjectFunction';
import ObjectVoid from '@Types/ObjectVoid';

export default class DeclarationTableExpression extends ObjectObject {
  public constructor(variables: ObjectArray<ObjectVariable> = new ObjectArray(ObjectVariable)) {
    super()

    variables.forEach(
      new ObjectFunction(
        variable => {
          this.add(variable);
          return new ObjectVoid();
        }
      )
    )
  }
  
  public add(variable: ObjectVariable): DeclarationTableExpression {
    this[variable.signedName().value()] = variable;
    return this;
  }
  
  public cast<T extends TypeBase<unknown>>(type: T): any {
    new Throw().left(new InvalidCastError(new ObjectString(``))).apply();
  }

  public get(name: ObjectString): ObjectVariable | ObjectNull {
    const prop = this[name.value()];

    if ('signedName' in (prop as ObjectVariable)) {
      return prop as ObjectVariable;
    }

    return new ObjectNull();
  }
  
  public name(): string {
    return `[object DeclarationTableExpression]`;
  }
  
  public nullable(): boolean {
    return true;
  }
}