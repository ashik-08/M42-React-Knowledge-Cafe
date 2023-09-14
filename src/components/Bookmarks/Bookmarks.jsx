import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <section className="md:w-1/3 mt-12">
      <div className="bg-[#6047ec1a] rounded-lg text-center py-5">
        <h2 className="text-[#6047EC] text-xl font-bold">
          Spent time on read : {readingTime}
        </h2>
      </div>
      <div className="h-fit bg-[#1111110D] rounded-lg mt-6 p-7">
        <h2 className="text-xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => 
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        )}
      </div>
    </section>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
