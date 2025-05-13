import { createFileRoute } from "@tanstack/react-router";
import { useReducer, useState } from "react";
type Todo = {
  text: string;
  id: string;
  isComplete: boolean;
  isEdit: boolean;
};

export const Route = createFileRoute("/useReducer")({
  component: UseReducer,
});

function UseReducer() {
  const [text, setText] = useState("");
  const [todos, dispatchTodos] = useReducer(todosReducer, []);

  return (
    <>
      <div className="max-w-[250px] m-auto">
        <input
          className="border"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="border ml-2.5"
          onClick={() => dispatchTodos({ type: "add", payload: { todoText: text } })}
        >
          Add
        </button>

        <ul>
          {todos.map((todo) => {
            return (
              <li className="flex w-full gap-2" key={todo.id}>
                <input
                  type="checkbox"
                  onChange={() => dispatchTodos({ type: "complete", payload: { id: todo.id } })}
                />
                <input
                  className={`grow ${todo.isComplete && "line-through"}`}
                  onChange={(e) => e.target.value}
                  type="text"
                  value={todo.text}
                  disabled={!todo.isEdit}
                />
                <button
                  className="border p-1"
                  onClick={() => dispatchTodos({ type: "delete", payload: { id: todo.id } })}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

type TodoAddAction = { type: "add"; payload: { todoText: string } };
type TodoDeleteAction = { type: "delete"; payload: { id: string } };
type TodoCompleteAction = { type: "complete"; payload: { id: string } };

export type TodoAction = TodoAddAction | TodoDeleteAction | TodoCompleteAction;

function todosReducer(todos: Array<Todo>, action: TodoAction) {
  switch (action.type) {
    case "add": {
      return [
        {
          text: action.payload.todoText,
          id: crypto.randomUUID(),
          isComplete: false,
          isEdit: false,
        },
        ...todos,
      ];
    }
    case "delete": {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }

    case "complete": {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    }
  }
}
