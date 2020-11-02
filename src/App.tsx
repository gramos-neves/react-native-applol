import React, {useEffect} from 'react';
import Router from './router';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Router />;
};

export default App;
