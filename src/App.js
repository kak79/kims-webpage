import { NavBar } from './component/nav';
import Home from './component/home';
import About from './component/about';
import { BlogContainer } from './component/blog_container/blogContainer';
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
      <Route exact path="/" exact component={Home} />
      <Switch>
        <Route path="/About" exact component={About} />
        <Route path="/blogs" component={(routeInfo) => <BlogContainer routeData={routeInfo} />} />
        {/* <Route path="/Portfolio" exact component={Portfolio} /> */}
        {/* <Route render={() => <h1>404: page not found</h1>} />  */}
      </Switch>
    </main>




  );
}

export default App;
