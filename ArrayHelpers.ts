import { ObjectHelpers } from './ObjectHelpers';

export abstract class ArrayHelpers {
  /**
   * Verify if specific element exist
   */
  public static Contains(element: any, arr: any[]): boolean {
    let result: boolean = arr.filter((a) => {
      return ObjectHelpers.Equals(a, element);
    }).length ? true : false;

    return result;
  }

  /**
   * Find all occurrences of a element
   */
  public static Find(element: any, arr: any[]): any[] {
    let result: any[] = arr.filter((a) => {
      return JSON.stringify(a) === JSON.stringify(element);
    })

    return result;
  }

  /**
   * Remove an specific item
   */
  public static Remove(element: any, arr: any[]): void {
    let index: number = this.IndexOf(element, arr);

    arr.splice(index, 1);
  }

  /**
   * IndexOf a element
   */
  public static IndexOf(element: any, arr: any[]): number {
    for(let i = 0; i < arr.length; i++) {
      if(JSON.stringify(arr[i]) === JSON.stringify(element)) return i;
    }

    return -1;
  }
}