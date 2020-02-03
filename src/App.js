import React from 'react';
import './App.css';
import User from './Component/User'
import {Provider} from 'react-redux'
import configureStore from "./Stores";
import 'antd/dist/antd.css';
const store = configureStore()

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <User/>
        </Provider>
    </div>
  );
}

export default App;
