// src/components/HeroSection.jsx
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  return (
    <div className="bg-secondary text-white py-5 hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-5">Discover Your World in Favourite Book</h1>
            <p className="lead">“Books: your ticket to infinite worlds.”</p>
            <div className="d-flex gap-2">
              <Button variant="primary" size="lg" onClick={() => navigate('/')}>Browse Books</Button>
              <Button variant="outline-light" size="lg" onClick={() => token ? navigate('/profile') : navigate('/login')}>My Account</Button>
            </div>
          </Col>
          <Col md={5} className="text-center">
            <img src="https://www.zb.uzh.ch/storage/app/media/sammlungen/allgemein/20190322-Digitale-Sammlung.jpg"
                 alt="books" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
