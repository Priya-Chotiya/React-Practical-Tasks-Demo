import "./App.css";
import Accordion from "./Accordian/Accordian";
import SearchList from './SearchList/Searchlist';
import {
  Route,
  BrowserRouter,
  Switch,
  NavLink,
  Routes,
} from "react-router-dom";
import DebounceApp from "./Debounce/DebounceApp";
import CallbackHook from "./Todos/CallbackHook";
import MemoHook from "./MemoHook/MemoHook";
import Menubar from "./Menubar/Menubar";
import TodoList from "./TodoList/TodoList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Accordian">Accordion</NavLink>
          </li>
          <li>
            <NavLink to="/Search-List">Search-List</NavLink>
          </li>
          <li>
            <NavLink to="/Debounce-Search">Debounce Search</NavLink>
          </li>
          <li>
            <NavLink to="/Callback-Hook">Callback Example</NavLink>
          </li>
          <li>
            <NavLink to="/Memo-Hook">Memo Example</NavLink>
          </li>
          <li>
            <NavLink to="/Menubar">Menubar</NavLink>
          </li>
          <li>
            <NavLink to="/Todo-List">Todo List</NavLink>
          </li>

        </ul>
        <Routes>
          <Route path="/" />
          <Route path="/Accordian" element={<Accordion />} />
          <Route path="/Search-List" element={<SearchList />} />
          <Route path="/Debounce-Search" element={<DebounceApp />} />
          <Route path="/Callback-Hook" element={<CallbackHook />} />
          <Route path="/Memo-Hook" element={<MemoHook />} />
          <Route path="/Menubar" element={<Menubar />} />
          <Route path="/Todo-List" element={<TodoList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
