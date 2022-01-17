import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ModalAddTxt(props) {
    return (
        <Modal
            size="lg"
            show={props.showtxt}
            onHide={() => {
              props.setShowtxt(false);
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add text</Modal.Title>
            </Modal.Header>
            <Form style={{ margin: 15 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Text</Form.Label>
                <Form.Control
                  value={props.txttoadd}
                  onChange={(e)=>{props.settxttoadd(e.target.value)}}
                  type="text"
                  placeholder="Enter text"
                />
              </Form.Group>
{props.txtedit? <Button
                onClick={(e) => {
                  e.preventDefault();
                  let newarr = props.elements;
                  const objIndex = newarr.findIndex(
                    (obj) => obj.id === props.idtoedit);
                  newarr[objIndex].value = props.txttoadd;
                  props.setelements([...newarr]);
                  props.setShowtxt(false);
                }}
                style={{ marginTop: 25 }}
                variant="primary"
                type="submit"
              >
                Edit
              </Button>:
              <Button
              onClick={(e) => {
                e.preventDefault();
                props.setid(props.id + 1);
                props.setelements([
                  ...props.elements,
                  { id: props.id, type: "text", value: props.txttoadd },
                ]);
                props.setShowtxt(false);
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

export default ModalAddTxt
