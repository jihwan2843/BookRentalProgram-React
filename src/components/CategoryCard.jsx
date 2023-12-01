import { Link } from "react-router-dom";

const CategoryCard = ({ categoryData, setCategory }) => {
  return (
    <Link
      className="p-4 border mb-1 border-gray-300 rounded-md"
      to={`/bookList?category=${categoryData}`}
      onClick={() => setCategory(categoryData)}
    >
      {categoryData}
    </Link>
  );
};

export default CategoryCard;
