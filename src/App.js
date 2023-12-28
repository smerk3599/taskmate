import { useState } from "react";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { TaskList } from "./components/TaskList.js";
import { AddTask } from "./components/AddTask.js";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    // { id: 5271, name: "Have Lunch", completed: true },
    //{ id: 7825, name: "Build Software", completed: false },
    //{ id: 8391, name: "Smile", completed: false },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
