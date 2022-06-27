import Chart from "./components/chart/Chart";
import About from "./components/Aboutus/About"
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Sub from "./components/subscribe/Sub";
import './app.css'
import './app.scss'
import { useState } from 'react';
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
function App() {

  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/about">
            <About open={openMenu} setOpen={setOpenMenu} />
          </Route>
          <div className="app">
            <Navigation open={openMenu} setOpen={setOpenMenu} />
            <Sub open={openMenu} setOpen={setOpenMenu} />
            <Chart open={openMenu} setOpen={setOpenMenu} />
            <Footer open={openMenu} />
          </div>
        </Switch>
      </Router>
    </>
  )
}
export default App;