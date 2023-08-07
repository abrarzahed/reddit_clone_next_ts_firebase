import Lottie from "lottie-react";
import animationData from "../../public/animation.json";
export default function LottieAnimation() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
      />
    </div>
  );
}
