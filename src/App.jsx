import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import Swal from "sweetalert2";
import 'animate.css';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = (blog) => {
    
    const isExist = bookmarks.find((item) => item.id === blog.id);
    if (isExist) {
      // return alert('Already Bookmarked!!!');
      Swal.fire({
        icon: 'warning',
        title: 'Already Bookmarked !!!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    } else {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-6">
        <Blogs handleAddBookmark={handleAddBookmark}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
