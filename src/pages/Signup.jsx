import { useState } from "react";
import Header from "../components/Header";

const Signup = () => {
  const [id, setId] = useState();
  const [passwd, setPasswd] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePasswd = (e) => {
    setPasswd(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onSubmitSignup = () => {};

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-2/5 h-[70px] border rounded-t-xl border-gray-200 bg-gray-100 flex justify-center pt-2">
          <h2 className="mb-10 p-4 font-bold">회원가입</h2>
        </div>

        <div className="w-2/5 h-[570px] border rounded-b-xl border-gray-200">
          <form onSubmit={onSubmitSignup}>
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
            <button className="ml-4 my-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
              중복 확인
            </button>

            <h2 className="mb-1 pl-4 py-2">비밀번호</h2>
            <div className="px-4">
              <input
                className="border mb-2 pl-1 w-full h-[34px]"
                type="password"
                value={passwd}
                onChange={onChangePasswd}
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            <h2 className="mb-1 pl-4 py-2"> 이름</h2>
            <div className="px-4">
              <input
                className="border mb-2 pl-1 w-full h-[34px]"
                type="text"
                value={name}
                onChange={onChangeName}
                placeholder="이름을 입력하세요"
              />
            </div>

            <h2 className="mb-1 pl-4 py-2">이메일</h2>
            <div className="px-4">
              <input
                className="border mb-2 pl-1 w-full h-[34px]"
                type="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="이메일을 입력하세요"
              />
            </div>

            <h2 className="mb-1 pl-4 py-2">핸드폰</h2>
            <div className="px-4">
              <input
                className="border mb-2 pl-1 w-full h-[34px]"
                type="text"
                value={phone}
                onChange={onChangePhone}
                placeholder="핸드폰 번호를 입력하세요"
              />
            </div>
            <div className="flex justify-center">
              <input
                className="mt-3 px-3 py-2 flex bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-lg"
                type="submit"
                value="가입하기"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
