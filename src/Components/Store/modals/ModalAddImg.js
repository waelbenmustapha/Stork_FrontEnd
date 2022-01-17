import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function ModalAddImg(props) {
    return (
        <Modal
        size="lg"
        show={props.showimg}
        onHide={() => {
          props.setShowimg(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD IMAGE</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: 15 }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control
              value={props.imgtoadd}
              onChange={(e) => props.setimgtoadd(e.target.value)}
              type="text"
              placeholder="Enter image url"
            />
          </Form.Group>

       {props.imgedit?<Button
            onClick={(e) => {
              e.preventDefault();
              let newarr = props.elements;
              const objIndex = newarr.findIndex(
                (obj) => obj.id === props.idtoedit);
              newarr[objIndex].url = props.imgtoadd;
              props.setelements([...newarr]);
              props.setShowimg(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            edit
          </Button>: <Button
            onClick={(e) => {
              e.preventDefault();
              props.setid(props.id + 1);
              props.setelements([
                ...props.elements,
                { id: props.id, type: "image", url: props.imgtoadd },
              ]);
              props.setShowimg(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>}
        </Form>
      </Modal>
    )
}

export default ModalAddImg
