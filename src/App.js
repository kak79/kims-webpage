import { NavBar } from './component/nav';
import Latest from './component/latest';
import Home from './component/home';
import About from './component/about';
import BlogContainer from './component/blog_container/blogContainer';
import { Switch, 
  Route, 
  // Link, 
  // Redirect, 
  // useLocation, 
  // useParams, 
  // NavLink 
} from "react-router-dom";



function App() {


  return (



  
    <main>
      <NavBar />
      <Route exact path="/" >
        <Home />
      </Route>
      <Switch>
        <Route path="/latest">
          <Latest />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/blogs" component={(routeInfo) => <BlogContainer routeData={routeInfo} />} />
        {/* <Route path="/portfolios" component={(routeInfo) => <PortfolioContainer routeData={routeInfo} />} /> */}
        {/* <Route render={() => <h1>404: page not found</h1>} />  */}
      </Switch>
    </main>




  );
}

export default App;
