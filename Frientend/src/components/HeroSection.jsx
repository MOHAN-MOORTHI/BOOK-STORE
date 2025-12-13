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
            <h1 className="display-5">Discover Your Next Favourite Book</h1>
            <p className="lead">Browse thousands of titles, read previews, add to cart and order.</p>
            <div className="d-flex gap-2">
              <Button variant="primary" size="lg" onClick={() => navigate('/')}>Browse Books</Button>
              <Button variant="primary" size="lg" onClick={() => token ? navigate('/profile') : navigate('/login')}>My Account</Button>
            </div>
          </Col>
          <Col md={5} className="text-center">
            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6d8f3b2b5b9b8d3d3d0a8c1a7d5c6e7f"
                 alt="books" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
