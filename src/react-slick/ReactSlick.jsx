/* eslint-disable react/prop-types */
import { memo, useRef, useState, useEffect } from "react";
import "./ReactSlick.css";

// eslint-disable-next-line react/display-name
const Children = memo((props) => {
    const { data, animateNextSlide } = props;
    const childrenRef = useRef(null);
    const [transitionEnabled, setTransitionEnabled] = useState(false);

    useEffect(() => {
        if (animateNextSlide) {
            setTransitionEnabled(true);
            const childrenElement = childrenRef.current;
            childrenElement.style.transform = `translateX(-300px)`;
        }
    }, [animateNextSlide]);

    const handleTransitionEnd = () => {
        if (transitionEnabled) {
            setTransitionEnabled(false);
            const childrenElement = childrenRef.current;
            childrenElement.style.transform = "";
        }
    };

    return (
        <div
            ref={childrenRef}
            className={`carousel-children ${transitionEnabled ? "transition-enabled" : ""}`}
            onTransitionEnd={handleTransitionEnd}>
            {data.map((item) => {
                return (
                    <div key={item.id} className="carousel-child">
                        <p>{item.title}</p>
                    </div>
                );
            })}
        </div>
    );
});

function ReactSlick() {
    const [data, setData] = useState([
        { id: 111, title: 111 },
        { id: 2222, title: 222 },
    ]);
    const [animateNextSlide, setAnimateNextSlide] = useState(false);

    const handleNextSlide = () => {
        setAnimateNextSlide(true);
    };

    return (
        <div>
            <div className="carousel" style={{ display: "flex" }}>
                <button>Prev</button>
                <div className="carousel-slide">
                    <Children data={data} animateNextSlide={animateNextSlide} />
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

export default ReactSlick;
