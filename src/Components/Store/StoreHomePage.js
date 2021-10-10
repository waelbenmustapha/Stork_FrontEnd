import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Modal from "react-bootstrap/Modal";


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
function StoreHomePage() {
  const [showtxt, setShowtxt] = useState(false);
  const [showimg, setShowimg] = useState(false);
  const [show2el, setShow2el] = useState(false);
  const [showaddslide, setShowaddslide] = useState(false);
  const [slideimgs, setslideimgs] = useState([]);
  const [id, setid] = useState(0);
  const [show3el, setShow3el] = useState(false);
  const [txttoadd, settxttoadd] = useState("");
const [itemslist,setitemlist]=useState([{id:"1",name:"first item"},{id:"2",name:"second item"},{id:"3",name:"third item"}])
  const [imgtoadd, setimgtoadd] = useState("");
  const [el1, setel1] = useState("");
  const [el2, setel2] = useState("");
  const [el3, setel3] = useState("");
  /* { type: "text", value: "Ahla bik" },
  { type: "2el", el1: 1, el2: 2 },
  { type: "3el", el1: 1, el2: 2, el3: 3 },
  {
    type: "image",
    url: "https://assets.swappie.com/iphone11violetti-600x600.jpg",
  },
  {
    type: "slideshow",
    img: [
      "https://www.kindpng.com/picc/m/725-7255464_luckily-youngstown-has-an-incredible-resource-for-microscope.png",
      "https://assets.swappie.com/iphone11violetti-600x600.jpg",
      "https://www.hocoaccessories.com/wp-content/uploads/2020/02/fascination-series-protective-case-galaxy-s9-black-600x600.jpg",
    ],
  },
  { type: "text", value: "another text" },*/
  const [elements, setelements] = useState([]);
  return (
    <div
      style={{
        margin: 50,
        padding: 50,
        border: "solid 2px black",
        borderRadius: 25,
        backgroundColor: "#E8E8E8",
      }}
    >
      <Modal
        size="lg"
        show={showtxt}
        onHide={() => {
          setShowtxt(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add text</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: 15 }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control
              value={txttoadd}
              onChange={(e) => settxttoadd(e.target.value)}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setid(id + 1);
              setelements([
                ...elements,
                { id: id, type: "text", value: txttoadd },
              ]);
              setShowtxt(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal>
      <Modal
        size="lg"
        show={showimg}
        onHide={() => {
          setShowimg(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD IMAGE</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: 15 }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control
              value={imgtoadd}
              onChange={(e) => setimgtoadd(e.target.value)}
              type="text"
              placeholder="Enter image url"
            />
          </Form.Group>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setid(id + 1);
              setelements([
                ...elements,
                { id: id, type: "image", url: imgtoadd },
              ]);
              setShowimg(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal>
      <Modal
        size="lg"
        show={showtxt}
        onHide={() => {
          setShowtxt(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add text</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: 15 }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control
              value={txttoadd}
              onChange={(e) => settxttoadd(e.target.value)}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setid(id + 1);

              setelements([
                ...elements,
                { id: id, type: "text", value: txttoadd },
              ]);
              setShowtxt(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal>
      <Modal
        size="lg"
        show={showaddslide}
        onHide={() => {
          setShowaddslide(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD slides</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: 15 }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control
              value={imgtoadd}
              onChange={(e) => setimgtoadd(e.target.value)}
              type="text"
              placeholder="Enter image url"
            />
          </Form.Group>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {slideimgs.map((el) => (
              <img src={el} />
            ))}
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setslideimgs([...slideimgs, imgtoadd]);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Add slide image
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setid(id + 1);

              setelements([
                ...elements,
                { id: id, type: "slideshow", img: slideimgs },
              ]);
              setslideimgs([]);
              setShowaddslide(false);
            }}
            style={{ marginTop: 25 }}
            variant="primary"
            type="submit"
          >
            Submit slide
          </Button>
        </Form>
      </Modal>
      <Modal
        size="lg"
        show={show3el}
        onHide={() => {
          setShow3el(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add 3 items</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: 15 }}>
          <Form.Group className="mb-3">
            <Form.Label>Element 1</Form.Label>
            <Form.Control
              value={el1}
              onChange={(e) => setel1(e.target.value)}
              type="number"
              placeholder="Enter el1"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Element 2</Form.Label>
            <Form.Control
              value={el2}
              onChange={(e) => setel2(e.target.value)}
              placeholder="Enter el2"
              type="number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Element 2</Form.Label>
            <Form.Control
              value={el3}
              onChange={(e) => setel3(e.target.value)}
              type="number"
              placeholder="Enter el 3"
            />
          </Form.Group>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setid(id + 1);

              setelements([
                ...elements,
                { id: id, type: "3el", el: [el1, el2, el3] },
              ]);
              setShow3el(false);
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
      <Modal
        size="lg"
        show={show2el}
        onHide={() => {
          setShow2el(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add 3 items</Modal.Title>
        </Modal.Header>
        <Form style={{ margin: 15 }}>
          <Form.Group className="mb-3">
            <Form.Label>Element 1</Form.Label>
            <Form.Control
              value={el1}
              onChange={(e) => setel1(e.target.value)}
              type="text"
              placeholder="Enter el1"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Element 2</Form.Label>
            <Form.Control
              value={el2}
              onChange={(e) => setel2(e.target.value)}
              placeholder="Enter el2"
              type="text"
            />
          </Form.Group>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setid(id + 1);

              setelements([
                ...elements,
                { id: id, type: "2el", el: [el1, el2] },
              ]);
              setShow2el(false);
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
      {elements.map((el) =>
        el.type === "text" ? (
          <h1>{el.value}</h1>
        ) : el.type === "2el" ? (
          <div
            style={{
              margin: 25,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
           {el.el.map((val) => (
              <h1>{val}</h1>
            ))}
          </div>
        ) : el.type === "slideshow" ? (
          <div
            style={{
              border: "solid 2px white",
              backgroundColor: "white",
              margin: 20,
              borderRadius: 25,
            }}
          >
            <Slide>
              {el.img.map((slideImage, index) => (
                <div
                  style={{
                    backgroundImage: `url(${slideImage})`,
                    height: 300,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              ))}
            </Slide>
          </div>
        ) : el.type === "image" ? (
          <div>
            <img alt="img" src={el.url} />
          </div>
        ) : el.type === "3el" ? (
          <div
            style={{
              margin: 25,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {el.el.map((val) => {
               const found=itemslist.find(x => x.id === val)
               return (
               <div>
              <h1>{found.name}</h1></div>
            )})}
          </div>
        ) : null
      )}
      <button
        onClick={() => {
          setShowtxt(true);
        }}
      >
        Add txt
      </button>
      <button
        onClick={() => {
          setShowimg(true);
        }}
      >
        Add img
      </button>
      <button
        onClick={() => {
          setShow2el(true);
        }}
      >
        Add 2el
      </button>
      <button
        onClick={() => {
          setShow3el(true);
        }}
      >
        Add 3el
      </button>
      <button
        onClick={() => {
          setShowaddslide(true);
        }}
      >
        Add slide
      </button>
      <button onClick={()=>{console.log(parseInt(elements[5].el[0])+parseInt(elements[5].el[1]))}}>hi</button>
    </div>
  );
}

export default StoreHomePage;
