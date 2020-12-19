import "./App.css";
import "jquery";
import "popper.js";
import 'bootstrap/dist/css/bootstrap.css';
import TasList from "./components/task/list/list-container";
import TaskForm from "./components/task/form/form-container";

const App = () => {
  return (
    <div className="container my-3">
      <h1 className="text-center">React TDD</h1>
      <TaskForm />
      <TasList />
    </div>
  );
};
export default App;
