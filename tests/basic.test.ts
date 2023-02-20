import { demo, isArray } from '../src/index'

describe('ts-lib-basic:demo', () => {
  test('demo 1,2 to 3', () => {
    expect(
      demo(1, 2),
    ).toBe(3)
  })

  test('isArray [] to true', () => {
    expect(
      isArray([]),
    ).toBe(true)
  })

  test('isArray {} to false', () => {
    expect(
      isArray({}),
    ).toBe(false)
  })
})
