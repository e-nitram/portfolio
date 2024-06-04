import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Professional Experience</h3>
          </Col>
          <Col lg="7">
            <h4>Sr.Software Engineer, Airista(Remote)</h4>
            <h5>03/2022 – Current | NY, US</h5>
            <br />
            <p>- Developed a healthcare management system using React, improving patient and provider
              interactions through a user-friendly interface. </p>
            <p> - Implemented back-end services in Golang to ensure high performance and scalability of healthcareapplications. </p>
            <p> - Built and maintained healthcare data processing pipelines using Python, facilitating efficient dataanalysis and reporting. </p>
            <p>  - Developed RESTful APIs with Node.js to support real-time data exchange between healthcareproviders and patients. </p>
            <p>- Designed and optimized PostgreSQL databases to handle large volumes of healthcare datawithhigh reliability and performance. </p>
            <p>- Leveraged AWS infrastructure to deploy and manage healthcare applications, ensuring compliancewith security and scalability requirements. </p>
            <p>- Created custom React components to streamline the development of healthcare web applications,
              improving code reusability.</p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
          </Col>
          <Col lg="7">
            <h4>Fullstack Developer, Eduforma (Remote)</h4>
            <h5>06/2020 – 03/2022 | Lyon, FR</h5>
            <br />
            <p>- Developed and maintained a Learning Management System (LMS) using React, enhancingtheonline learning experience for thousands of users.</p>
            <p>- Architected and implemented microservices to modularize the LMS, improving scalability andmaintainability.</p>
            <p>- Designed and integrated GraphQL APIs to streamline data fetching and enhance the performanceof the online learning platform. </p>
            <p>- Utilized MySQL for structured data storage, ensuring efficient query performance and data integrity. </p>
            <p>- Built RESTful APIs with Node.js and Python/Django to facilitate seamless communication betweenfront-end and back-end systems in the LMS.</p>
            <p>- Leveraged AWS infrastructure for deploying and managing the LMS, ensuring high availability andreliability.</p>
            <p>- Implemented AWS services such as EC2, S3, and RDS to enhance the scalability and securityof
              the online learning platform.</p>
            <p>- Developed reusable React components to create a consistent and user-friendly interface for theLMS.</p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
          </Col>
          <Col lg="7">
            <h4>Frontend Developer, Wilcon Depot</h4>
            <h5>01/2016 – 06/2020 | Quezon, PH</h5>
            <br />
            <p>- Developed and maintained a Learning Management System (LMS) using React, enhancingtheonline learning experience for thousands of users.</p>
            <p> - Developed dynamic and responsive web applications using React, enhancing user engagement andsatisfaction.</p>
            <p> - Utilized CSS and TailwindCSS to create visually appealing and highly customizable user interfaces.</p>
            <p>  - Implemented Material UI components to maintain a consistent and modern design languageacrossapplications.</p>
            <p>- Built and maintained RESTful APIs using Node.js, facilitating seamless communication betweenfront-end and back-end systems.</p>
            <p>- Designed and executed GraphQL schemas and resolvers, optimizing data fetching andimprovingapplication performance.</p>
            <p>- Integrated Docker for containerization, ensuring consistent environments across development, testing, and production stages.</p>
            <p>- Enhanced application performance by implementing code-splitting and lazy loading in React.</p>
            <p>- Customized Material UI themes to align with brand guidelines, ensuring a cohesive look and feel.</p>
            <p>- Developed reusable React components to streamline development processes and maintaincodeconsistency.</p>
            <p>- Collaborated with cross-functional teams to define and implement new features, adheringtoagilemethodologies.</p>
            <p>- Managed state efficiently in React applications using Context API and Redux</p>
            <p>- Utilized TailwindCSS utilities to rapidly prototype and iterate on design concepts.</p>
            <p>- Implemented CI/CD pipelines using Docker, automating deployment processes and reducingmanual
              intervention.</p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp" style={{marginBottom: '200px'}}>
          <Col lang="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <h3>Bachelor's Degree in Computer Science</h3>
            <h5>Palawan State University, 2011-2015</h5>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
