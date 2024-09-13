import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);

  const feedFood = (points) => {
    if (level < 100) {
      setLevel(level + points);
    }
  };

  const imageSize = level >= 100 ? 300 : 100 + level * 2; // ขนาดภาพเมื่อถึง level 100 จะพอดีกับเส้นปะ

  return (
    <div className="app">
      <h1>Level {level}</h1>

      <div className="img-container" style={{ border: "2px dashed #999", width: "300px", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {level >= 100 ? (
          <img
            src="/cat.jpg"
            alt="Special Image"
            style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
          />
        ) : (
          <img
            src="/หมูเด้ง.jpg"
            alt="หมูเด้ง"
            style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
          />
        )}
      </div>

      <div className="container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uxYTYFKqYYENEa2DniSRG-HMc0eObhLymw&s"
          alt="แตงโม"
          onClick={() => feedFood(5)}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuOiTeV3GLsunlvLi7GdBsc280rf_L-dUQQ&s"
          alt="ฟักทอง"
          onClick={() => feedFood(10)}
        />
        <img
          src="/หญ้า.jpg"
          alt="หญ้า"
          onClick={() => feedFood(20)}
        />
      </div>
    </div>
  );
}
