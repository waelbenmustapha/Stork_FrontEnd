import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function ModalAddSlide(props) {
    return (
        <Modal
        size="lg"
        show={props.showaddslide}
        onHide={() => {
          props.setShowaddslide(false);
        }}
        >
        <Modal.Header closeButton>
          <Modal.Title>ADD slides</Modal.Title>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {props.slideimgs.map((el) => (
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="slide"
                src={el}
              />
            ))}
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              props.setslideimgs([...props.slideimgs, props.imgtoadd]);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Add slide image
          </Button>
          {props.slideedit?<Button
            onClick={(e) => {
              e.preventDefault();
        
              let newarr = props.elements;
                  const objIndex = newarr.findIndex(
                    (obj) => obj.id === props.idtoedit);
                  newarr[objIndex].img = props.slideimgs;
                  props.setelements([...newarr]);
              props.setslideimgs([]);
              props.setShowaddslide(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Edit slide
          </Button>: <Button
            onClick={(e) => {
              e.preventDefault();
              props.setid(props.id + 1);
        
              props.setelements([
                ...props.elements,
                { id: props.id, type: "slideshow", img: props.slideimgs },
              ]);
              props.setslideimgs([]);
              props.setShowaddslide(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Submit slide
          </Button>}
        </Form>
        </Modal>
    )
}

export default ModalAddSlide
