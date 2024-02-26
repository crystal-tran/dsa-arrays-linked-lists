import { expect, it } from "vitest";
import { LLStr } from "../common/ll";
import { reverseInPlace } from "./revInPlace";

it("reverses list of 3", function () {
    const lst = new LLStr(["a", "b", "c"]);
    reverseInPlace(lst);
    expect(lst.head!.val).toBe("c");
    expect(lst.head!.next!.val).toBe("b");
    expect(lst.head!.next!.next!.val).toBe("a");
    expect(lst.tail!.val).toBe("a");
    expect(lst.tail!.next).toBe(null);
  });

  it("reverses list of 2", function () {
    const lst = new LLStr(["a", "b"]);
    reverseInPlace(lst);
    expect(lst.head!.val).toBe("b");
    expect(lst.head!.next!.val).toBe("a");
    expect(lst.tail!.val).toBe("a");
  });

  it("reverses list of 1", function () {
    const lst = new LLStr(["a"]);
    reverseInPlace(lst);
    expect(lst.head!.val).toBe("a");
    expect(lst.head!.next).toBe(null);
    expect(lst.tail!.val).toBe("a");
    expect(lst.tail!.next).toBe(null);
  });
  it("does nothing with empty list", function () {
    const lst = new LLStr([]);
    reverseInPlace(lst);
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
  });

