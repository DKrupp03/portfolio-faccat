'use client';
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../../styles/Projects.css';

export default function Projects () {

  const projects = [
    {
      title: "Project 1",
      description: "ReactJS & NextJS",
    },
    {
      title: "Project 2",
      description: "Ruby On Rails",
    },
    {
      title: "Project 3",
      description: "NodeJS",
    },
    {
      title: "Project 4",
      description: "HMTL & CSS",
    },
  ]

  return (
    <section className="projects" id="projects">
      <hr />
      <Container style={{ width: '80%' }}>
        <Row>
          <Col sx={12}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <p>These are my projects! You can check them on my <a href="https://github.com/DKrupp03" target='_blank'>github</a></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}