import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />N
        <LoadingBar height={3} color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key='Entertainment' pageSize={pageSize} country="in" category="Entertainment" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key='Health' pageSize={pageSize} country="in" category="Health" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key='Sports' pageSize={pageSize} country="in" category="Sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key='Technology' pageSize={pageSize} country="in" category="Technology" /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;