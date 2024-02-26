import { expect, it } from "vitest";
import { LLStr } from "../common/ll";
import { average } from "./average";

it("calculates avg", function () {
  const lst = new LLStr(["1", "2", "3", "4"]);
  expect(average(lst)).toEqual(2.5);
});

it("returns 0 for empty lists", function () {
  const lst = new LLStr([]);
  expect(average(lst)).toBe(0);
});
