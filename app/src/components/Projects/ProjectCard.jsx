import { Col } from "react-bootstrap";
import '../../styles/Projects.css';

export function ProjectCard ({ title, description }) {
  return (
    <Col sx={12} sm={6} md={3}>
      <div className="project-card-container">
        <div className="project-card-default">
          <h4>{title}</h4>
        </div>
        <div className="project-card-hover">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}