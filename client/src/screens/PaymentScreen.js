import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Col, Image, Row, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";


const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paytm");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('submit');
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  return (
    <FormContainer>
      <br /><br /><br /><br /><br />
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
        </Form.Group>

        <Col>
          <ListGroup.Item>
            <Row>
              <Form.Check
                type="radio"
                label="Paytm"
                id="paytm"
                name="paymentMethod"
                value="Paytm"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <Col></Col>

              <Image
                mx={2}
                fluid
                rounded
                src="https://png.pngitem.com/pimgs/s/12-123297_paytm-transparent-logo-paytm-logo-paytm-logo-png.png"
                width={60}
              />
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Form.Check
                type="radio"
                label="PhonePe"
                id="phonepe"
                name="paymentMethod"
                value="PhonePe"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <Col></Col>

              <Image
                mx={2}
                fluid
                rounded
                src="https://cdn.worldvectorlogo.com/logos/phonepe-1.svg"
                width={90}
              />
            </Row>
          </ListGroup.Item>
        </Col>
        <br />

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};


export default PaymentScreen;