export declare class LibDepOfDep1 {
    private field;
    constructor();
}
export declare class LibDepOfDep2 {
    constructor();
}
export declare class LibDependencyClass {
    private dep;
    private dep2;
    name: string;
    surname: string;
    constructor(dep: LibDepOfDep1, dep2: LibDepOfDep2);
}
