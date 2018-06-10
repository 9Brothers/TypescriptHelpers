import { HelperObject } from "./HelperObject";

export class HelperArray<T> {
  /**
   * Verify if specific element exist
   */
  public Contains(element: T, arr: T[]): boolean {
    let result: boolean = arr.filter((a) => {
      return HelperObject.Equals(a, element);
    }).length ? true : false;

    return result;
  }

  /**
   * Find all occurrences of a element
   */
  public Find(element: T, arr: T[]): T[] {
    let result: T[] = arr.filter((a) => {
      return HelperObject.Equals(a, element);
    })

    return result;
  }

  /**
   * Remove an specific item
   */
  public Remove(element: T, arr: T[]): void {
    let index: number = this.IndexOf(element, arr);

    arr.splice(index, 1);
  }

  /**
   * IndexOf a element
   */
  public IndexOf(element: T, arr: T[]): number {
    for (let i = 0; i < arr.length; i++) {
      if (HelperObject.Equals(arr[i], element)) return i;
    }

    return -1;
  }
}



