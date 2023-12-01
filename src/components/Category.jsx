import CategoryCard from "./CategoryCard";

const Category = ({ setCategory }) => {
  const CategoryData = [
    "전체목록",
    "역사",
    "정치",
    "경제",
    "과학",
    "소설",
    "인문",
    "시",
    "컴퓨터",
  ];
  return (
    <div className="w-1/4 p-4">
      <div className=" text-2xl h-16 mb-2 flex justify-center items-center font-bold">
        카테고리
      </div>
      <div className="flex flex-col">
        {CategoryData.map((v, i) => (
          <CategoryCard key={i} categoryData={v} setCategory={setCategory} />
        ))}
      </div>
    </div>
  );
};

export default Category;
