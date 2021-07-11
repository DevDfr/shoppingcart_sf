import React from 'react'
import generateStore from './redux/store'
import { Provider } from 'react-redux' 
import './App.css';
import HomeComponent from './components/HomeComponent'

function App() {

  const store = generateStore()

  return (
    <div className="App">

      <Provider store={store}>
        <HomeComponent />
      </Provider>

    </div>
  );
}

export default App;
