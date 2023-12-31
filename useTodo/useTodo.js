import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";


const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    dispatch(action);
  }

  const pendingTodosCount = () => todos.filter(todo => !todo.done).length;

  const todoCount = () => todos.length;



  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  }

  const onToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }


  return {
    ...todos,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    pendingTodosCount,
    todoCount,
  }
}