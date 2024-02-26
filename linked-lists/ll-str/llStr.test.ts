import { describe, it, expect } from "vitest";
import { LLStr as LL, IndexError } from "./llStr";

describe("push", function () {
  it("appends and updates", function () {
    const lst = new LL();

    lst.push("a");
    expect(lst.length).toBe(1);
    expect(lst.head!.val).toBe("a");
    expect(lst.tail!.val).toBe("a");

    lst.push("b");
    expect(lst.length).toBe(2);
    expect(lst.head!.val).toBe("a");
    expect(lst.head!.next!.val).toBe("b");
    expect(lst.tail!.val).toBe("b");

    lst.push("c");
    expect(lst.length).toBe(3);
    expect(lst.head!.val).toBe("a");
    expect(lst.head!.next!.val).toBe("b");
    expect(lst.tail!.val).toBe("c");
  });
});

describe("unshift", function () {
  it("prepends and updates", function () {
    const lst = new LL();

    lst.unshift("a");
    expect(lst.length).toBe(1);
    expect(lst.head!.val).toBe("a");
    expect(lst.tail!.val).toBe("a");

    lst.unshift("b");
    expect(lst.length).toBe(2);
    expect(lst.head!.val).toBe("b");
    expect(lst.tail!.val).toBe("a");

    lst.unshift("c");
    expect(lst.length).toBe(3);
    expect(lst.head!.val).toBe("c");
    expect(lst.head!.next!.val).toBe("b");
    expect(lst.tail!.val).toBe("a");
  });
});

describe("pop", function () {
  it("removes at end and updates", function () {
    const lst = new LL(["a", "b"]);

    expect(lst.pop()).toBe("b");
    expect(lst.head!.val).toBe("a");
    expect(lst.tail!.val).toBe("a");
    expect(lst.length).toBe(1);

    expect(lst.pop()).toBe("a");
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
    expect(lst.length).toBe(0);
  });
  it("throws err on empty list", function () {
    const lst = new LL([]);
    expect(() => lst.pop()).toThrow(IndexError);
  });
});

describe("shift", function () {
  it("removes at start and updates", function () {
    const lst = new LL(["a", "b"]);

    expect(lst.shift()).toBe("a");
    expect(lst.tail!.val).toBe("b");
    expect(lst.head!.val).toBe("b");
    expect(lst.length).toBe(1);

    expect(lst.shift()).toBe("b");
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
    expect(lst.length).toBe(0);
  });
  it("throws err on empty list", function () {
    const lst = new LL([]);
    expect(() => lst.shift()).toThrow(IndexError);
  });
});

describe("getAt", function () {
  it("gets val at index", function () {
    const lst = new LL(["a", "b", "c", "d"]);

    expect(lst.getAt(0)).toBe("a");
    expect(lst.getAt(1)).toBe("b");
    expect(lst.getAt(2)).toBe("c");
    expect(lst.getAt(3)).toBe("d");
  });

  it("throws error when out of range", function () {
    const lst = new LL(["a"]);

    expect(() => lst.getAt(-1)).toThrow(IndexError);
    expect(() => lst.getAt(1)).toThrow(IndexError);

    const lst_empty = new LL([]);
    expect(() => lst_empty.getAt(0)).toThrow(IndexError);
  });
});

describe("setAt", function () {
  it("sets val at index", function () {
    const lst = new LL(["a", "b"]);

    lst.setAt(0, "A");
    expect(lst.head!.val).toBe("A");
    expect(lst.head!.next!.val).toBe("b");
    expect(lst.tail!.val).toBe("b");
    expect(lst.length).toBe(2);

    lst.setAt(1, "B");
    expect(lst.head!.val).toBe("A");
    expect(lst.head!.next!.val).toBe("B");
    expect(lst.tail!.val).toBe("B");
    expect(lst.length).toBe(2);
  });

  it("throws error when out of range", function () {
    const lst = new LL(["a"]);

    expect(() => lst.setAt(-1, "b")).toThrow(IndexError);
    expect(() => lst.setAt(1, "b")).toThrow(IndexError);
  });
});

describe("insertAt", function () {
  it("inserts and updates", function () {
    const lst = new LL(["a", "b"]);

    lst.insertAt(1, "1");
    expect(lst.head!.val).toBe("a");
    expect(lst.head!.next!.val).toBe("1");
    expect(lst.head!.next!.next!.val).toBe("b");
    expect(lst.tail!.val).toBe("b");
    expect(lst.length).toBe(3);

    lst.insertAt(0, "0");
    expect(lst.head!.val).toBe("0");
    expect(lst.tail!.val).toBe("b");
    expect(lst.length).toBe(4);

    lst.insertAt(4, "4");
    expect(lst.head!.val).toBe("0");
    expect(lst.tail!.val).toBe("4");
    expect(lst.length).toBe(5);
  });

  it("inserts into empty list", function () {
    const lst = new LL();

    lst.insertAt(0, "a");
    expect(lst.length).toBe(1);
    expect(lst.head!.val).toBe("a");
    expect(lst.tail!.val).toBe("a");
  });

  it("throws error when out of range", function () {
    const lst = new LL(["a"]);

    expect(() => lst.insertAt(-1, "a")).toThrow(Error);
    expect(() => lst.insertAt(2, "a")).toThrow(Error);
  });
});

describe("removeAt", function () {
  it("removes items from list", function () {
    const lst = new LL(["a", "b", "c", "d"]);

    expect(lst.length).toBe(4);
    expect(lst.removeAt(2)).toBe("c");
    expect(lst.length).toBe(3);

    expect(lst.removeAt(0)).toBe("a");
    expect(lst.length).toBe(2);

    expect(lst.removeAt(1)).toBe("d");
    expect(lst.length).toBe(1);
  });

  it("removes from 1-item list", function () {
    const lst = new LL(["a"]);

    lst.removeAt(0);
    expect(lst.length).toBe(0);
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
  });

  it("throws error when out of range", function () {
    const lst = new LL(["a"]);

    expect(() => lst.removeAt(-1)).toThrow(Error);
    expect(() => lst.removeAt(1)).toThrow(Error);
  });

  it("should return an array", function () {
    const lst = new LL(["a", "b", "c"]);
    expect(lst.toArray()).toEqual(["a", "b", "c"]);
  });
});
