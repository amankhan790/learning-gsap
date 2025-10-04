import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const randomX = gsap.utils.random(-300, 300, 0);
  const randomY = gsap.utils.random(-300, 300, 50);
  const rotation = gsap.utils.random(-360, 360, 30);

  const [xValue, setXvalue] = useState(0);
  const [yValue, setYvalue] = useState(0);
  const [rotateX, setrotateX] = useState(0);
  const btnRef = useRef();

  useGSAP(
    () => {
      gsap.to(btnRef.current, {
        x: xValue,
        y: yValue,
        duration: 0.5,
        rotate: rotateX,
      });
    },
    { scope: ".main", dependencies: [xValue, rotateX, yValue] }
  );

  return (
    <div>
      <div className="main">
        <div
          onMouseOver={() => {
            setXvalue(randomX);
            setYvalue(randomY);
            setrotateX(rotation);
          }}
          ref={btnRef}
          className="circle"
        >
          Catch Me if u can
        </div>
      </div>
    </div>
  );
};

export default App;
