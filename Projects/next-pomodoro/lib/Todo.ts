import { v4 as uuid } from 'uuid'
export class Todo {
    id: string;
    _title: string;
    _description: string;
    _completed: boolean;

    constructor(title: string, description: string) {
        this.id = uuid();
        this._title = title;
        this._description = description;
        this._completed = false;
    }

    get title(): string {
        return this._title;
    }
    get description(): string {
        return this.description;
    }
    get completed(): boolean {
        return this._completed;
    }

    set title(new_title: string) {
        this._title = new_title;
    }
    set description(new_description: string) {
        this.description = new_description;
    }
    set completed(new_completed) {
        this._completed = new_completed;
    }

}