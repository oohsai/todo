/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <h1>{todo.completed == true ? "Completed" : "Mark as Complete"}</h1>
          </div>
        );
      })}
    </div>
  );
}
