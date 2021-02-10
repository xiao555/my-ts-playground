import { Split } from './split';

type WordSeparators = '-' | '_' | ' ';

type A = CamelCase<'UserID'>;
const someVariable: CamelCase<'foo-bar'> = 'fooBar';

type CamelCasedProps<T> = {
	[K in keyof T as CamelCase<K>]: T[K]
};

interface RawOptions {
	'dry-run': boolean;
	'full_family_name': string;
	foo: number;
}

type DbResult = CamelCasedProps<RawOptions>;

const dbResult: DbResult = {
    dryRun: true,
    fullFamilyName: 'bar.js',
    foo: 123
}


type InnerCamelCaseStringArray<Parts extends any[], PreviousPart> =
Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
    ? `${Capitalize<FirstPart>}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}`
    : ''

type CamelCaseStringArray<Parts extends string[]> =
    Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
        ? Uncapitalize<`${FirstPart}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}`>
        : never


type CamelCase<S> = S extends string ? CamelCaseStringArray<Split<S, WordSeparators>> : S;