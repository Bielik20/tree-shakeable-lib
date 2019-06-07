declare class BaseClass {
}
export declare class DummyClass extends BaseClass {
    static readonly instance: DummyClass;
    name: string;
    readonly nameGet: string;
    surname: string;
    constructor();
}
export declare const dummy: DummyClass;
export {};
