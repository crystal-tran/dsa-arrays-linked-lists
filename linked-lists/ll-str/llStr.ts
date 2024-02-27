/** IndexError: raised when index not found. */

import { createRoutesFromElements } from "react-router-dom";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

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

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }

    // ["b", "c"]

    newNode.next = this.head;
    this.head = newNode;
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
      if (current.next === this.tail){
        returnedVal = this.tail!.val
        this.tail = current;
      }
      current = current!.next!
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
    if(idx < 0 || idx >= this.length){
      throw new IndexError;
    }

    let current = this.head;
    for(let i = 0; i < idx; i++){
      current = current!.next;
    }

    return current!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    if(idx < 0 || idx >= this.length){
      throw new IndexError;
    }

    let current = this.head;
    for(let i = 0; i < idx; i++){
      current = current!.next;
    }

    current!.val = val
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    const newNode = new NodeStr(val);

    if(idx < 0 || idx > this.length){
      throw new IndexError;
    }

    if(idx === 0){
      this.head = newNode;
      if(this.length === 1){
        this.tail = newNode;
        this.length += 1;
      }
    }

    let current = this.head;

    for(let i = 0; i < idx - 1; i++){
      current = current!.next;
    }

    newNode.next = current!.next;
    current!.next = newNode

    if (idx === this.length){
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if(idx < 0 || idx >= this.length){
      throw new IndexError;
    }

    let current = this.head;

    let returnedVal : string | null = null;

    //idx is zero - set head to the next item and return the head
    if (idx === 0){
      returnedVal = current!.val;
      this.head = current!.next
      this.length -= 1;
      return returnedVal;
    }

    //idx is equal to length?  - set the tail to be the previous item
    if (idx === this.length - 1){
      while (current!.next !== this.tail){
        current = current!.next
      }
      returnedVal = this.tail!.val;
      current!.next = null;
      this.tail = current;
      this.length -= 1;
      return returnedVal;

    }

    // [1,2,3,4,7] idx = 1
    for (let i = 0; i < idx - 1; i++){
      current = current!.next;
    }
    returnedVal = current!.next!.val;
    current!.next = current!.next!.next
    this.length -= 1;

    return returnedVal;
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