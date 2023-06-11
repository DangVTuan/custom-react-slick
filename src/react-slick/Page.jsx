/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, memo, useRef, useState } from "react";
import "./Page.css";

const Children = memo(
    forwardRef((props, ref) => {
        console.log("render");
        console.log(props.data);
        return (
            <div
                ref={ref}
                style={{ display: "flex", msOverflowX: "auto", scrollSnapType: "x mandatory", width: "100%", position: "relative" }}>
                {props.data.map((item) => {
                    return (
                        <div key={item.id} className="" style={{ flex: "0 0 100%", scrollSnapAlign: "center" }}>
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
    const screen = useRef(null)
    const carouselRef = useRef(null);

    const handleNextSlide = () => {
        console.log("aaaaa", screen.current);
        // screen.current.style.left = 
        // setData((prev) => [...prev.slice(1), prev[0]]);
        // const carouselSlide = carouselRef.current;
        // carouselSlide.style.transform = `translateX(-300px)`;

        //  const carouselSlide = carouselRef.current;
        //  const currentOffset = carouselSlide.getBoundingClientRect().left;
        //  const nextOffset = currentOffset - 300;
        //  carouselSlide.style.transform = `translateX(${nextOffset}px)`;
    };
    return (
        <div>
            <div className="carousel" style={{ display: "flex" }}>
                <button>Prev</button>
                <div
                    className="carousel-slide"
                    ref={carouselRef}
                    style={{
                        width: "300px",
                        height: "200px",
                        backgroundColor: "#ccc",
                        overflow: "hidden",
                        transition: "transform 0.5s ease",
                    }}>
                    <div className="carousel-slide-inner">
                        <Children ref={screen} data={data} />
                    </div>
                </div>
                <button onClick={handleNextSlide}>Next</button>
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
                }>
                click
            </button>
        </div>
    );
}

export default Page;
