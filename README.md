# OOOP

Over-engineered object oriented programming

## Install

```bash
npm i ooop
```

## Yeah ok but why?

Because your code will look more professional®, everybody know that skilled developers tend to over-engineer their codebase.

## An hello world example

```typescript
import ooop from 'ooop';

new ooop.Types.Function(
  () => (
    new ooop.Types.ObjectString(`hello world`)
  )
).call();
```

Simple, over-engineered and so professional.

## Best practices using ooop

#### Strings

Don't

```typescript
const varname = 'hello'; // too simple
```

Do

```typescript
import ooop from 'ooop';

new ooop.Types.ObjectString(`hello`);
```

Better.

#### Numbers

Don't

```typescript
const varname = 100; // it could be an Int, a Float, a Decimal...
const varname2 = 100.22; // idem
```

Do

```typescript
import ooop from 'ooop';

new ooop.Types.ObjectInt(100);
new ooop.Types.ObjectDecimal(100.22);
```

Lovely.