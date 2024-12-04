
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

function App() {

  return (
    <div className="max-w-md bg-zinc-300 mx-auto mt-20 overflow-hidden rounded-lg p-4 flex flex-col justify-center">
    <TodoForm />
    <Todos />
    </div>
  );
}

export default App;