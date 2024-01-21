/* eslint-disable react/prop-types */
const CategoreBox = ({ lable, icon: Icon }) => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer text-neutral-500 hover:text-neutral-800 border-b py-3">
      <Icon className={"text-2xl"}></Icon>
      <h1>{lable}</h1>
    </div>
  );
};

export default CategoreBox;
