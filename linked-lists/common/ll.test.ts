import { describe, it, expect } from "vitest";
import { LL, IndexError, } from "./ll";

describe("push", function () {
  it("appends and updates", function () {
    const lst = new LL();

    lst.push(5);
    expect(lst.length).toBe(1);
    expect(lst.head!.val).toBe(5);
    expect(lst.tail!.val).toBe(5);

    lst.push(10);
    expect(lst.length).toBe(2);
    expect(lst.head!.val).toBe(5);
    expect(lst.head!.next!.val).toBe(10);
    expect(lst.tail!.val).toBe(10);

    lst.push(15);
    expect(lst.length).toBe(3);
    expect(lst.head!.val).toBe(5);
    expect(lst.head!.next!.val).toBe(10);
    expect(lst.tail!.val).toBe(15);
  });
});

describe("unshift", function () {
  it("prepends and updates", function () {
    const lst = new LL();

    lst.unshift(5);
    expect(lst.length).toBe(1);
    expect(lst.head!.val).toBe(5);
    expect(lst.tail!.val).toBe(5);

    lst.unshift(10);
    expect(lst.length).toBe(2);
    expect(lst.head!.val).toBe(10);
    expect(lst.tail!.val).toBe(5);

    lst.unshift(15);
    expect(lst.length).toBe(3);
    expect(lst.head!.val).toBe(15);
    expect(lst.head!.next!.val).toBe(10);
    expect(lst.tail!.val).toBe(5);
  });
});

describe("pop", function () {
  it("removes at end and updates", function () {
    const lst = new LL([5, 10]);

    expect(lst.pop()).toBe(10);
    expect(lst.head!.val).toBe(5);
    expect(lst.tail!.val).toBe(5);
    expect(lst.length).toBe(1);

    expect(lst.pop()).toBe(5);
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
    const lst = new LL([5, 10]);

    expect(lst.shift()).toBe(5);
    expect(lst.tail!.val).toBe(10);
    expect(lst.head!.val).toBe(10);
    expect(lst.length).toBe(1);

    expect(lst.shift()).toBe(10);
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
    const lst = new LL([5, 10, 15, 20]);

    expect(lst.getAt(0)).toBe(5);
    expect(lst.getAt(1)).toBe(10);
    expect(lst.getAt(2)).toBe(15);
    expect(lst.getAt(3)).toBe(20);
  });

  it("throws error when out of range", function () {
    const lst = new LL([5]);

    expect(() => lst.getAt(-1)).toThrow(IndexError);
    expect(() => lst.getAt(1)).toThrow(IndexError);

    const lst_empty = new LL([]);
    expect(() => lst_empty.getAt(0)).toThrow(IndexError);
  });
});

describe("setAt", function () {
  it("sets val at index", function () {
    const lst = new LL([5, 10]);

    lst.setAt(0, 1);
    expect(lst.head!.val).toBe(1);
    expect(lst.head!.next!.val).toBe(10);
    expect(lst.tail!.val).toBe(10);
    expect(lst.length).toBe(2);

    lst.setAt(1, 2);
    expect(lst.head!.val).toBe(1);
    expect(lst.head!.next!.val).toBe(2);
    expect(lst.tail!.val).toBe(2);
    expect(lst.length).toBe(2);
  });

  it("throws error when out of range", function () {
    const lst = new LL([5]);

    expect(() => lst.setAt(-1, 10)).toThrow(IndexError);
    expect(() => lst.setAt(1, 10)).toThrow(IndexError);
  });
});

describe("insertAt", function () {
  it("inserts and updates", function () {
    const lst = new LL([5, 15]);

    lst.insertAt(1, 10);
    expect(lst.head!.val).toBe(5);
    expect(lst.head!.next!.val).toBe(10);
    expect(lst.head!.next!.next!.val).toBe(15);
    expect(lst.tail!.val).toBe(15);
    expect(lst.length).toBe(3);

    lst.insertAt(0, 1);
    expect(lst.head!.val).toBe(1);
    expect(lst.tail!.val).toBe(15);
    expect(lst.length).toBe(4);

    lst.insertAt(4, 20);
    expect(lst.head!.val).toBe(1);
    expect(lst.tail!.val).toBe(20);
    expect(lst.length).toBe(5);
  });

  it("inserts into empty list", function () {
    const lst = new LL();

    lst.insertAt(0, 5);
    expect(lst.length).toBe(1);
    expect(lst.head!.val).toBe(5);
    expect(lst.tail!.val).toBe(5);
  });

  it("throws error when out of range", function () {
    const lst = new LL([5]);

    expect(() => lst.insertAt(-1, 0)).toThrow(Error);
    expect(() => lst.insertAt(2, 0)).toThrow(Error);
  });
});

describe("removeAt", function () {
  it("removes items from list", function () {
    const lst = new LL([5, 10, 15, 20]);

    expect(lst.length).toBe(4);
    expect(lst.removeAt(2)).toBe(15);
    expect(lst.length).toBe(3);

    expect(lst.removeAt(0)).toBe(5);
    expect(lst.length).toBe(2);

    expect(lst.removeAt(1)).toBe(20);
    expect(lst.length).toBe(1);
  });

  it("removes from 1-item list", function () {
    const lst = new LL([1]);

    lst.removeAt(0);
    expect(lst.length).toBe(0);
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
  });

  it("throws error when out of range", function () {
    const lst = new LL([5]);

    expect(() => lst.removeAt(-1)).toThrow(Error);
    expect(() => lst.removeAt(1)).toThrow(Error);
  });
});


describe("toArray", function () {
  it("returns array of vals", function () {
    const lst = new LL<string>(["a", "b"]);
    expect(lst.toArray()).toEqual(["a", "b"]);
  });
});
