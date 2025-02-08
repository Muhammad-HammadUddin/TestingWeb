import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styled components for better styling and layout
const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(to bottom right, #6a4cfc, #4b3d88);
  -webkit-background-clip: text;
  text-align: center;
  margin-bottom: 40px;
`;

const Counter = styled.div`
  font-size: 50px;
  font-weight: bold;
  transition: all 1s ease-in-out;
  color: #6a4cfc;
  margin: 20px 0;
`;

const TargetWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TargetCard = styled.div`
  text-align: center;
  flex: 1;
  margin: 0 15px;
`;

const TargetTitle = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 10px;
`;

const TargetNumber = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #4b3d88;
`;

function Mission() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);
  const [employeesCount, setEmployeesCount] = useState(0);

  const projectsTarget = 300; // Target for projects
  const awardsTarget = 10;    // Target for awards
  const employeesTarget = 100; // Target for employees

  const projectsRef = useRef(null);
  const awardsRef = useRef(null);
  const employeesRef = useRef(null);

  // Function to handle the counting logic for each counter
  const updateCount = (setCount, target) => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, -0); // Adjust the speed (lower value = faster count)
    
    return () => clearInterval(interval); // Clean up interval when count reaches target
  };

  // Intersection Observer to detect when each counter is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === projectsRef.current) {
              updateCount(setProjectsCount, projectsTarget);
            } else if (entry.target === awardsRef.current) {
              updateCount(setAwardsCount, awardsTarget);
            } else if (entry.target === employeesRef.current) {
              updateCount(setEmployeesCount, employeesTarget);
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe each counter
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (awardsRef.current) observer.observe(awardsRef.current);
    if (employeesRef.current) observer.observe(employeesRef.current);

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <MissionContainer>
      <Title>Our Mission</Title>

      {/* Target Information */}
      <TargetWrapper>
        {/* Projects Counter */}
        <TargetCard ref={projectsRef}>
          <TargetTitle>Projects</TargetTitle>
          <TargetNumber>
            {projectsCount < projectsTarget ? projectsCount : '500+'}
          </TargetNumber>
        </TargetCard>

        {/* Awards Counter */}
        <TargetCard ref={awardsRef}>
          <TargetTitle>Awards</TargetTitle>
          <TargetNumber>
            {awardsCount < awardsTarget ? awardsCount : '10+'}
          </TargetNumber>
        </TargetCard>

        {/* Employees Counter */}
        <TargetCard ref={employeesRef}>
          <TargetTitle>Employees</TargetTitle>
          <TargetNumber>
            {employeesCount < employeesTarget ? employeesCount : '100+'}
          </TargetNumber>
        </TargetCard>
      </TargetWrapper>
    </MissionContainer>
  );
}

export default Mission;
