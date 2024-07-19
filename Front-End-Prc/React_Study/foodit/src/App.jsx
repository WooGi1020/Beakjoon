import "./App.css";
import FoodList from "./components/FoodList";
import ReviewForm from "./components/ReviewForm";
import { useState } from "react";
import { getData, createData, updateData } from "./components/api";
import { useEffect } from "react";

const LIMIT = 0;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const orderedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewstClick = () => {
    setOrder("createdAt");
  };

  const handleCaloriestClick = () => {
    setOrder("calorie");
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((items) => items.id !== id);
    setItems(nextItems);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getData(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { foods, paging } = result;
    if (options.offset === 0) {
      setItems(foods);
    } else {
      setItems((prevItems) => [...prevItems, ...foods]);
    }
    setOffset(options.offset + options.length);
    setHasNext(paging.hasNext);
  };

  const handleCreateSuccess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  };

  const handleUpdateSuccess = (review) => {
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id);
      return [...prevItems.slice(0, splitIdx), review, ...prevItems.slice(splitIdx + 1)];
    });
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <>
      <div>
        <button onClick={handleNewstClick}>최신순</button>
        <button onClick={handleCaloriestClick}>칼로리순</button>
      </div>
      <ReviewForm onSubmit={createData} onSubmitSucess={handleCreateSuccess} />
      <FoodList
        items={orderedItems}
        onDelete={handleDelete}
        onUpdate={updateData}
        onUpdateSuccess={handleUpdateSuccess}
      />
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </>
  );
}

export default App;
