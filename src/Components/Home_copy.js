import React, { useMemo } from "react";
import SpinningMesh from "./SpinningMesh";
import SpinningMesh_mobile from "./SpinningMesh_mobile";
import { Text, Sky, OrbitControls } from "drei";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
//
import Header from "./Header";
//textures
import SMS from "../Images/SMS.png";
import Amazon from "../Images/amazon.png";
import CaresMom from "../Images/cares.png";
import foodTracker from "../Images/healthTracker.png";
import Medtacglobal from "../Images/medtacglobal.png";

function Home() {
  const SMS_texture = useMemo(() => new THREE.TextureLoader().load(SMS), []);
  const medtacglobal_texture = useMemo(
    () => new THREE.TextureLoader().load(Medtacglobal),
    []
  );
  const foodTracker_texture = useMemo(
    () => new THREE.TextureLoader().load(foodTracker),
    []
  );
  const amazon_texture = useMemo(
    () => new THREE.TextureLoader().load(Amazon),
    []
  );
  const caremoms_texture = useMemo(
    () => new THREE.TextureLoader().load(CaresMom),
    []
  );

  const PROJECT_HEADER = 0.3;
  const PROJECT_CONTEXT = 0.2;
  const TEXT_COLOR = "black";
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 2, 17], fov: 70 }}
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
            /*  receiveShadow */
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <group></group>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={3.5}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[-10, -1.3, -2]}
          >
            MERN (Mongoose Express React Node) project that allows users to add,
            edit, and delete their meals along with exercises. Using
            MyFitnessPal API, a user can track their calorie goal and their
            macronutrients intake. Project is currently under development!
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_HEADER}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[-10, 2.7, -2]}
          >
            Food Tracker
          </Text>
          <SpinningMesh_mobile
            position={[-10, 1, -2]}
            args={[3, 2, 0.2]}
            speed={2}
            image={foodTracker_texture}
            alert="Health Tracker should be deployed very soon!"
          />
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_HEADER}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[-5, 2.7, -2]}
          >
            Amazon Clone
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={3}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[-5, -1, -2]}
          >
            React.js project thats mimics Amazons front page UI. No libraries
            were used; it is styled with vanilla React components and css.
          </Text>
          <SpinningMesh
            position={[-5, 1, -2]}
            args={[3, 2, 0.2]}
            speed={2}
            image={amazon_texture}
            url={"https://bosawas-829ce.web.app/"}
          />
          <SpinningMesh
            position={[0, 1, -2]}
            args={[3, 2, 0.2]}
            speed={2}
            image={SMS_texture}
            url={"https://stock-market-simplified.web.app/"}
          />
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_HEADER}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, 2.7, -2]}
          >
            Stock Market Simplified
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={3.5}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, -1.25, -2]}
          >
            Stock search web app that allows users to search NSYE stocks and
            analyze them using stock graphs, earnings reports, finanical
            statments, and competitor analysis. Built using React.js,
            material-ui, Firebase Authentication and Database, and asynchronous
            coding techniques.
          </Text>
          <SpinningMesh_mobile
            position={[4.9, 1, -2]}
            args={[1.25, 2, 0.2]}
            speed={2}
            image={caremoms_texture}
            alert="CaresMom is a mobile application! Expect it on the Google App Store and the Apple IOS Store soon! "
          />
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_HEADER}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[4.9, 2.7, -2]}
          >
            CareMoms
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={3}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[4.9, -1.4, -2]}
          >
            React Native mobile application that allows users to get up to date
            information regarding COVID-19, including a John Hopkins community
            tracker and saftey guidelines from the CDC. Built with Expo CLI and
            Expo libraries. Currently in development!
          </Text>
          <SpinningMesh_mobile
            position={[8.9, 1, -2]}
            args={[1.25, 2, 0.2]}
            speed={2}
            image={medtacglobal_texture}
            alert="Medtacglobal is a mobile application! Expect it on the Google App Store and the Apple IOS Store soon! "
          />
          <Text
            onClick={window.open("https://stock-market-simplified.web.app/")}
            color={TEXT_COLOR}
            fontSize={PROJECT_HEADER}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[9, 2.7, -2]}
          >
            Medtacglobal
          </Text>
          <Text
            color={TEXT_COLOR}
            fontSize={PROJECT_CONTEXT}
            maxWidth={3}
            lineHeight={1.4}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[9, -1.3, -2]}
          >
            React Native mobile application that focuses on getting COVID-19
            material to high school and college students using a modern UI
            experience. Built with Expo CLI and Expo libraries. Currently in
            early development!
          </Text>
        </group>

        <Sky />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Home;
