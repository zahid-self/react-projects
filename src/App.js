import Counter from "./components/Counter";
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <Provider store={store}>
      <HooksCounter/>
    </Provider>
  );
}

export default App;
