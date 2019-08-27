import { Scope, Scoped } from 'typescript-ioc';

@Scoped(Scope.Local)
export class LibDependencyClass {
	name = 'bielik name';
	surname = 'bielik surname';

	constructor() {
		console.log('constructor LibDependencyClass');
	}
}
