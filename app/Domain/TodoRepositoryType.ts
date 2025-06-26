import { TodoItem } from "./TodoItem";

export const TodoRepositoryToken = Symbol('TodoRepositoryType');

interface TodorepositoryType {

    getTodoList(): TodoItem[];
}