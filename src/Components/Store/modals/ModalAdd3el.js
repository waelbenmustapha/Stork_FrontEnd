import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function ModalAdd3el(props) {
  return (
    <Modal
      size="lg"
      show={props.show3el}
      onHide={() => {
        props.setShow3el(false);
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
        <Form.Group className="mb-3">
          <Form.Select
            value={props.el3}
            onChange={(e) => {
              props.setel3(e.target.value);
            }}
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            {props.itemslist.map((val) => (
              <option value={val.id}>{val.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.setid(props.id + 1);

            props.setelements([
              ...props.elements,
              {
                id: props.id,
                type: "3el",
                el: [props.el1, props.el2, props.el3],
              },
            ]);
            props.setShow3el(false);
          }}
          style={{ marginTop: 25 }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalAdd3el;
