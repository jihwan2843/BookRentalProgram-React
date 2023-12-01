import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-gray-100 h-20 p-6">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row items-center">
          <Link className="font-bold text-3xl" to="/">
            TECHIT 도서대여
          </Link>
          <ul className="flex flex-row items-center ml-10">
            <Link className="pr-2" to="/bookList">
              도서목록
            </Link>
            <li className="px-2">게시판</li>
          </ul>
        </div>
        <div className="flex flex-row items-center">
          <Link className="border mr-2 rounded-md p-2" to="/login">
            로그인
          </Link>
          <Link className="border rounded-md p-2" to="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
