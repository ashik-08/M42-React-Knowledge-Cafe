import PropTypes from "prop-types";
import bookmarkbutton from '../../assets/images/bookmark.svg';

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const { id, cover, author, author_img, posted_date, reading_time, title, hashtags } = blog;

  return (
    <div className={id !== 4 && "border-b-2"}>
      <img className="mt-12 w-full rounded-lg" src={cover} alt="cover-image" />
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-6">
          <img className="w-14" src={author_img} alt="author-image" />
          <div>
            <p className="text-xl font-bold">{author}</p>
            <p className="text-[#11111199] text-sm font-semibold">{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
            <span className="text-[#11111199] text-lg font-medium">{reading_time} min read</span>
            <button onClick={() => handleAddBookmark(blog)}><img src={bookmarkbutton} alt="bookmark-btn-icon" /></button>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-4">{title}</h2>
      <p>
        {
            hashtags.map((hash, idx) => <span className="text-[#11111199] font-medium mr-3" key={idx}><a href="">#{hash}</a></span>)
        }
      </p>
      <button className="mt-5 mb-8 text-[#6047EC] text-lg font-semibold underline" onClick={() => handleMarkAsRead(id, reading_time)}>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;
