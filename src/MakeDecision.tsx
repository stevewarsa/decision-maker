import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from './AppState';

const MakeDecision = () => {
  const templates = useSelector((state: AppState) => state.decisionTemplates);

  return (
    <>
      <h3>Select Decision Template</h3>
      <Form.Select aria-label="Default select example">
        <option>--Select One--</option>
        {templates.map((template) => (
          <option value={template.name}>{template.name}</option>
        ))}
      </Form.Select>
    </>
  );
};

export default MakeDecision;
