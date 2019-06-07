import { DummyClass, first } from '@lib/core';

export function products(): void {
	console.log('this is from products');
	first();
}

export class ProductsClass extends DummyClass {}
