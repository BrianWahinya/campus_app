import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './css/custommodal.css'

const CustomModal = (args) => {
    // console.log(args);
    const {btn, head, body, size, modalclass, fullElem} = args;
    const {text, classname} = btn;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  
    return (
      <>
        <a role="button" className={`btnModal ${classname}`} onClick={toggle}>{text}</a>
        <Modal isOpen={modal} toggle={toggle} {...args} size={size || "lg"} className={modalclass || ""}>
          {fullElem || 
            <>
              <ModalHeader toggle={toggle}>{head}</ModalHeader>
              <ModalBody>
                {body}
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{' '} */}
                <Button color="secondary" onClick={toggle} className="btnClose">
                  Close
                </Button>
              </ModalFooter>
            </>
          }          
        </Modal>          
      </>
    );
}

export default CustomModal