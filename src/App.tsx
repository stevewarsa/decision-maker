import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import DecisionSetup from './DecisionSetup';
import MakeDecision from './MakeDecision';

const App = () => {
  const [key, setKey] = useState<string>('setup');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k as string)}
      className="mb-3"
    >
      <Tab eventKey="setup" title="Setup">
        <DecisionSetup />
      </Tab>
      <Tab eventKey="decide" title="Make Decision">
        <MakeDecision />
      </Tab>
    </Tabs>
  );
};

export default App;
