import { Link } from "react-router-dom";

const BookCardList = ({ bookListData }) => {
  return (
    <div className="border h-80">
      <img
        className="w-[300px] h-[200px]"
        src={`./images/${bookListData.b_imagname}.jpeg`}
        alt="이미지"
      />
      <Link
        className="py-1 font-semibold"
        to={`/bookList/${bookListData.b_no}?b_name=${bookListData.b_name}&b_code=${bookListData.b_code}&b_regdate=${bookListData.b_regdate}&b_writer=${bookListData.b_writer}&b_price=${bookListData.b_price}&b_imagname=${bookListData.b_imagname}&b_amount=${bookListData.b_amount}&b_content=${bookListData.b_content}`}
      >
        {bookListData.b_name}
      </Link>
      <div className="py-1 text-sm h-[90px] text ellipsis overflow-hidden">
        {bookListData.b_content}
      </div>
    </div>
  );
};

export default BookCardList;
