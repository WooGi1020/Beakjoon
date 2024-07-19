import { useEffect, useState, useRef } from "react";
import "./App.css";
import ReviewList from "./components/ReviewList";
import { getReviews } from "./api";

// const LIMIT = 6;

const mockData = [
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
  {
    word: "안녕",
  },
];

function App() {
  //   const [order, setOrder] = useState("createdAt");
  //   const [items, setItems] = useState([]);
  //   const [offset, setOffset] = useState(0);
  //   const sortedItems = items.sort((a, b) => b[order] - a[order]);

  //   const handleNewestClick = () => {
  //     setOrder("createdAt");
  //   };
  //   const handleBestClick = () => {
  //     setOrder("rating");
  //   };
  //   const handleDelete = (id) => {
  //     const nextItems = items.filter((item) => item.id !== id);
  //     setItems(nextItems);
  //   };
  //   const handleLoad = async (options) => {
  //     const { reviews } = await getReviews(options);
  //     if (options.offset === 0) {
  //       setItems(reviews);
  //     } else {
  //       setItems([...items, ...reviews]);
  //     }
  //     setOffset(options.offset + reviews.length);
  //   };
  //   const handleLoadMore = () => {
  //     handleLoad({ order, offset, limit: LIMIT });
  //   };
  //   useEffect(() => {
  //     handleLoad({ order, offset: 0, limit: LIMIT });
  //   }, [order]);
  const newArr = Array.from({ length: mockData.length }, (_, i) => i + 1);
  console.log(newArr[0]);
  const dataRef = useRef();

  return (
    <div>
      <div className="wrapper" ref={dataRef}>
        {/* <button onClick={handleNewestClick}>최신순</button>
    <button onClick={handleBestClick}>베스트순</button>
    <ReviewList items={sortedItems} onDelete={handleDelete} />
    <button onClick={handleLoadMore}>더보기</button> */}
        {mockData.map((data, idx) => {
          return (
            <div key={idx} className={`dataCon ${idx}`}>
              <p>{data.word}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          dataRef.current.scrollBy(100, 0);
        }}
      >
        다음
      </button>
    </div>
  );
}

export default App;
