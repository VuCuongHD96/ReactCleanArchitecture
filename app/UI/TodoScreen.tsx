import { TodoUseCase } from "@/Application/TodoUseCase";
import { useEffect } from "react";

export function TodoScreen() {
    useEffect(() => {
        const todoUseCase = new TodoUseCase();
        const todos = todoUseCase.getTodoList();
        console.log("Todos:", todos);
      }, []);
      
    return null;
}