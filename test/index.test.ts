import { expect, test } from "bun:test"
import { match } from "../"

test("matches undefined", () =>
  expect(
    match(undefined,
      [[undefined, () => true]],
      () => false
    )
  ).toBeTrue()
)

test("matches null", () =>
  expect(
    match(null,
      [[null, () => true]],
      () => false
    )
  ).toBeTrue()
)

test("matches booleans", () =>
  expect(
    match(true,
      [[true, () => true]],
      () => false
    )
  ).toBeTrue()
)

test("matches numbers", () =>
  expect(
    match(1,
      [[1, () => true]],
      () => false
    )
  ).toBeTrue()
)

test("matches strings", () =>
  expect(
    match('hi',
      [['hi', () => true]],
      () => false
    )
  ).toBeTrue()
)

test("matches symbols", () =>
  expect(
    match(Symbol("abcd"),
      [[Symbol("abcd"), () => true]],
      () => false
    )
  ).toBeFalse()
)

test("matches bigint", () =>
  expect(
    match(BigInt(133742069),
      [[BigInt(133742069), () => true]],
      () => false
    )
  ).toBeTrue()
)

test("matches arrays", () =>
  expect(
    match([1, 2],
      [[[1, 2], () => true]],
      () => false
    )
  ).toBeTrue()
)

test("matches json", () => {
  expect(
    match({ x: 1, y: 2 },
      [[{ x: 1, y: 2 }, () => true]],
      () => false
    ), "json failed exact match"
  ).toBeTrue()

  expect(
    match({ x: 1, y: 2 },
      [[{ x: 1, y: 3 }, () => true]],
      () => false
    ), "json gave false positive"
  ).toBeFalse()

  expect(
    match({ x: 1, y: 2 },
      [[{ x: 1 }, () => true]],
      () => false
    ), "json failed length comparison"
  ).toBeFalse()
})
