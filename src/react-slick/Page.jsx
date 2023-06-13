/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, memo, useEffect, useRef, useState } from "react";
import "./Page.css";

const Children = memo(
  forwardRef((props, ref) => {
    const { data, currentIndex, setListRef } = props;
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
          transition: 'all linear 1s',
          height: '100%',
        }}
      >
        {data.map((item, index) => {
          // console.log("indexCon", index);
          return (
            <ChildrenItem index={index} setListRef={setListRef} key={item.id} title={item.title} />
          )
        })}
      </div>
    );
  })
);


const ChildrenItem = ({ title, setListRef, index }) => {

  const refChildren = useRef(null)


  useEffect(() => {

    if (!refChildren.current) return;

    setListRef(prev => ([...prev, refChildren]))
  }, [refChildren.current])

  return <div
    ref={refChildren}
    data-index={index}
    className=""
    style={{ flex: "0 0 100%", scrollSnapAlign: "center" }}
  >
    <p>{title}</p>
  </div>

}


function Page() {
  const [data, setData] = useState([
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
    { id: Math.random(), title: Math.random() },
  ]);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('')

  const [listRef, setListRef] = useState([])

  const parentRef = useRef(null)

  const getMostVisibleVideo = () => {
    let mostVisibleVideo = null;
    let maxVisibleRatio = 0;

    listRef &&
      listRef.length > 0 &&
      listRef.forEach((videoRef) => {
        const video = videoRef.current;
        const visibleRatio = getVisibleRatio(video, parentRef.current);

        if (visibleRatio > maxVisibleRatio) {
          mostVisibleVideo = video;
          maxVisibleRatio = visibleRatio;
        }
      });

    return mostVisibleVideo;
  };

  useEffect(() => {
    if (!parentRef.current && !listRef.length) return;

    window.addEventListener('mouseup', function () {
      const element = (getMostVisibleVideo())

      if (element) {
        const dataIndex = element.getAttribute('data-index')

        const DonVI = -dataIndex * 300

        console.log(DonVI, carouselRef.current)

        if (!carouselRef.current) return;

        //display: flex;width: 100%;position: absolute;left: -300px;transition: all 1s linear 0s;height: 100%;
        //display: flex; width: 100%; position: absolute; left: -300px; transition: all 1s linear 0s; height: 100%;

        // setCurrentIndex(+dataIndex)

        try {
          carouselRef.current.scrollIntoView({ block: "start", inline: "nearest" })
          carouselRef.current.style.left = `${DonVI}px`
        } catch (error) {
          console.log(error)
        }

      }

    })

    return () => window.removeEventListener('mouseup', function () {
      console.log(getMostVisibleVideo())
    })

  }, [parentRef.current, listRef])

  const getVisibleRatio = (element, parentElement) => {
    const rect = element.getBoundingClientRect();
    const parentRect = parentElement.getBoundingClientRect();
    const visibleHeight = Math.min(rect.bottom, parentRect.bottom) - Math.max(rect.top, parentRect.top);
    const visibleWidth = Math.min(rect.right, parentRect.right) - Math.max(rect.left, parentRect.left);
    const visibleArea = visibleHeight * visibleWidth;
    const elementArea = rect.height * rect.width;
    return visibleArea / elementArea;
  };

  function handleAddData() {
    setData((prev) => [
      ...prev,
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },
      { id: Math.random(), title: Math.random() },


    ])
  }

  const handleGotoSlider = () => {
    setCurrentIndex(input)
  }

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);

    const maxCall = data.length - currentIndex
    if (maxCall < 3) {
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
            ref={parentRef}
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
              setListRef={setListRef}
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
      <input placeholder="Nhap Slide GoTO" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleGotoSlider}>Goto</button>
    </div>
  );
}

export default Page;
