import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { TypeAnimation } from "react-type-animation";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex
    flex-col items-center justify-center h-screen"
    >
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <>
          <div>
            <TypeAnimation
              sequence={[
                "Congrats!",
                1000,
                "Your order has been successfully done.",
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
                color: "#36d7b7",
              }}
              repeat={Infinity}
            />
          </div>
          <div>
            <button
              className="p-3 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm mt-4"
              onClick={() => navigate("/")}
            >
              Go to Home
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Success;
