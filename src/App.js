import { Switch, Route } from "react-router-dom";
import NavPage from "./pages/NavPage";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import TodosPage from "./pages/TodosPage";
import SamplePage from "./pages/SamplePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <NavPage />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={CounterPage} path="/count" />
        <Route component={TodosPage} path="/todos" />
        <Route component={SamplePage} path="/sample" />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </>
  );
};

export default App;
