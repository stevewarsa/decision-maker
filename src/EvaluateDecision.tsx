import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const EvaluateDecision = () => {
    const [optionNm, setOptionNm] = useState<string>("");
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        console.log("EvaluateDecision.useEffect[options] - here are the options:", options);
    }, [options]);

    const addOption = (evt: any) => {
        console.log('EvaluateDecision.addOption - evt:', evt);
        setOptions((prev) => {
          const newOptions = [...prev];
          newOptions.push(optionNm);
          return newOptions;
        });
        setOptionNm('');
      };
    
    return (
        <Container>
            <h2 className="mb-4">Evaluate Decision</h2>
            <Row className="mb-3">
                <Col xs={10}>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Option Name"
                        value={optionNm}
                        onChange={(evt: any) => setOptionNm(evt.target.value)}
                    />
                </Col>
                <Col xs={2}>
                    <Button
                        variant="primary"
                        className="mr-5"
                        onClick={addOption}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default EvaluateDecision;