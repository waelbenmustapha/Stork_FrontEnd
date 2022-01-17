import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function ModalAdd2el(props) {
    return (
        <Modal
        size="lg"
        show={props.show2el}
        onHide={() => {
            props.setShow2el(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add 3 items</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: 15 }}>
          <Form.Group className="mb-3">
            <Form.Select
              value={props.el1}
              onChange={(e) => {
                props.setel1(e.target.value);
              }}
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              {props.itemslist.map((val) => (
                <option value={val.id}>{val.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select
              value={props.el2}
              onChange={(e) => {
                props.setel2(e.target.value);
              }}
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              {props.itemslist.map((val) => (
                <option value={val.id}>{val.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

        {props.el2edit?<Button
            onClick={(e) => {
              e.preventDefault();
              let newarr = props.elements;
              const objIndex = newarr.findIndex(
                (obj) => obj.id === props.idtoedit);
                console.log('objIndex');

                console.log(objIndex);
                newarr[objIndex].el = [props.el1,props.el2];
                props.setelements([...newarr]);
              props.setShow2el(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Edit
          </Button>:<Button
            onClick={(e) => {
              e.preventDefault();
              props.setid(props.id + 1);

              props.setelements([
                ...props.elements,
                { id: props.id, type: "2el", el: [props.el1, props.el2] },
              ]);
              props.setShow2el(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>}
        </Form>
        <Modal.Footer></Modal.Footer>
      </Modal>
    )
}

export default ModalAdd2el
