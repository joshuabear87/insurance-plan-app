import InsuranceCard from './InsuranceCard';
import './App.css';

const insurancePlans = [
  {
    id: 0,
    name: 'Anthem Blue Cross of CA',
    imagingAuth: 'no',
    surgeryAuth: 'yes'
  },
  {
    id: 1,
    name: 'United Healthcare',
    imagingAuth: 'no',
    surgeryAuth: 'yes'
  },
  {
    id: 2,
    name: 'Blue Shield of CA',
    imagingAuth: 'no',
    surgeryAuth: 'yes'
  },
  {
    id: 3,
    name: 'HealthNet',
    imagingAuth: 'no',
    surgeryAuth: 'yes'
  },
  {
    id: 4,
    name: 'Humana',
    imagingAuth: 'no',
    surgeryAuth: 'yes'
  },
]

function App() {
  return (
    <div className="App">
      <h1 className="bg-secondary text-light d-flex pb-3 justify-content-center rounded-3 m-3">Insurance Companies</h1>
        <div className="bg-secondary d-flex flex-wrap justify-content-center rounded-3 p-3 m-3">
          { insurancePlans.map ( insurance => <InsuranceCard insurance={insurance} />)};
        </div>
    </div>)}

export default App;
