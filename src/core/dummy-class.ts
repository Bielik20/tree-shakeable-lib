class BaseClass {}

export class DummyClass extends BaseClass {
	static readonly instance: DummyClass = new DummyClass();

	name: string;

	get nameGet(): string {
		return this.name;
	}

	surname = 'bielik surname';

	constructor() {
		super();
		this.name = 'bielik';
	}
}

export const dummy = new DummyClass();
