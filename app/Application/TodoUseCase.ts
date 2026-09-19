import { TodoRepositoryType, TodoRepositoryToken } from "@/Domain/TodoRepositoryType";
import { container } from "tsyringe";

export type TodoUseCaseType = TodoRepositoryType;

export class TodoUseCase implements TodoUseCaseType {
    
    todoRepository = container.resolve<TodoRepositoryType>(TodoRepositoryToken);

    getTodoList() {
        return this.todoRepository.getTodoList();
    }
}