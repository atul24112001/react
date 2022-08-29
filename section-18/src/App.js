import React from 'react';
import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from 'react-redux';

function App() {
  const IsLogedIn = useSelector(state => state.auth.isLoged)
  return (
    <React.Fragment>
      <Header />
      {!IsLogedIn && <Auth />}
      {IsLogedIn && <UserProfile />}
      {IsLogedIn && <Counter />}
    </React.Fragment>
  );
}

export default App;