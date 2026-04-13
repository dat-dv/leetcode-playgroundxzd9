# Debug engine

<!-- TODO: -->

Một số cách debug để hiểu cách V8 tối ưu code (Comming soon)

```ts
const a = [1, 2, 3];
const b = a[0];
const c = a[1];
const d = a[2];

%DebugPrint(a);
%DebugPrint(b);
%DebugPrint(c);
%DebugPrint(d);

```
