import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CoursePage";
import QuestionPage from "./pages/QuestionPage";
import WishListPage from "./pages/WishlistPage";
import QuestionListPage from "./pages/QuestionListPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>

          <Route path="wishlist" element={<WishListPage />} />
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route path=":questionSlug" element={<QuestionPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
