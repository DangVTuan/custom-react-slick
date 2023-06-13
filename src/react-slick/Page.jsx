/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, memo, useRef, useState } from "react";
import "./Page.css";

const Children = memo(
  forwardRef((props, ref) => {
    const { data, currentIndex } = props;
    console.log("render", data);
    return (
      <div
        ref={ref}
        className="Children"
        style={{
          display: "flex",
          msOverflowX: "auto",
          width: `100%`,
          position: "absolute",
          left: `${-currentIndex * 300}px`,
        }}
      >
        {data.map((item) => {
          // console.log("indexCon", index);
          return (
            <div
              key={item.id}
              className=""
              style={{ flex: "0 0 100%", scrollSnapAlign: "center" }}
            >
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    );
  })
);



function Page() {
  const [data, setData] = useState([
    { id: 111, title: 111 },
    { id: 2222, title: 222 },
  ]);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleAddData() {
    setData((prev) => [
            ...prev,
            { id: 1, title: 1 },
            { id: 2, title: 2 },
            { id: 3, title: 3 },
            { id: 4, title: 4 },
            { id: 5, title: 5 },
          ])
  }

  const handleNextSlide = () => {
    console.log("aaaaa", carouselRef.current);
    setCurrentIndex((prevIndex) => prevIndex + 1);

    const maxCall = data.length - currentIndex
    if(maxCall < 3) {
      handleAddData()
    } 
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1); 
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="carousel" style={{ display: "flex" }}>
          <button onClick={handlePrevSlide}>Prev</button>
          <div
            className="carousel-slide"
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "#ccc",
              // overflow: "hidden",
              position: "relative",
            }}
          >
            <Children
              ref={carouselRef}
              data={data}
              currentIndex={currentIndex}
            />
          </div>
          <button onClick={() => handleNextSlide()}>Next</button>
        </div>
      </div>
      <button
        onClick={() =>
          setData((prev) => [
            ...prev,
            { id: 1, title: 1 },
            { id: 2, title: 2 },
            { id: 3, title: 3 },
            { id: 4, title: 4 },
            { id: 5, title: 5 },
          ])
        }
      >
        click
      </button>
    </div>
  );
}

export default Page;
