const func = (a: string, b: number, c: (d: number) => number): void => {}

type arg0 = getArgs<typeof func, 0>;
type arg1 = getArgs<typeof func, 1>;
type arg2 = getArgs<typeof func, 2>;

type getArgs<F, Index> = F extends (...args: infer U) => any ? Index extends keyof U ? U[Index] : never : never;