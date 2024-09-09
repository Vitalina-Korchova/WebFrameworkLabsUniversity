export class Library<T> {
    private items: T[]=[];

    addItem(item: T): void {
        this.items.push(item);
    }


    getAllItems(): T[] {
        return this.items;
    }

    findItem(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }

    removeItem(predicate: (item: T) => boolean): void {
        this.items = this.items.filter(item => !predicate(item));
    }

    clear(): void {
        this.items.length = 0; // Очищення масиву
    }
}
