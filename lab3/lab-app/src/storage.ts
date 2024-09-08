export class Storage {

    static saveData(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static loadData(key: string): any {
        return JSON.parse(localStorage.getItem(key) || '[]');
    }

    static clearData(key: string): void {
        localStorage.removeItem(key);
    }
}