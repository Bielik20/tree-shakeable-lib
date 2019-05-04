class BaseClass {}

export class DummyClass extends BaseClass {
  static readonly instance: DummyClass = new DummyClass()

  get nameGet() {
    return this.name
  }

  public surname = 'bielik surname'

  constructor() {
    super()
    this.name = 'bielik'
  }
}

export const dummy = /*@__PURE__*/ new DummyClass()
