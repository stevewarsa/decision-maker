import { useCallback, useMemo, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import {
  ColDef,
  GridReadyEvent,
  ClientSideRowModelModule,
  ModuleRegistry,
} from 'ag-grid-community';
ModuleRegistry.registerModules([ClientSideRowModelModule]);
import { AgGridReact } from 'ag-grid-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { DecisionFactor } from './decision-factor';

const DecisionSetup = () => {
  const [decisionFactors, setDecisionFactors] = useState<DecisionFactor[]>([]);
  const [decisionNm, setDecisionNm] = useState<string>('');
  const [decisionFactorNm, setDecisionFactorNm] = useState<string>('');
  const [decisionWt, setDecisionWt] = useState<number>(-1);

  const [columnDefs] = useState<ColDef[]>([
    { field: 'factorNm' },
    { field: 'factorWt' },
  ]);

  const gridStyle = useMemo(
    () => ({
      flexGrow: 1,
      width: '100%',
      height: '50vh',
    }),
    []
  );

  const onGridReady = useCallback(
    (params: GridReadyEvent) => {
      console.log('onGridReady', params);
    },
    [decisionFactors]
  );

  const addDecisionFactor = () => {
    //console.log('App.addDecisionFactor - evt:', evt);
    setDecisionFactors((prev) => {
      const newFactors = [...prev];
      const newFactor: DecisionFactor = {
        factorNm: decisionFactorNm,
        factorWt: decisionWt,
      };
      newFactors.push(newFactor);
      return newFactors;
    });
    setDecisionFactorNm('');
    setDecisionWt(-1);
  };

  return (
    <Container className="text-center">
      <h2 className="mb-4">Decision Setup</h2>
      <Row className="mb-3">
        <Col xs={12}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Decision Name"
            value={decisionNm}
            onChange={(evt: any) => setDecisionNm(evt.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={8}>
          <Form.Control
            as="textarea"
            rows={3}
            size="lg"
            placeholder="Decision Factor Description"
            value={decisionFactorNm}
            onChange={(evt: any) => setDecisionFactorNm(evt.target.value)}
          />
        </Col>
        <Col xs={2}>
          <Form.Control
            size="sm"
            type="number"
            placeholder="Weight"
            value={decisionWt}
            onChange={(evt: any) => setDecisionWt(parseInt(evt.target.value))}
          />
        </Col>
        <Col xs={2}>
          <Button
            variant="primary"
            className="mr-5"
            onClick={addDecisionFactor}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Col>
      </Row>
      <div style={gridStyle}>
        <AgGridReact<DecisionFactor>
          rowData={decisionFactors}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
        />
      </div>
    </Container>
  );
};
export default DecisionSetup;
