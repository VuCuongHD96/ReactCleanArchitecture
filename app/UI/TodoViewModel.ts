import { TodoUseCase } from "@/Application/TodoUseCase";

class TodoViewModel {

    useCase = new TodoUseCase()

    getTodoList() {
        return this.useCase.getTodoList()
    }
}