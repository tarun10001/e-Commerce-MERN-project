// import React, { useState,useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from "react-bootstrap";
// import Rating from "../components/Rating";
// import { listProductDetails } from "../actions/productActions";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import "../index.css";
// import Modal from 'react-bootstrap/Modal';

// const ProductScreen = (props) => {

//   const [qty, setQty] =  useState(1);
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const productDetails = useSelector((state) => state.productDetails);
//   const { loading, error, product } = productDetails;

//   useEffect(() => {
//       dispatch(listProductDetails(id));
//   }, [dispatch]);

// const addToCartHandler = () => {
//   navigate(`/cart/${id}?qty=${qty}`)
// }

//   // <Link />

//   return (
//     <>
//     <br />
//     <br />

//     <br />

//     <br />

//     <br />

//       <Link className="btn btn-light" my-3 to="/">
//         <h5 className="back">Go Back</h5>
//       </Link>
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <Row>
//           <Col md={6}>
//             <Image src={product.image} alt={product.name} className='productImg' fluid />
//           </Col>
//           <Col md={3}>
//             <ListGroup variant="flush">
//               <ListGroup.Item>
//                 <h3>{product.name}</h3>
//               </ListGroup.Item>

//               <ListGroup.Item>
//                 <Rating
//                   value={product.rating}
//                   text={`${product.numReviews} reviews`}
//                 />
//               </ListGroup.Item>

//               <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>

//               <ListGroup.Item>
//                 Description: ${product.description}
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>

//           <Col md={3}>
//             <Card>
//               <ListGroup variant="flush">
//                 <ListGroup.Item>
//                   <Row>
//                     <Col>Price:</Col>
//                     <Col>
//                       <strong>₹{product.price}</strong>
//                     </Col>
//                   </Row>
//                 </ListGroup.Item>

//                 <ListGroup.Item>
//                   <Row>
//                     <Col>Status:</Col>
//                     <Col>
//                       {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
//                     </Col>
//                   </Row>
//                 </ListGroup.Item>

//                 {product.countInStock > 0 && (
//                   <ListGroup.Item>
//                     <Row>
//                       <Col>Qty</Col>
//                       <Col>

//                       <Form.Control
//                       as="select"

//                       value={qty}
//                       onChange={(e) =>
//                       setQty(e.target.value)}>
//                         {new Array(product.countInStock).fill(1).map((_,index) => (
//                           <option key={index + 1} value={index + 1}>
//                             {index + 1}
//                           </option>
//                         ))}
//                       </Form.Control>

//                       </Col>
//                     </Row>
//                   </ListGroup.Item>
//                 )}

//                 <ListGroup.Item>
//                   <Button
//                     className="btn-block btn btn-dark"
//                     // to={ `/cart/${id}?qty=${qty}`}
//                     onClick={addToCartHandler}
//                     type="button"
//                     disabled={product.countInStock === 0}
//                   >
//                     Add To Cart
//                   </Button>
//                 </ListGroup.Item>
//               </ListGroup>
//             </Card>
//           </Col>
//         </Row>
//       )}
//     </>
//   );
// };

// export default ProductScreen;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form, Modal
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import "../index.css";


const ProductScreen = (props) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  // <Link />

  return (
    <>
      <br />
      <br />

      <br />

      <br />

      <br />

      <Link className="btn btn-light" my-3 to="/">
        <h5 className="back">Go Back</h5>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (

        
        <Row>


<Modal show={show}>
        <Modal.Body as='h5'>Product Successfully Added To Cart!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={addToCartHandler}>
            GO TO CART
          </Button>
        </Modal.Footer>
      </Modal>


          <Col md={6}>
            <Image
              src={product.image}
              alt={product.name}
              className="productImg"
              fluid
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>

              <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>

              <ListGroup.Item>
                Description: ${product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {new Array(product.countInStock)
                            .fill(1)
                            .map((_, index) => (
                              <option key={index + 1} value={index + 1}>
                                {index + 1}
                              </option>
                            ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    className="btn-block btn btn-dark"
                    // 
                    onClick={handleShow}
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>

              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
