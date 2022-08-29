import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './components/Store/auth-context';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const context = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!context.isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        <Route path='/profile'>
          {context.isLoggedIn && <UserProfile />}
          {!context.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path="*">
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
