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

    static saveElementState(key: string, html: string): void {
        localStorage.setItem(key, html);
    }

    static loadElementState(key: string): string {
        return localStorage.getItem(key) || '';
    }
}