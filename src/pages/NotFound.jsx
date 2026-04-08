import { FaExclamationTriangle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className=' flex flex-col items-center my-30'>
      <FaExclamationTriangle className='text-[120px] text-red-600' />
      <h1 className='text-[30px] md:text-[50px]'>404 Not Found</h1>
      <p className='text-[18px] md:text-[20px] font-semiold mb-10'>This page does not exist yet</p>
      <p onClick={goBack} className='goback text-white text-[14px] cursor-pointer bg-[#9dcff8] px-3 py-2 rounded-lg hover:bg-[#b8ddfc] '>
        Go back
      </p>
    </div>
  );
};

export default NotFound;
