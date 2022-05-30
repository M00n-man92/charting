import Chart from "./components/chart/Chart";
import About from "./components/Aboutus/About"
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Sub from "./components/subscribe/Sub";
import './app.css'
function App(){


    return(
        <div className="App">
            <Router>
    <Switch>
      
        <Route exact path="/">
        <Chart />
        </Route>
        <Route path="/about">
            <About/>

        </Route>
        <Route path="/subscribe">
<Sub/>
        </Route>
        
        </Switch>
        </Router>
            

        </div>
    )
}
export default App;