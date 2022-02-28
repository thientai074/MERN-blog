import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from './pages/home/Home';
import ProtectedRoute from "./components/routing/ProtectedRoute";
import Landing from './components/landing/Landing';
import AuthContextProvider from "./contexts/authContext/AuthContext";
import PostContextProvider from "./contexts/postContext/PostContext";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ExampleSinglePost from "./pages/ExampleSinglePost/ExampleSinglePost";


function App() {
 

  return (
    
    <AuthContextProvider >
      <PostContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/register'>
                <Register />          
            </Route> 
            <Route exact path='/login'>
              <Login />
            </Route>
            <ProtectedRoute exact path='/home' component={Home} />  
            <ProtectedRoute exact path='/write' component={Write} />
            <ProtectedRoute exact path='/post/:postId' component={SinglePost} />  
            <ProtectedRoute exact path='/exampleSinglePost' component={ExampleSinglePost} />   
          </Switch>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
