import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";

const BookCardDetail = () => {
  const [searchParams] = useSearchParams();

  const b_name = searchParams.get("b_name");
  const b_code = searchParams.get("b_code");
  const b_writer = searchParams.get("b_writer");
  const b_amount = searchParams.get("b_amount");
  const b_price = searchParams.get("b_price");
  const b_regdate = searchParams.get("b_regdate");
  const b_content = searchParams.get("b_content");
  const b_imagname = searchParams.get("b_imagname");

  return (
    <>
      <Header />
      <div className="min-h-screen border m-10 rounded-md shadow-2xl flex flex-row">
        <div className="w-2/5 p-10">
          <img src={`./images/${b_imagname}.jpeg`} alt="사진" />
        </div>

        <div className="w-3/5 p-10">
          <div className="mb-10 flex justify-center font-extrabold text-4xl">
            {b_name}
          </div>
          <ul className="mb-2 border-y">
            <li className="border-b py-4 flex justify-between">
              <span className="font-semibold">도서코드</span>
              <span className="">{b_code}</span>
              <span></span>
              <span></span>
            </li>
            <li className="border-b py-4 flex justify-between">
              <span className="font-semibold">저자</span>
              <span>{b_writer}</span>
              <span></span>
              <span></span>
            </li>
            <li className="border-b py-4 flex justify-between">
              <span className="font-semibold">도서 수량</span>
              <span>{b_amount}</span>
              <span></span>
              <span></span>
            </li>
            <li className="border-b py-4 flex justify-between">
              <span className="font-semibold">대여 가격</span>
              <span>{b_price}</span>
              <span></span>
              <span></span>
            </li>
            <li className="border-b py-4 flex justify-between">
              <span className="font-semibold">도서 등록일</span>
              <span>{b_regdate}</span>
              <span></span>
              <span></span>
            </li>
            <li className="border-b py-4 ">
              <h3 className="font-semibold">줄거리</h3>
              <h2 className="mt-4">{b_content}</h2>
            </li>
          </ul>
          <div className="mt-6">
            <span className="p-3 mr-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              대여 신청
            </span>
            <span className="p-3 ml-2 bg-white hover:bg-blue-100 text-blue-500 border border-blue-500 rounded-lg">
              목록
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCardDetail;
