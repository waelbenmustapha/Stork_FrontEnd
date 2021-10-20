import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import axios from "axios";
import "react-slideshow-image/dist/styles.css";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faGripHorizontal,
  faImage,
  faImages,
  faTextHeight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalAddImg from "./modals/ModalAddImg";
import ModalAddTxt from "./modals/ModalAddTxt";
import ModalAddSlide from "./modals/ModalAddSlide";
import ModalAdd3el from "./modals/ModalAdd3el";
import ModalAdd2el from "./modals/ModalAdd2el";
function StoreHomePage() {
  const [showtxt, setShowtxt] = useState(false);
  const [showimg, setShowimg] = useState(false);
  const [show2el, setShow2el] = useState(false);
  const [showaddslide, setShowaddslide] = useState(false);
  const [slideimgs, setslideimgs] = useState([]);
  const [txtedit, settxtedit] = useState(false);
  const [imgedit, setimgedit] = useState(false);
  const [slideedit, setslideedit] = useState(false);
  const [el2edit, set2eledit] = useState(false);
  const [idtoedit, setidtoedit] = useState();
  const [el3edit, set3eledit] = useState(false);
  const [id, setid] = useState(1);
  const [show3el, setShow3el] = useState(false);
  const [txttoadd, settxttoadd] = useState("");
  const [itemslist, setitemlist] = useState([]);
  const [imgtoadd, setimgtoadd] = useState("");
  const [el1, setel1] = useState("");
  const [el2, setel2] = useState("");
  const [el3, setel3] = useState("");
  const [elements, setelements] = useState([
    {
      id: 0,
      type: "image",
      url: "https://www.royalnutcompany.com.au/cms_images/11151_27-05-2020_5967.jpg",
    },
  ]);

  function getelements() {
    axios.get("http://localhost:5000/items/getitems").then((res) => {
      setitemlist(res.data);
      console.log(res.data);
    });
  }
  function arraymove(arr, fromIndex, toIndex) {
    console.log(arr);
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    console.log(arr);

    setelements([...arr]);
  }

  useEffect(() => {
    getelements();
  }, []);

  return (
    <div>
      <SideNav
        style={{ position: "fixed", backgroundColor: "#f68b1e" }}
        onSelect={(selected) => {
          switch (selected) {
            case "addtxt":
              setShowtxt(true);
              settxtedit(false);
              break;
            case "addimg":
              setShowimg(true);
              setimgedit(false);

              break;
            case "2el":
              setShow2el(true);
              set2eledit(false);

              break;
            case "3el":
              setShow3el(true);
              set3eledit(false);

              break;
            case "addslide":
              setShowaddslide(true);
              setslideedit(false);

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
          <ModalAddTxt
            id={id}
            setid={setid}
            setelements={setelements}
            elements={elements}
            settxttoadd={settxttoadd}
            txttoadd={txttoadd}
            showtxt={showtxt}
            txtedit={txtedit}
            idtoedit={idtoedit}
            setShowtxt={setShowtxt}
          />
          <ModalAddImg
            id={id}
            setid={setid}
            setelements={setelements}
            elements={elements}
            setimgtoadd={setimgtoadd}
            imgtoadd={imgtoadd}
            imgedit={imgedit}
            showimg={showimg}
            idtoedit={idtoedit}
            setShowimg={setShowimg}
          />
          <ModalAddSlide
            id={id}
            setid={setid}
            setelements={setelements}
            elements={elements}
            slideedit={slideedit}
            idtoedit={idtoedit}
            showaddslide={showaddslide}
            setShowaddslide={setShowaddslide}
            setslideimgs={setslideimgs}
            slideimgs={slideimgs}
            imgtoadd={imgtoadd}
            setimgtoadd={setimgtoadd}
          />
          <ModalAdd3el
            id={id}
            setid={setid}
            idtoedit={idtoedit}
            el3edit={el3edit}
            setelements={setelements}
            elements={elements}
            show3el={show3el}
            setShow3el={setShow3el}
            el1={el1}
            setel1={setel1}
            itemslist={itemslist}
            el2={el2}
            setel2={setel2}
            el3={el3}
            setel3={setel3}
          />
          <ModalAdd2el
            setid={setid}
            id={id}
            el2edit={el2edit}
            idtoedit={idtoedit}
            setelements={setelements}
            elements={elements}
            show2el={show2el}
            setShow2el={setShow2el}
            el1={el1}
            setel1={setel1}
            itemslist={itemslist}
            el2={el2}
            setel2={setel2}
          />
          {elements.map((el, index) =>
            el.type === "text" ? (
              <div
                style={{
                  margin:35,

                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    left: 15,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      arraymove(elements, index, index - 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowUp}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      arraymove(elements, index, index + 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowDown}
                  />
                </div>
                <h2 style={{ margin: 20 }}>{el.value}</h2>
                <div
                  style={{
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      settxtedit(true);
                      setShowtxt(true);
                      setidtoedit(el.id);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faEdit}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      console.log(el.id);
                      let newarr = elements;
                      const objIndex = newarr.findIndex(
                        (obj) => obj.id === el.id
                      );
                      newarr.splice(objIndex, 1);
                      setelements([...newarr]);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faTrashAlt}
                  />
                </div>
              </div>
            ) : el.type === "2el" ? (
              <div
                style={{
                  margin: 25,
                  display: "flex",
                  position: "relative",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    left: 15,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      arraymove(elements, index, index - 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowUp}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      arraymove(elements, index, index + 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowDown}
                  />
                </div>
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
                <div
                  style={{
                    right: 15,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      set2eledit(true);
                      setShow2el(true);
                      setidtoedit(el.id);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faEdit}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      console.log(el.id);
                      let newarr = elements;
                      const objIndex = newarr.findIndex(
                        (obj) => obj.id === el.id
                      );
                      newarr.splice(objIndex, 1);
                      setelements([...newarr]);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faTrashAlt}
                  />
                </div>
              </div>
            ) : el.type === "slideshow" ? (
              <div
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    left: 15,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      arraymove(elements, index, index - 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowUp}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      arraymove(elements, index, index + 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowDown}
                  />
                </div>
                <Slide>
                  {el.img.map((slideImage, index) => (
                    <div>
                      <img
                        alt="slide img"
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
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      setslideedit(true);
                      setShowaddslide(true);
                      setidtoedit(el.id);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faEdit}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      console.log(el.id);
                      let newarr = elements;
                      const objIndex = newarr.findIndex(
                        (obj) => obj.id === el.id
                      );
                      newarr.splice(objIndex, 1);
                      setelements([...newarr]);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faTrashAlt}
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
                <div
                  style={{
                    left: 15,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      arraymove(elements, index, index - 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowUp}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      arraymove(elements, index, index + 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowDown}
                  />
                </div>{" "}
                <img
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  alt="img"
                  src={el.url}
                />
                <div
                  style={{
                    right: 15,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      setimgedit(true);
                      setShowimg(true);
                      setidtoedit(el.id);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faEdit}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      console.log(el.id);
                      let newarr = elements;
                      const objIndex = newarr.findIndex(
                        (obj) => obj.id === el.id
                      );
                      newarr.splice(objIndex, 1);
                      setelements([...newarr]);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faTrashAlt}
                  />
                </div>
              </div>
            ) : el.type === "3el" ? (
              <div
                style={{
                  margin: 25,
                  display: "flex",
                  position: "relative",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    left: 15,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      arraymove(elements, index, index - 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowUp}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      arraymove(elements, index, index + 1);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faArrowDown}
                  />
                </div>
                {el.el.map((val) => {
                  const found = itemslist.find((x) => x.id === parseInt(val));
                  return (
                    <div className="test">
                      <img
                        alt="item"
                        height="160"
                        width="200"

                        style={{maxWidth:'100%',maxHeight:'100%'}}
                        src={found.image}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
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

                <div
                  style={{
                    right: 15,
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => {
                      set3eledit(true);
                      setShow3el(true);
                      console.log("hii");
                      setidtoedit(el.id);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faEdit}
                    style={{ margin: 10 }}
                  />
                  <FontAwesomeIcon
                    style={{ margin: 10 }}
                    onClick={() => {
                      console.log(el.id);
                      let newarr = elements;
                      const objIndex = newarr.findIndex(
                        (obj) => obj.id === el.id
                      );
                      newarr.splice(objIndex, 1);
                      setelements([...newarr]);
                    }}
                    className="btnicon"
                    size="1x"
                    icon={faTrashAlt}
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
