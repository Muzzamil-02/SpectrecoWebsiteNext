import { Container, Row, Col, Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <img src="/images/logo.png" alt="Spectreco Logo" style={styles.logo} />
            <p style={styles.tagline}>Empowering your vision with innovative solutions for sustainable growth.</p>
            <Button variant="danger" style={styles.subscribeButton}>Subscribe</Button>
          </Col>
          <Col md={2}>
            <h4 style={styles.columnTitle}>Company</h4>
            <ul style={styles.list}>
              <li><a href="/about" style={styles.link}>About Us</a></li>
              <li><a href="/technology" style={styles.link}>Technology</a></li>
              <li><a href="/insights" style={styles.link}>Insights</a></li>
              <li><a href="/contact" style={styles.link}>Contact Us</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h4 style={styles.columnTitle}>Advisory</h4>
            <ul style={styles.list}>
              <li><a href="/advisory" style={styles.link}>Advisory</a></li>
              <li><a href="/built-environment" style={styles.link}>Built Environment</a></li>
              <li><a href="/real-estate" style={styles.link}>Real Estate</a></li>
              <li><a href="/hospitality" style={styles.link}>Hospitality</a></li>
              <li><a href="/agriculture" style={styles.link}>Agriculture</a></li>
              <li><a href="/energy" style={styles.link}>Energy</a></li>
              <li><a href="/transportation" style={styles.link}>Transportation</a></li>
              <li><a href="/financial-institutions" style={styles.link}>Financial Institutions</a></li>
              <li><a href="/capital-markets" style={styles.link}>Capital Markets</a></li>
              <li><a href="/insurance" style={styles.link}>Insurance</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h4 style={styles.columnTitle}>Legal</h4>
            <ul style={styles.list}>
              <li><a href="/terms" style={styles.link}>Terms of Use</a></li>
              <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h4 style={styles.columnTitle}>Connect</h4>
            <a href="mailto:connect@spectreco.com" style={styles.link}>connect@spectreco.com</a>
          </Col>
        </Row>
        <Row className="pt-3 border-top">
          <Col md={6}>
            <p style={styles.copyright}>Copyright © 2024 Spectreco LLC. All Rights Reserved | Site Developed By ITBeam</p>
          </Col>
          <Col md={6} className="text-md-end d-flex justify-content-md-end align-items-center">
  <a href="/terms" style={styles.link}>Terms of Use</a>
  <a href="/privacy" style={styles.link} className="ms-3">Privacy Policy</a>
  <a href="#" style={styles.iconLink} className="ms-3"><i className="fab fa-facebook"></i></a>
  <a href="#" style={styles.iconLink} className="ms-3"><i className="fab fa-youtube"></i></a>
  <a href="#" style={styles.iconLink} className="ms-3"><i className="fab fa-linkedin"></i></a>
  <a href="#" style={styles.iconLink} className="ms-3"><i className="fab fa-instagram"></i></a>
</Col>

        </Row>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '40px 0',
  },
  logo: {
    height:'40px',
    width: '150px',
    marginBottom: '10px',
  },
  tagline: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  subscribeButton: {
    padding: '10px 20px',
  },
  columnTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    display: 'block',
    marginBottom: '5px',
  },
  copyright: {
    fontSize: '12px',
    color: '#666',
  },
  iconLink: {
    textDecoration: 'none',
    fontSize: '20px',
    color: '#000',
  },
};
