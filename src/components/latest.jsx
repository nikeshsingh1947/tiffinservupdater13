import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./letest.css"
const weeklyMenu = [
  {
    day: "Monday",
    lunch: "ROTI + RICE + MIX DAL + SEASONAL SABJI + SALAD + ACHAR",
    dinner: "ROTI + RICE + KADI PAKODA + SEASONAL SABJI + SALAD + ACHAR"
  },
  {
    day: "Tuesday",
    lunch: "ROTI + JEERA RICE + TADKA DAL + MATAR PANNER + SALAD + ACHAR",
    dinner: "ROTI + RICE + DAL MAKHNI + SEASONAL SABJI + SALAD + ACHAR"
  },
  {
    day: "Wednesday",
    lunch: "ROTI + RICE + CHOLE + KASHMRI AALOO DUM + SALAD + ACHAR",
    dinner: "ROTI + JEERA RICE + RAJMA + CHILLI PANNER + SALAD + ACHAR"
  },
  {
    day: "Thursday",
    lunch: "ROTI + RICE + KADI PAKODA + SEASONAL SABJI + SALAD + ACHAR",
    dinner: "ROTI + VEG PULAO + TADKA DAL + KOFTA + SALAD + ACHAR"
  },
  {
    day: "Friday",
    lunch: "ROTI + RICE + DAL MAKHNI + SEASONAL SABJI + SALAD + ACHAR",
    dinner: "ROTI + RICE + MIX DAL + SEASONAL SABJI + SALAD + ACHAR"
  },
  {
    day: "Saturday",
    lunch: "ROTI + JEERA RICE + RAJMA + CHILLI PANNER + SALAD + ACHAR",
    dinner: "ROTI + JEERA RICE + TADKA DAL + MATAR PANNER + SALAD + ACHAR"
  },
  {
    day: "Sunday",
    lunch: "ROTI + VEG PULAO + TADKA DAL + KOFTA + SALAD + ACHAR",
    dinner: "ROTI + RICE + CHOLE + KASHMRI AALOO DUM + SALAD + ACHAR"
  }
];

export const FoodApplication = () => {
  return (
    <Container>
      <h1 className="my-4" id='main-weekly'>Weekly Meal Plan</h1>
      {weeklyMenu.map((dayMenu, index) => (
        <Row className="mb-4" key={index}>
          <Col  md={12}>
            <Card >
              <Card.Header id='header-top-day'>
                 <h4>{dayMenu.day}</h4>  
              </Card.Header>
              <Card.Body id='cardbody'>
                <Row>
                  <Col md={6}>
                    <Card.Title>Lunch</Card.Title>
                    <Card.Text className="text-menue">{dayMenu.lunch}</Card.Text>
                  </Col>
                  <Col md={6}>
                    <Card.Title>Dinner</Card.Title>
                    <Card.Text className="text-menue">{dayMenu.dinner}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};


