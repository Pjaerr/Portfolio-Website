import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Project from "../Project/Project";

import styled from "styled-components";
import { headingFontSize, highlightColour } from "../../constants";

const ProjectListingContainer = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 25px;
  justify-content: end;
`;

const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 25px;
  font-size: ${headingFontSize.medium};
  color: ${highlightColour};
`;

const ProjectListing = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            title
            description
            technologies {
              colour
              name
            }
            gradient {
              start
              end
            }
            githubLink
            demoLink
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges;

  return (
    <ProjectListingContainer>
      <Title>Projects</Title>
      {projects.map(
        ({
          node: {
            title,
            description,
            technologies,
            gradient,
            githubLink,
            demoLink,
          },
        }) => (
          <Project
            title={title}
            description={description}
            technologies={technologies}
            gradient={gradient}
            githubLink={githubLink}
            demoLink={demoLink}
          />
        )
      )}
    </ProjectListingContainer>
  );
};

export default ProjectListing;
