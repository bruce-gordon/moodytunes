import { useState, useEffect } from 'react';

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

export const useLocalStorage = <T,>
(key: string, initialValue?: T): ReturnType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
       if (!initialValue) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : console.log('poop')
       }
    // if (!initialValue) return;
    // try {
    //   const value = localStorage.getItem(key);
    //   return value ? JSON.parse(value) : console.log('poop')
    // } 
    // catch (err) {
    //   return initialValue;
    // }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
        
      } 
      catch (err) {
        console.log(err);
      }
    }
  }, [state, key]);
  return [state, setState];
};



// interface IStorage {
//   getItem(key: string): string | null;
//   setItem(key: string, value: string): void;
//   removeItem(key: string): void;
// }

// export default abstract class Storage<T extends string> {
//   private readonly storage: IStorage;

//   public constructor(getStorage = (): IStorage => window.localStorage) {
//     this.storage = getStorage();
//   }

//   protected get(key: T): string | null {
//     return this.storage.getItem(key);
//   }

//   protected set(key: T, value: string): void {
//     this.storage.setItem(key, value);
//   }

//   protected clearItem(key: T): void {
//     this.storage.removeItem(key);
//   }

//   protected clearItems(keys: T[]): void {
//     keys.forEach((key) => this.clearItem(key));
//   }
// }