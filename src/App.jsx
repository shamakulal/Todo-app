

import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import Todo from './components/Todo';


function App() {
  //The Provider component comes from the react-redux library,
//its purpose is to make the Redux store available to all components within the app, 
// so they can access state or dispatch actions.
  return (
    <Provider store={store}>
      
     <Todo></Todo>

    </Provider>
  )
}
//All components inside Provider can access the state and dispatch actions.
export default App
