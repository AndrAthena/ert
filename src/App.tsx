import { Route, Switch } from 'react-router';
import EmailSent from './components/Authentication/EmailSent';
import Error from './components/Authentication/Error';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Login from './components/Authentication/Login';
import NewPassword from './components/Authentication/NewPassword';
import Signup from './components/Authentication/Signup';
import Success from './components/Authentication/Success';
import Create from './components/CreateTemplate/Create';
import CreateTemplate from './components/CreateTemplate/CreateTemplate';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/new-password" component={NewPassword} exact />
      <Route path="/new-password/success" component={Success} />
      <Route path="/new-password/error" component={Error} />
      <Route path="/email-sent" component={EmailSent} />
      <Route path="/create-template" component={CreateTemplate} exact />
      <Route path="/create-template/create" component={Create} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
