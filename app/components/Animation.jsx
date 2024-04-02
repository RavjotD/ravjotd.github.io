import React, {useEffect,useState} from "react";
import Lottie from "react-lottie";
import animationData from "./Animation-.json"

const Typing = () => {
    const [animationSize, setAnimationSize] = useState({ width: 750, height: 750 });

    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          // Adjust the size based on screen width
          if (screenWidth <= 1024) {
            setAnimationSize({ width: 200, height: 150 });
          } else {
            setAnimationSize({ width: 750, height: 750 });
          }
        };
    
        // Call handleResize on initial render
        handleResize();
    
        // Attach event listener for window resize
        window.addEventListener("resize", handleResize);
    
        // Remove event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
      }, []);


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="flex justify-center px-14 ">
      <Lottie options={defaultOptions} height={animationSize.height} width={animationSize.width} />
        </div>
    );
};

export default Typing;