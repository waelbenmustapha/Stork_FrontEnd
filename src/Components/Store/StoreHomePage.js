import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import axios from "axios";
import "react-slideshow-image/dist/styles.css";
import {
  faEdit,
  faGripHorizontal,
  faImage,
  faImages,
  faTextHeight,
} from "@fortawesome/free-solid-svg-icons";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
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
  const [itemslist, setitemlist] = useState([
    { id: "1", name: "first item" },
    { id: "2", name: "second item" },
    { id: "3", name: "third item" },
  ]);
  const [imgtoadd, setimgtoadd] = useState("");
  const [el1, setel1] = useState("");
  const [el2, setel2] = useState("");
  const [el3, setel3] = useState("");
  const [elements, setelements] = useState([{id:1,type:'image',url:'https://www.royalnutcompany.com.au/cms_images/11151_27-05-2020_5967.jpg'}]);

  function getelements() {
    axios.get("http://localhost:5000/items/getitems").then((res) => {
      setitemlist(res.data);
      console.log(res.data);
    });
  }

  useEffect(() => {
    getelements();
  }, []);

  return (
    <div>
      <SideNav
        style={{ position: "fixed" }}
        onSelect={(selected) => {
          switch (selected) {
            case "addtxt":
              setShowtxt(true);
              break;
            case "addimg":
              setShowimg(true);
              break;
            case "2el":
              setShow2el(true);
              break;
            case "3el":
              setShow3el(true);
              break;
            case "addslide":
              setShowaddslide(true);
              break;
            default:
            // code block
          }
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="addtxt">
            <NavIcon>
              <FontAwesomeIcon
                size="lg"
                className="btnicon"
                icon={faTextHeight}
              />
            </NavIcon>
            <NavText>Add Text</NavText>
          </NavItem>
          <NavItem eventKey="addimg">
            <NavIcon>
              <FontAwesomeIcon size="lg" className="btnicon" icon={faImage} />
            </NavIcon>
            <NavText>Add Image</NavText>
          </NavItem>
          <NavItem eventKey="items">
            <NavIcon>
              <FontAwesomeIcon
                size="lg"
                className="btnicon"
                icon={faGripHorizontal}
              />
            </NavIcon>
            <NavText>Add items</NavText>
            <NavItem eventKey="2el">
              <NavText>Add 2 items </NavText>
            </NavItem>
            <NavItem eventKey="3el">
              <NavText>Add 3 items </NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="addslide">
            <NavIcon>
              <FontAwesomeIcon size="lg" className="btnicon" icon={faImages} />
            </NavIcon>
            <NavText>Add Slide</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Store Name</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Store Home</Nav.Link>
              <Nav.Link href="#features">Products</Nav.Link>
              <Nav.Link href="#pricing">sale items</Nav.Link>
              <Nav.Link href="#pricing">top selling</Nav.Link>
              <Nav.Link href="#pricing">feedbacks</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div
          style={{
            minHeight: 600,
            textAlign: "center",
            padding: 50,
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
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {slideimgs.map((el) => (
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
                <Form.Select
                  value={el1}
                  onChange={(e) => {
                    setel1(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Open this select menu</option>
                  {itemslist.map((val) => (
                    <option value={val.id}>{val.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select
                  value={el2}
                  onChange={(e) => {
                    setel2(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Open this select menu</option>
                  {itemslist.map((val) => (
                    <option value={val.id}>{val.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select
                  value={el3}
                  onChange={(e) => {
                    setel3(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Open this select menu</option>
                  {itemslist.map((val) => (
                    <option value={val.id}>{val.name}</option>
                  ))}
                </Form.Select>
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
                <Form.Select
                  value={el1}
                  onChange={(e) => {
                    setel1(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Open this select menu</option>
                  {itemslist.map((val) => (
                    <option value={val.id}>{val.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select
                  value={el2}
                  onChange={(e) => {
                    setel2(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option>Open this select menu</option>
                  {itemslist.map((val) => (
                    <option value={val.id}>{val.name}</option>
                  ))}
                </Form.Select>
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
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ margin: 20 }}>{el.value}</h2>
                <div style={{ right: 0, position: "absolute" }}>
                  <FontAwesomeIcon
                    onClick={() => {
                      console.log(el.id);
                    }}
                    className="btnicon"
                    size="2x"
                    icon={faEdit}
                  />
                </div>
              </div>
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
                {el.el.map((val) => {
                  const found = itemslist.find((x) => x.id === parseInt(val));
                  return (
                    <div>
                      <img
                        style={{
                          border: "solid 2px rgb(219, 181, 128)",
                          borderRadius: 8,
                        }}
                        alt="item"
                        height="250"
                        width="250"
                        src={found.image}
                      />
                      <p
                        style={{
                          margin: 10,
                          fontSize: 16,
                          fontWeight: "400",
                          textAlign: "left",
                          opacity: 0.75,
                        }}
                      >
                        {found.name}
                      </p>
                      <p
                        style={{
                          margin: 10,
                          fontSize: 19,
                          fontWeight: "500",
                          opacity: 0.87,
                          textAlign: "left",
                        }}
                      >
                        {found.price} TND
                      </p>
                    </div>
                  );
                })}
                <div style={{ right: 15, position: "absolute" }}>
                  <FontAwesomeIcon
                    onClick={() => {
                      console.log(el.id);
                    }}
                    className="btnicon"
                    size="2x"
                    icon={faEdit}
                  />
                </div>
              </div>
            ) : el.type === "slideshow" ? (
              <div
                style={{
                  position: "relative",
                }}
              >
                <Slide>
                  {el.img.map((slideImage, index) => (
                    <div>
                      <img
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        src={slideImage}
                      />
                    </div>
                  ))}
                </Slide>
                <div
                  style={{
                    right: 15,
                    position: "absolute",
                    top: "30%",
                    transform: `translate(50%)`,
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      console.log(el.id);
                    }}
                    className="btnicon"
                    size="2x"
                    icon={faEdit}
                  />
                </div>
              </div>
            ) : el.type === "image" ? (
              <div
                style={{
                  margin: 25,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  position: "relative",
                }}
              >
                <img
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  alt="img"
                  src={el.url}
                />
                <div style={{ right: 15, position: "absolute" }}>
                  <FontAwesomeIcon
                    onClick={() => {
                      console.log(el.id);
                    }}
                    className="btnicon"
                    size="2x"
                    icon={faEdit}
                  />
                </div>
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
                  const found = itemslist.find((x) => x.id === parseInt(val));
                  return (
                    <div className="test">
                      <img
                        alt="item"
                        height="160"
                        width="200"
                        src={found.image}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        {" "}
                        <p
                          style={{
                            margin: 10,
                            fontSize: 16,
                            fontWeight: "400",
                            textAlign: "left",
                            opacity: 0.75,
                          }}
                        >
                          {found.name}
                        </p>
                        <p
                          style={{
                            margin: 10,
                            fontSize: 19,
                            fontWeight: "500",
                            opacity: 0.87,
                            textAlign: "left",
                          }}
                        >
                          {found.price} TND
                        </p>
                      </div>
                    </div>
                  );
                })}

                <div style={{ right: 15, position: "absolute" }}>
                  <FontAwesomeIcon
                    onClick={() => {
                      console.log(el.id);
                    }}
                    className="btnicon"
                    size="2x"
                    icon={faEdit}
                  />
                </div>
              </div>
            ) : null
          )}
         
        </div>
      </div>
      <div className="footer">this is da footer boiii</div>
    </div>
  );
}

export default StoreHomePage;
