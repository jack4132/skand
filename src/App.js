import React,{Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard.component';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';

const store = Store();
class App extends Component {
  render() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
      </Provider>
  );
  }
}

export default App;
