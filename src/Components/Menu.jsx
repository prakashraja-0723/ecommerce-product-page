import "../index.css";

const Menu = ({ openMenu }) => {
  return (
    <>
      <div
        className={`w-8/12 md:w-5/12 h-full bg-white p-6 text-lg lg:bg-transparent`}
      >
        <svg
          className={`mb-14 cursor-pointer lg:hidden`}
          width="	14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={openMenu}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#000"
            // fill-rule="evenodd"
          />
        </svg>

        <ul
          className={`w-full flex flex-col gap-6 font-bold lg:flex-row lg:font-normal lg:text-dark-grayish-blue lg:gap-[34px] `}
        >
          <li
            className={`cursor-pointer w-fit lg:hover:text-very-dark-blue lg:relative hover-effect after:hidden lg:after:block`}
          >
            Collections
          </li>
          <li
            className={`cursor-pointer w-fit lg:hover:text-very-dark-blue lg:hover:font-medium lg:relative hover-effect after:hidden lg:after:block`}
          >
            Men
          </li>
          <li
            className={`cursor-pointer w-fit lg:hover:text-very-dark-blue lg:hover:font-medium lg:relative hover-effect after:hidden lg:after:block`}
          >
            Women
          </li>
          <li
            className={`cursor-pointer w-fit lg:hover:text-very-dark-blue lg:hover:font-medium lg:relative hover-effect after:hidden lg:after:block`}
          >
            About
          </li>
          <li
            className={`cursor-pointer w-fit lg:hover:text-very-dark-blue lg:hover:font-medium lg:relative hover-effect after:hidden lg:after:block`}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
