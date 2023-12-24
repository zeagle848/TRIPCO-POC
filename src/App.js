import './App.css';
import { PersonalDetailsModal } from './components/personal_info_modal/modal_container';
import { HeaderBar } from './components/header';
import { PropertyContainer } from './components/body/property/property_container';

export function App() {

  return (
    <div >
      <div className='modal-wrapper'>
        <PersonalDetailsModal/>
      </div>
      <div className='app-body'>
        <HeaderBar/>
        <PropertyContainer/>
      </div>
    </div>
  );
}

export default App;
