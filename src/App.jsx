
import './App.css'
import Counter from './components/Counter/Counter'
import DynamicCounter from './components/DynamicCounter/DynamicCounter'
import { Provider } from 'react-redux'
import { store } from './redux/store'




function App() {
  return (
    <Provider store={store}>
      <Counter />
      <DynamicCounter />
    </Provider>

  )
}

export default App
