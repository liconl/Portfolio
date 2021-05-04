import React, { useMemo } from "react";
import { Text, Sky, OrbitControls } from "drei";
import { Canvas } from "react-three-fiber";
import Header from "./Header";

function About() {
  const PROJECT_HEADER = 0.4;
  const PROJECT_CONTEXT = 0.2;
  const TEXT_COLOR = "black";

  return (
    <>
      <Header />
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 0, 6.5], fov: 60 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_HEADER}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, 3.7, -2]}
          >
            A Physical Scientist turned Computer Scientist
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={11}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, 2.8, -2]}
          >
            During my undergrad at UC Irvine, I've measured the decay of
            radioactive isotopes, created a functional fingertip heart rate
            monitor, and worked with extremely dangerous chemicals. I loved
            every bit of it- getting my hands dirty and seeing first hand how
            the fundamentals of science work has changed how I view the world.
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={11}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, 1.6, -2]}
          >
            My roommates, being Computer Science majors, were my biggest
            influencers in becoming a Software Engineer. They attended
            hackathons, created games, and are incredible Software Engineers.
            When I interned at UCI Continuing Education, I took two courses:
            Introduction to Python and Data Structure & Algorithms. Ever since
            these two classes, I have not looked back and started my journey
            into SWE!
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_HEADER}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, 0.6, -2]}
          >
            What I Have Learned and What I Want to Learn
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={11}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, -0.5, -2]}
          >
            Since September 2020, I have spent the majority of the time
            mastering front end development (HTML, (S)CSS, Java Script, and
            React.js). I created numerous projects - the most noteworthy being
            on my portfolio and on my Github. I have a lot more to learn - I
            want to create bots to mess around with my friends, create great UI
            applications, and master other tech stacks.
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={11}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, -1.9, -2]}
          >
            If you would like to play around with my projects, don't hesistate
            to clone my repositories (keep in mind that Stock Market Simplified
            is not cloneable due to API keys and Pandas needa a backend). If you
            would like to work on a project together or want to pursue an
            opportunity in me joining your team, email me at
            licon.luisangel@gmail.com (click on the mail icon at the top right!)
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={11}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, -2.8, -2]}
          >
            My portfolio is made using Three.js and React-Three-Fiber.
          </Text>
        </group>
        <Sky />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default About;
