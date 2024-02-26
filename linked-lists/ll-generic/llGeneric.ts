/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * LLNode: node for a singly-linked list of numbers.
 *
 * - val
 * - next: next LLNode or null
 */

class LLNode<T> {
  val: T;
  next: LLNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LL<T> {
  head: LLNode<T> | null;
  tail: LLNode<T> | null;
  length: number;

  constructor(vals: T[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /** push(val): add new value to end of list. */

  push(val: T): void {
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: T): void {
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): T {
    return "todo" as T;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): T {
    return "todo" as T;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): T {
    return "todo" as T;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: T): void {
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: T): void {
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): T {
    return "todo" as T;
  }


  /** toArray (useful for tests!) */

  toArray(): T[] {
    return [];
  }
}

// as a convenience for students who may not be familiar with the
// syntax to use the generic LL<T> class, here are pre-made versions
// for strings and numbers:

class LLStr extends LL<string> {}

class LLNum extends LL<number> {}

class LLNodeStr extends LLNode<string> {}

class LLNodeNum extends LLNode<number> {}

export {
  IndexError,
  LL,
  LLStr,
  LLNum,
  LLNodeStr,
  LLNodeNum,
  LLNode,
};
