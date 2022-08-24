import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Trivia from '../../components/trivia';
import Facts from '../../components/Facts';

function ResultButton(args) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [ result, setResult ] = useState('');
    const correct = args.correct;

    useEffect(()=>{ if(correct === false){
      setResult('Sorry! That is incorrect.')
    } else if (correct === true) {
      setResult('Great! That is correct.')
    }}, []);
    
    return (
    <>
      <Button color="danger" onClick={toggle}>
          Result
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>{ result }</ModalHeader>
        <ModalBody>
            Your answer: { args.answer }
            <br/>
            Correct answer: { args.number }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
              Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
              Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ResultButton;