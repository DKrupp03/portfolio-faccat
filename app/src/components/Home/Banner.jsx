import { Container } from 'react-bootstrap';
import '../../styles/Banner.css';

export default function Banner () {
  return (
    <Container className="banner">
      <h1 className="banner-title">Hi, I'm Diogo</h1>
      <p class="banner-subtitle">And I am a web developer</p>
    </Container>
  )
}