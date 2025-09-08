import { useEffect } from "react";
import "./oneko.css";

const Oneko = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./oneko/oneko.js";
    script.setAttribute("data-cat", "./oneko/oneko.gif");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);

  return <div id="oneko" aria-hidden="true"></div>;
};

export default Oneko;
