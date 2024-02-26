/** IndexError: raised when index not found. */

import { createRoutesFromElements } from "react-router-dom";

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);

    if(this.head === null) this.head = newNode;

    if(this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);

    if(this.head === null){
      this.head === newNode;
      this.tail === newNode;
    }
    this.unshift(val);
    this.head === newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {

    if(this.head === null){
      throw new IndexError;
    }

    let returnedVal : string | null = null;

    if(this.length === 1){
      returnedVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return returnedVal;
    }

    let current = this.head;

    while (current.next !== null){
      current = current.next
      if (current.next === this.tail){
        returnedVal = this.tail!.val
        this.tail === current;
        current.next === null;
      }
    }

    this.length -= 1;

    return returnedVal!;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    if (this.head === null){
      throw new IndexError;
    }

    let returnedVal : string | null = null;

    if(this.length === 1){
      returnedVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return returnedVal;
    }

    returnedVal = this.head.val;
    this.head = this.head.next;
    this.length -= 1;

    return returnedVal;
  }


  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    return "x";
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    return "x";
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};