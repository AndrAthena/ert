import { Route, Switch } from 'react-router';
import EmailSent from './components/Authentication/EmailSent';
import ForgotPassword from './components/Authentication/ForgotPassword';
import Login from './components/Authentication/Login';
import NewPassword from './components/Authentication/NewPassword';
import Signup from './components/Authentication/Signup';
import Splash from './components/Splash';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/new-password" component={NewPassword} />
      <Route path="/email-sent" component={EmailSent} />
    </Switch>
  );
}

export default App;
