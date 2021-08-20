import { Route, Switch } from 'react-router';
import EmailSent from './components/Authentication/EmailSent';
import Error from './components/Authentication/Error';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Login from './components/Authentication/Login';
import NewPassword from './components/Authentication/NewPassword';
import Signup from './components/Authentication/Signup';
import Success from './components/Authentication/Success';
import NotFound from './components/NotFound';
import Splash from './components/Splash';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/new-password" component={NewPassword} exact />
      <Route path="/new-password/success" component={Success} />
      <Route path="/new-password/error" component={Error} />
      <Route path="/email-sent" component={EmailSent} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
