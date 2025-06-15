import "./App.css";
import { Box, Image } from "@chakra-ui/react";

function App() {
  return (
    <Box width="100vw" height="100vh" id="background" backgroundColor="#1E2220">
      <Box id="le-left-div">
        <Image src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTh5cTJzNzVpeHZjdzhvNmZqbGVoY2Z0YWdxMGF1c3MyaGEwMTRqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hTB0DVUJ9Zvoowd7aW/giphy.gif"></Image>
      </Box>
      <Box id="le-right-div">
        <Image
          style={{ transform: "scaleX(-1)" }}
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTh5cTJzNzVpeHZjdzhvNmZqbGVoY2Z0YWdxMGF1c3MyaGEwMTRqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/hTB0DVUJ9Zvoowd7aW/giphy.gif"
        ></Image>
      </Box>
      <Box id="le-centered-div">
        <svg width="55vw" height="auto" viewBox="-40 -10 540 200">
          <path
            id="curve"
            d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
            fill="none"
          >
            <animate
              dur="5s"
              attributeType="XML"
              attributeName="d"
              repeatCount="indefinite"
              values="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145;
           M 16 58 C 45 110 96 141 146 146 C 213 151 232 13 266 36 c 59 36 29 108 131 102;
           M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145;"
            />
          </path>
          <text
            font-family="Comic Sans MS"
            className="glow"
            fill="pink"
            fontSize="38"
            width="500"
            textLength="80%"
            lengthAdjust="spacing"
          >
            <textPath href="#curve">Hewwo everynyaaaan</textPath>
          </text>
        </svg>
      </Box>
    </Box>
  );
}

export default App;
