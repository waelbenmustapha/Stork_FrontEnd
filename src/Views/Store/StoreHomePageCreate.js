import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { faEye, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, Link } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faGripHorizontal,
  faImage,
  faImages,
  faTextHeight,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import ImageGallery from "react-image-gallery";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

import WidgetAddbottombar from "../../components/store/WidgetAddbottombar";
function StoreHomePageCreate() {
  const [showsidenav, setshowsidenav] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
  const [id, setid] = useState(3);
  const [margleft, setmargleft] = useState(false);
  const [show3el, setShow3el] = useState(false);
  const [txttoadd, settxttoadd] = useState("");
  const [itemslist, setitemlist] = useState([]);
  const [imgtoadd, setimgtoadd] = useState("");
  const [el1, setel1] = useState("");
  const [el2, setel2] = useState("");
  const [loading, setloading] = useState(false);
  const [el3, setel3] = useState("");
  const messagesEndRef = useRef(null);

  let navigate = useNavigate();

  const [elements, setelements] = useState([
    {
      id: 0,
      type: "text",
      value: "Welcome To My Store",
    },
    {
      id: 1,
      type: "image",
      url: "https://i.postimg.cc/ZZz9VDts/kkkk.jpg",
    },

    {
      id: 2,
      type: "slideshow",
      img: [
        {
          original:
            "https://www.tutorialrepublic.com/examples/images/slide1.png",
        },
        {
          original:
            "https://www.tutorialrepublic.com/examples/images/slide2.png",
        },
        {
          original:
            "https://www.tutorialrepublic.com/examples/images/slide3.png",
        },
      ],
    },
  ]);

  function getelements() {
    axios.get("http://localhost:8090/store/get_store_products/1").then((res) => {
      setitemlist(res.data);
      console.log(res.data);
    });
  }
  function uploadimage(files) {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "StorkCloud");
    setloading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dq1i1g9th/image/upload", formData)
      .then((res) => {
        setimgtoadd(res.data.url);
        setloading(false);
        const prv = [...slideimgs, { original: res.data.url }];
        setslideimgs(prv);
    
        console.log(res.data.url);
      });
  }

  function createhomepage() {
    axios.post("http://localhost:8090/store/addstore", {
      name: "store ml react",
      homepage: JSON.stringify(elements),
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
    <div style={{ backgroundColor: "#E8E8E8" }}>
      <div
        className="zaama"
        style={{
          width: "240px",
          boxShadow: "rgba(0, 0, 0, 0.35) 3px 5px 15px",
          height: "100vh",
          overflowY: "scroll",
          backgroundColor: "white",
          position: "fixed",
          zIndex: "15555",
          visibility: showsidenav === true ? "visible" : "hidden",
          transition: "0.5s",
          opacity: showsidenav === true ? "1" : "0",
        }}
      >
        <img
          className="hovercursor"
          onClick={() => {
            setshowsidenav(false);
            setmargleft(false);
            setExpanded(false);
            setShowtxt(false);
            setShowimg(false);
            setShow2el(false);
            setShow3el(false);
            settxtedit(false);
            setimgedit(false);
            set2eledit(false);
            set3eledit(false);
            setslideedit(false);
          }}
          src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png"
          style={{
            margin: "10px 10px 0px 15px",
            height: "25px",
            width: "25px",
            filter:
              "invert(60%) sepia(12%) saturate(4877%) hue-rotate(349deg) brightness(103%) contrast(93%)",
          }}
        />
        {showtxt || txtedit ? (
          <Form style={{ margin: 15 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <p style={{ fontSize: "14px" }}>Text</p>
              <Form.Control
                value={txttoadd}
                onChange={(e) => {
                  settxttoadd(e.target.value);
                }}
                type="text"
                placeholder="Enter text"
              />
            
            
            </Form.Group>
            {txtedit ? (
              <WidgetAddbottombar
                loading={loading}
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  let newarr = elements;
                  const objIndex = newarr.findIndex(
                    (obj) => obj.id === idtoedit
                  );
                  newarr[objIndex].value = txttoadd;
                  setelements([...newarr]);
                  setShowtxt(false);
                }}
              />
            ) : (
              <WidgetAddbottombar
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  setid(id + 1);
                  setelements([
                    ...elements,
                    { id: id, type: "text", value: txttoadd },
                  ]);
                  setShowtxt(false);
                  setTimeout(() => {
                    messagesEndRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              />
            )}
          </Form>
        ) : showimg || imgedit ? (
          <Form style={{ margin: 15 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Choose Image to add</Form.Label>

              <Form.Control
                onChange={(e) => uploadimage(e.target.files)}
                type="file"
              />
            </Form.Group>

            {imgedit ? (
              <WidgetAddbottombar
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  let newarr = elements;
                  const objIndex = newarr.findIndex(
                    (obj) => obj.id === idtoedit
                  );
                  newarr[objIndex].url = imgtoadd;
                  setelements([...newarr]);
                  setShowimg(false);
                }}
              />
            ) : (
              <WidgetAddbottombar
                loading={loading}
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  setid(id + 1);

                  setelements([
                    ...elements,
                    { id: id, type: "image", url: imgtoadd },
                  ]);
                  setShowimg(false);
                  setTimeout(() => {
                    messagesEndRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              />
            )}
          </Form>
        ) : showaddslide || slideedit ? (
          <Form style={{ margin: 15 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Choose Image to upload</Form.Label>
              <Form.Control
                onChange={(e) => uploadimage(e.target.files)}
                type="file"
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
                  src={el.original}
                />
              ))}
            </div>
          
            {slideedit ? (
              <WidgetAddbottombar
              loading={loading}
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);

                  let newarr = elements;
                  const objIndex = newarr.findIndex(
                    (obj) => obj.id === idtoedit
                  );
                  newarr[objIndex].img = slideimgs;
                  setelements([...newarr]);
                  setslideimgs([]);
                  setShowaddslide(false);
                }}
              />
            ) : (
              <WidgetAddbottombar
              loading={loading}
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  setid(id + 1);

                  setelements([
                    ...elements,
                    { id: id, type: "slideshow", img: slideimgs },
                  ]);
                  setslideimgs([]);
                  setShowaddslide(false);
                  setTimeout(() => {
                    messagesEndRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              />
            )}
          </Form>
        ) : show2el || el2edit ? (
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
                  <option value={val.id}>{val.title}</option>
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
                  <option value={val.id}>{val.title}</option>
                ))}
              </Form.Select>
            </Form.Group>

            {el2edit ? (
              <WidgetAddbottombar
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  let newarr = elements;
                  const objIndex = newarr.findIndex(
                    (obj) => obj.id === idtoedit
                  );
                  console.log("objIndex");

                  console.log(objIndex);
                  newarr[objIndex].el = [el1, el2];
                  setelements([...newarr]);
                  setShow2el(false);
                }}
              />
            ) : (
              <WidgetAddbottombar
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  setid(id + 1);

                  setelements([
                    ...elements,
                    { id: id, type: "2el", el: [el1, el2] },
                  ]);
                  setShow2el(false);
                  setTimeout(() => {
                    messagesEndRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              />
            )}
          </Form>
        ) : show3el || el3edit ? (
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
                  <option value={val.id}>{val.title}</option>
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
                  <option value={val.id}>{val.title}</option>
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
                  <option value={val.id}>{val.title}</option>
                ))}
              </Form.Select>
            </Form.Group>
            {el3edit ? (
              <WidgetAddbottombar
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  let newarr = elements;
                  const objIndex = newarr.findIndex(
                    (obj) => obj.id === idtoedit
                  );
                  console.log(objIndex);
                  newarr[objIndex].el = [el1, el2, el3];
                  setelements([...newarr]);
                  setShow3el(false);
                }}
              />
            ) : (
              <WidgetAddbottombar
                onclick={() => {
                  setshowsidenav(false);
                  setmargleft(false);
                  setExpanded(false);
                  setShowtxt(false);
                  setShowimg(false);
                  setShow2el(false);
                  setShow3el(false);
                  settxtedit(false);
                  setimgedit(false);
                  set2eledit(false);
                  set3eledit(false);
                  setslideedit(false);
                  setid(id + 1);

                  setelements([
                    ...elements,
                    {
                      id: id,
                      type: "3el",
                      el: [el1, el2, el3],
                    },
                  ]);
                  setShow3el(false);
                  setTimeout(() => {
                    messagesEndRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 100);
                }}
              />
            )}
          </Form>
        ) : null}
      </div>
      <div
        style={{
          transition: "0.2s",
          position: "relative",
          marginLeft: margleft === true ? "240px" : "0px",
        }}
      >
        <SideNav
          expanded={expanded}
          onToggle={(expanded) => {
            setExpanded(expanded);
            console.log(expanded);
            if (expanded) {
              setmargleft(true);
            } else {
              setmargleft(false);
            }
          }}
          style={{ position: "fixed", backgroundColor: "#f68b1e" }}
          onSelect={(selected) => {
            switch (selected) {
              case "addtxt":
                setShowtxt(true);
                setshowsidenav(true);
                setmargleft(true);
                settxtedit(false);
                break;
              case "addimg":
                setshowsidenav(true);
                setmargleft(true);
                setimgedit(false);
                setShowimg(true);

                break;
              case "2el":
                setshowsidenav(true);
                setmargleft(true);
                setShow2el(true);
                set2eledit(false);

                break;
              case "3el":
                setshowsidenav(true);
                setmargleft(true);
                set3eledit(false);
                setShow3el(true);

                break;
              case "addslide":
                setshowsidenav(true);
                setmargleft(true);
                setslideedit(false);
                setShowaddslide(true);
                break;
              case "preview":
                navigate("/storepreview", { state: elements });
                break;
              default:
              // code block
            }
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav style={{ height: "100%" }} defaultSelected="home">
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
                <FontAwesomeIcon
                  size="lg"
                  className="btnicon"
                  icon={faImages}
                />
              </NavIcon>
              <NavText>Add Slide</NavText>
            </NavItem>

            <NavItem
              style={{ position: "absolute", bottom: "0px", width: "100%" }}
            >
              <NavIcon>
                <Link
                  onClick={() => {
                    localStorage.setItem("elements", JSON.stringify(elements));
                  }}
                  target="_blank"
                  to={{ pathname: "/storepreview" }}
                >
                  <FontAwesomeIcon
                    size="lg"
                    className="btniconwhite"
                    icon={faEye}
                  />
                </Link>
              </NavIcon>
              <NavText>Preview</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img height={50} width={80} src="./Logo.png" />
              </Navbar.Brand>
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
              width: "1050px",
              paddingLeft: "36px",
              margin: "0 auto",
              backgroundColor: "#E8E8E8",
            }}
          >
            {elements.map((el, index) =>
              el.type === "text" ? (
                <div
                  className="onhoverhide"
                  style={{
                    margin: 35,

                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="tohide"
                    style={{
                      left: 15,
                      position: "absolute",
                      display: "flex",
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
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
                  <p
                    style={{ margin: 20, fontSize: "65px", fontWeight: "300" }}
                  >
                    {el.value}
                  </p>
                  <div
                    className="tohide"
                    style={{
                      right: 0,
                      position: "absolute",
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FontAwesomeIcon
                      onClick={() => {
                        settxtedit(true);
                        setShowtxt(false);
                        setshowsidenav(true);
                        setmargleft(true);
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
                  className="onhoverhide"
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
                    className="tohide"
                    style={{
                      left: 15,
                      position: "absolute",
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
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
                          src={found.src_images}
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
                          {found.title}
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
                    className="tohide"
                    style={{
                      right: 15,
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FontAwesomeIcon
                      onClick={() => {
                        setshowsidenav(true);
                        setmargleft(true);
                        set2eledit(true);
                        setShow2el(true);
                        setidtoedit(el.id);
                      }}
                      className="btnicon"
                      size="1x"
                      icon={faEdit}
                      style={{ margin: 10, zIndex: 10 }}
                    />
                    <FontAwesomeIcon
                      style={{ margin: 10, zIndex: 10 }}
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
                  className="onhoverhide"
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    className="tohide"
                    style={{
                      left: 15,
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FontAwesomeIcon
                      onClick={(e) => {
                        arraymove(elements, index, index - 1);
                      }}
                      className="btnicon"
                      size="1x"
                      icon={faArrowUp}
                      style={{ margin: 10, zIndex: 10 }}
                    />
                    <FontAwesomeIcon
                      style={{ margin: 10, zIndex: 10 }}
                      onClick={() => {
                        arraymove(elements, index, index + 1);
                      }}
                      className="btnicon"
                      size="1x"
                      icon={faArrowDown}
                    />
                  </div>
                  <ImageGallery
                    slideInterval={5000}
                    autoPlay
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    items={el.img}
                  />
                  <div
                    className="tohide"
                    style={{
                      right: 15,
                      position: "absolute",
                      top: "0%",
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
                      transform: `translate(50%)`,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FontAwesomeIcon
                      onClick={() => {
                        setshowsidenav(true);
                        setmargleft(true);
                        setslideedit(true);
                        setShowaddslide(true);
                        setidtoedit(el.id);
                      }}
                      className="btnicon"
                      size="1x"
                      icon={faEdit}
                      style={{ margin: 10, zIndex: 10 }}
                    />
                    <FontAwesomeIcon
                      style={{ margin: 10, zIndex: 10 }}
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
                  className="onhoverhide"
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
                    className="tohide"
                    style={{
                      left: 15,
                      position: "absolute",
                      display: "flex",
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
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
                    className="tohide"
                    style={{
                      right: 15,
                      position: "absolute",
                      display: "flex",
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
                      flexDirection: "column",
                    }}
                  >
                    <FontAwesomeIcon
                      onClick={() => {
                        setshowsidenav(true);
                        setmargleft(true);
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
                  className="onhoverhide"
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
                    className="tohide"
                    style={{
                      left: 15,
                      position: "absolute",
                      display: "flex",
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
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
                      <div style={{display:'flex',boxShadow:'rgba(163, 131, 85, 0.08) 0px 4px 24px 0px',flexDirection:'column',
                      borderRadius:'8px',padding:'16px',
                      border:'2px solid rgb(219, 181, 128)',
                      backgroundColor:'rgb(255,255,255)',
                      
                      
                      
                      }}>
                        <img
                          alt="item"
                          height="160"
                          width="200"
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                          src={found.src_images}
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
                            {found.title}
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
                    className="tohide"
                    style={{
                      right: 15,
                      position: "absolute",
                      borderRadius: 15,
                      zIndex: 9,
                      backgroundColor: "white",
                      padding: 10,
                      boxSizing: "border-box",
                      boxShadow: " 0 10px 25px rgba(0,0,0,0.4)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FontAwesomeIcon
                      onClick={() => {
                        setshowsidenav(true);
                        setmargleft(true);
                        set3eledit(true);
                        setShow3el(true);
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
            <div ref={messagesEndRef}></div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                border: "1px dashed black",
                width: "600px",
                margin: "0px auto",
                padding: "35px",
                backgroundColor: "#d3ffd3",
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: "400" }}>
                Widget Will Be Added Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreHomePageCreate;
