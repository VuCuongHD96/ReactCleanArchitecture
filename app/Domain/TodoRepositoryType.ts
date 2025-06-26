import { TodoItem } from "./TodoItem";

export const TodoRepositoryToken = Symbol('TodoRepositoryType');

export interface TodoRepositoryType {
    getTodoList(): TodoItem[];
}