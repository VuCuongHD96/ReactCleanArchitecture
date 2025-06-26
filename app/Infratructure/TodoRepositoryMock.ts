import { TodoItem } from "../Domain/TodoItem";
import { TodoRepositoryType } from "../Domain/TodoRepositoryType";

export class TodoRepositoryMock implements TodoRepositoryType {

    getTodoList(): TodoItem[] {
        const todoList: TodoItem[] = [
            new TodoItem('1', 'Learn React'),
            new TodoItem('2', 'Learn TypeScript'),
            new TodoItem('3', 'Build a Todo App')
        ]
        return todoList;
    }
}