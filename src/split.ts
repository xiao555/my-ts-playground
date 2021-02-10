type A = Split<'abcdefg', ''>;
type B = Split<'abcdefg', 'a'>;
type C = Split<'a_b_1_d', '_'>;
type D = Split<'a_b_1_d', '1'>;

export type Split<S extends string, D extends string> =
    S extends '' ? [] :
    S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] :
    [S]
