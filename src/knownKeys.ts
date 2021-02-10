interface Test {
    a: number
    b: string
    c: boolean[]
    [key: string]: any
}

type knownKeys = KnownKeys<Test>;

type KnownKeys<T> = { [K in keyof T]: string extends K ? never : number extends K ? never : K } extends { [_ in keyof T]: infer U } ? U : never;
