import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-lg ml-4 p-4 h-3/4">
            <div className='bg-white p-1 rounded-lg'>
                <h3 className='text-4xl text-center my-2'>Reading Time: <span className='text-red-600'>{readingTime}</span></h3>
            </div>
            <div className='bg-white p-1 my-2 rounded-lg'>
                <h2 className="text-3xl text-center my-2">Bookmarked Blogs: <span className='text-red-600'>{bookmarks.length}</span></h2>
            </div>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;