import { DummyClass, first } from '@ad-engine/core'

export function products() {
  console.log('this is from products')
  first()
}

export class ProductsClass extends DummyClass {}
