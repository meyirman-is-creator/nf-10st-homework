import './App.css';
import HomeComponent from './components/HomeComponent';
import SideMenu from './components/sideMenuComponent';

function App() {
  return (
    <div className="App d-flex mx-5" >
      <SideMenu/>
      <div className='vertical-divider'></div>
      <HomeComponent/>
      <div className='vertical-divider'></div>

    </div>
  );
}

export default App;
