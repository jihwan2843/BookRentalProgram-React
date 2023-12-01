import Header from "../components/Header";
import { useState } from "react";

const Login = () => {
  const [id, setId] = useState();
  const [passwd, setPasswd] = useState();

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePasswd = (e) => {
    setPasswd(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-2/5 h-[70px] border rounded-t-xl border-gray-200 bg-gray-100 flex justify-center pt-2">
          <h2 className="mb-10 p-4 font-bold">로그인</h2>
        </div>

        <div className="w-2/5 h-[270px] border rounded-b-xl border-gray-200">
          <form onSubmit="">
            <h2 className="mb-1 pl-4 py-2 ">ID</h2>
            <div className="px-4">
              <input
                className="border pl-1 mb-2 w-full h-[34px]"
                type="text"
                value={id}
                onChange={onChangeId}
                placeholder="ID를 입력하세요"
              />
            </div>
            <h5 className="ml-4 font-light text-xs">
              We'll never share your ID with anyone else.
            </h5>

            <h2 className="my-1 pl-4 py-2">Password</h2>
            <div className="px-4">
              <input
                className="border mb-2 pl-1 w-full h-[34px]"
                type="password"
                value={passwd}
                onChange={onChangePasswd}
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            <div className="flex justify-center">
              <input
                className="mt-3 px-3 py-2 flex bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-lg"
                type="submit"
                value="로그인"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
