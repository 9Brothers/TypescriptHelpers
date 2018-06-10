namespace TS.Helpers {

  export abstract class Array {
    /**
     * Verify if specific element exist
     */
    public static Contains(element: any, arr: any[]): boolean {
      let result: boolean = arr.filter((a) => {
        return Obj.Equals(a, element);
      }).length ? true : false;
  
      return result;
    }
  
    /**
     * Find all occurrences of a element
     */
    public static Find(element: any, arr: any[]): any[] {
      let result: any[] = arr.filter((a) => {
        return Obj.Equals(a, element);
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
        if(Obj.Equals(arr[i], element)) return i;
      }
  
      return -1;
    }
  }

}

