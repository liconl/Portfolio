import React, { useMemo } from "react";
import SpinningMesh from "./SpinningMesh";
import SpinningMesh_mobile from "./SpinningMesh_mobile";
import GithubMesh from "./GithubMesh";
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
import github from "../Images/github.png";
import algo from "../Images/algo.png";
import pandas from "../Images/pandas.png";
import reddit from "../Images/reddit.png";
import react from "../Images/react.png";
//

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
  const algo_texture = useMemo(() => new THREE.TextureLoader().load(algo), []);
  const pandas_texture = useMemo(
    () => new THREE.TextureLoader().load(pandas),
    []
  );
  const reddit_texture = useMemo(
    () => new THREE.TextureLoader().load(reddit),
    []
  );

  const react_texture = useMemo(
    () => new THREE.TextureLoader().load(react),
    []
  );

  const caremoms_texture = useMemo(
    () => new THREE.TextureLoader().load(CaresMom),
    []
  );

  const github_texture = useMemo(() => new THREE.TextureLoader().load(github));

  const PROJECT_HEADER = 0.3;
  const PROJECT_CONTEXT = 0.25;
  const TEXT_COLOR = "black";

  const top = 0;
  const TOP_TITLE_TEXT = 5.5 + top;
  const TOP_MESH = 4 + top;
  const BOT_TEXT = 2.3 + top;

  const bot = -1;

  const BOT_TITLE_TEXT = 0 + bot;
  const BOT_MESH = -1.5 + bot;
  const BOT_BOT_TEXT = -2.2 + bot;

  /* const TOP_TITLE_TEXT = 6;
  const TOP_MESH = 4.5;
  const BOT_TEXT = 2.9;

  const BOT_TITLE_TEXT = 1;
  const BOT_MESH = -0.5;
  const BOT_BOT_TEXT = -1.1;
 */
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 2, 17], fov: 50 }}
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
          {/* Projects */}
          <group>
            {/* Top Group */}
            <group>
              {/* Amazon Clone */}
              <group>
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_HEADER}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[-10.1, TOP_TITLE_TEXT, -2]}
                >
                  Amazon Clone
                </Text>
                <SpinningMesh
                  position={[-8.8, TOP_TITLE_TEXT, -2]}
                  args={[0.35, 0.35, 0.002]}
                  speed={0}
                  image={github_texture}
                  url={"https://github.com/liconl/Amazon-Clone"}
                />

                <SpinningMesh
                  position={[-10, TOP_MESH, -2]}
                  args={[3, 2, 0.2]}
                  speed={2}
                  image={amazon_texture}
                  url={"https://bosawas-829ce.web.app/"}
                />
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_CONTEXT}
                  maxWidth={5}
                  lineHeight={1.4}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[-10, BOT_TEXT - 0.3, -2]}
                >
                  React.js project thats mimics Amazons front page UI. No
                  libraries were used; it is styled with vanilla React
                  components and css.
                </Text>
              </group>
              {/* Stock Market Simplified  */}
              <group>
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_HEADER}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[0, TOP_TITLE_TEXT, -2]}
                >
                  Stock Market Simplified
                </Text>
                <SpinningMesh
                  position={[2, TOP_TITLE_TEXT, -2]}
                  args={[0.35, 0.35, 0.002]}
                  speed={0}
                  image={github_texture}
                  url={"https://github.com/liconl/Stock-Market-Simplified"}
                />
                <SpinningMesh
                  position={[0, TOP_MESH, -2]}
                  args={[3, 2, 0.2]}
                  speed={2}
                  image={SMS_texture}
                  url={"https://stock-market-simplified.web.app/"}
                />
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_CONTEXT}
                  maxWidth={5.5}
                  lineHeight={1.4}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[0, BOT_TEXT - 0.8, -2]}
                >
                  Stock search web app that allows users to search NSYE stocks
                  and analyze them using stock graphs, earnings reports,
                  finanical statments, and competitor analysis. Built using
                  React.js, material-ui, Firebase Authentication and Database,
                  and asynchronous coding techniques.
                </Text>
              </group>
              {/* Search and Sort Visualizer */}
              <group>
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_HEADER}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[10, TOP_TITLE_TEXT, -2]}
                >
                  Search and Sort Visualizer
                </Text>
                <SpinningMesh
                  position={[12.2, TOP_TITLE_TEXT, -2]}
                  args={[0.35, 0.35, 0.002]}
                  speed={0}
                  image={github_texture}
                  url={"https://github.com/liconl/AlgoVisualizer"}
                />
                <SpinningMesh
                  position={[10, TOP_MESH, -2]}
                  args={[3, 2, 0.2]}
                  speed={2}
                  image={algo_texture}
                  url={"https://search-and-sort-visualizer.web.app/"}
                />
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_CONTEXT}
                  maxWidth={6.5}
                  lineHeight={1.4}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[10.3, BOT_TEXT - 0.6, -2]}
                >
                  Search (path finding) visualizer where a start node searches
                  for the goal node with different types of algorithms such as
                  Dijkstra, A*, Depth-First Search, Breath-First Search, and
                  Greedy Best- First Search. Also includes a Sort visualizer
                  with Bubble Sort, Insertion Sort, Selection Sort, Quick Sort,
                  and Merge Sort.
                </Text>
              </group>
            </group>

            {/* Bot Group */}
            <group>
              {/* Pandas */}
              <group>
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_HEADER}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[-10, BOT_TITLE_TEXT, -2]}
                >
                  My Pandas
                </Text>
                <SpinningMesh
                  position={[-8.9, BOT_TITLE_TEXT, -2]}
                  args={[0.35, 0.35, 0.002]}
                  speed={0}
                  image={github_texture}
                  url={"https://github.com/liconl/Pandas"}
                />
                <SpinningMesh
                  position={[-10, BOT_MESH, -2]}
                  args={[3, 2, 0.2]}
                  speed={2}
                  image={pandas_texture}
                  url={"https://my-pandas.web.app/"}
                />
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_CONTEXT}
                  maxWidth={6.5}
                  lineHeight={1.4}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[-9.9, BOT_BOT_TEXT - 1.7, -2]}
                >
                  MyPandas is a full stack MERN (Mongoose, Express, React, Node)
                  applications with Redux, JWT, and Google Authentication that
                  allows users to create a post (panda) that consist of an
                  image, short description, and tags. Users can like other posts
                  and edit/delete their posts.
                </Text>
              </group>
              {/* Reddit Clone */}
              <group>
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_HEADER}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[0, BOT_TITLE_TEXT, -2]}
                >
                  Reddit Clone
                </Text>
                <SpinningMesh
                  position={[1.2, BOT_TITLE_TEXT, -2]}
                  args={[0.35, 0.35, 0.002]}
                  speed={0}
                  image={github_texture}
                  url={"https://github.com/liconl/RedditClone"}
                />
                <SpinningMesh_mobile
                  position={[0, BOT_MESH, -2]}
                  args={[3, 2, 0.2]}
                  speed={2}
                  image={reddit_texture}
                  alert="I have not deployed a beta version check the Github instead!"
                />
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_CONTEXT}
                  maxWidth={6.5}
                  lineHeight={1.4}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[0, BOT_BOT_TEXT - 1.6, -2]}
                >
                  I am currently working on my most ambitious project ever - a
                  Reddit clone where users can create sub reddits and create
                  posts. A full stack application created with Typescript,
                  PostgreSQL GraphQL, Tailwind, and Next.js. Check out the
                  Github to track my progress!
                </Text>
              </group>
              {/* Medtacglobal App */}
              <group>
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_HEADER}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[7, BOT_TITLE_TEXT, -2]}
                >
                  Medtacglobal
                </Text>
                <SpinningMesh
                  position={[8.2, BOT_TITLE_TEXT, -2]}
                  args={[0.35, 0.35, 0.002]}
                  speed={0}
                  image={github_texture}
                  url={"https://github.com/liconl/PublicMedtacglobal"}
                />
                <SpinningMesh_mobile
                  position={[7, BOT_MESH, -2]}
                  args={[1.25, 2, 0.2]}
                  speed={2}
                  image={medtacglobal_texture}
                  alert="Medtacglobal is a mobile application! Click on the Github icon for a demo. Expect it on the Google App Store and the Apple IOS Store soon! "
                />

                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_CONTEXT}
                  maxWidth={4}
                  lineHeight={1.4}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[7.2, BOT_BOT_TEXT - 2.2, -2]}
                >
                  React Native mobile application that allows users to get up to
                  date information regarding COVID-19, including a John Hopkins
                  community tracker, vaccine finder, and saftey guidelines from
                  the CDC. Built with Expo CLI and Expo libraries. Currently in
                  development!
                </Text>
              </group>
              {/*    CareMoms App */}
              <group>
                {" "}
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_HEADER}
                  maxWidth={200}
                  lineHeight={1}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[12, BOT_TITLE_TEXT, -2]}
                >
                  CareMoms
                </Text>
                <SpinningMesh
                  position={[13, BOT_TITLE_TEXT, -2]}
                  args={[0.35, 0.35, 0.002]}
                  speed={0}
                  image={github_texture}
                  url={"https://github.com/liconl/PublicMedtacglobal"}
                />
                <SpinningMesh_mobile
                  position={[12, BOT_MESH, -2]}
                  args={[1.25, 2, 0.2]}
                  speed={2}
                  image={caremoms_texture}
                  alert="CaresMom is a mobile application!  Click on the Github icon for a demo.Expect it on the Google App Store and the Apple IOS Store soon! "
                />
                <Text
                  color={TEXT_COLOR}
                  fontSize={PROJECT_CONTEXT}
                  maxWidth={4}
                  lineHeight={1.4}
                  letterSpacing={0.02}
                  textAlign={"left"}
                  position={[12.2, BOT_BOT_TEXT - 2.0, -2]}
                >
                  React Native mobile application that focuses on getting
                  COVID-19 material to low access and high hesitancy areas,
                  including low-socioeconomic and POC areas. Built with Expo CLI
                  and Expo libraries. Currently in early development!
                </Text>
              </group>
            </group>
          </group>
        </group>

        <Sky />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Home;
