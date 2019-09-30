import { Injectable } from '@wikia/dependency-injection';

@Injectable()
export class LibDepOfDep1 {
	field: string;

	constructor() {
		this.field = (Math.random() * 100).toFixed();
		console.log('constructor LibDepOfDep1', this.field);
	}
}

@Injectable()
export class LibDepOfDep2 {
	constructor() {
		console.log('constructor LibDepOfDep2');
	}
}

@Injectable()
export class LibDependencyClass {
	name = 'bielik name';
	surname = 'bielik surname';

	constructor(private dep: LibDepOfDep1, private dep2: LibDepOfDep2) {
		console.log('constructor LibDependencyClass');
	}
}
