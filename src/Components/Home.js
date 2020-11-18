import React from 'react'
import {BrowserRouter as  Route, Switch} from 'react-router-dom';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';



function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
                <Content />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  path='/contact'  component={Contact} />
                    <Route  path='/about'  component={About} />
                  </Switch>
                <Footer />
        
         </div>
             
    )
}

export default Home
