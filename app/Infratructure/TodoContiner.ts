import { container } from "tsyringe";
import { TodoRepositoryToken } from "@/Domain/TodoRepositoryType";
import { TodoRepositoryMock } from "./TodoRepositoryMock";

container.register(TodoRepositoryToken, {
    useClass: TodoRepositoryMock,
});