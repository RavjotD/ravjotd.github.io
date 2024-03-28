import React, {useEffect} from "react";
import Lottie from "react-lottie";
import animationData from "./Animation-.json"

const Typing = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="flex justify-center">
            <Lottie options={defaultOptions} height={700} width={700} />
        </div>
    );
};

export default Typing;