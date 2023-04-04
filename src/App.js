import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Layout from './components/layout';
import RouteConfig from './routes';

function App() {
  return (
     <ParallaxProvider>
    <RouteConfig />
    </ParallaxProvider>
  );
}

export default App;
