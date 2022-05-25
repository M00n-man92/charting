import Chart from "./components/chart/Chart";
import About from "./components/Aboutus/About"
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'

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
        </Switch>
        </Router>
            

        </div>
    )
}
export default App;