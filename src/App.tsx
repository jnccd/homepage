import "./App.css";
import { VStack } from "@chakra-ui/react";
import HewwoText from "./components/hewwoText";
import Clippy from "./components/clippy/clippy";
import Oneko from "./components/oneko/oneko";
import Mousetrail from "./components/mousetrail";

function App() {
  return (
    <VStack
      width="100vw"
      height="100vh"
      id="background"
      backgroundColor="#1E2220"
    >
      <HewwoText />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nlLhw1mtCFA?si=HQ84MzxVPFqRz0HY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <Clippy />
      <Oneko />
      <Mousetrail />
    </VStack>
  );
}

export default App;
