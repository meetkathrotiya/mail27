import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Userid from "@/assets/images/users/main-user.png";
import dashboard from "@/assets/images/icon/dashboard.svg";
import customers from "@/assets/images/icon/customers.svg";
import StoreDetails from "@/assets/images/icon/store-details.svg";
import Closebtn from "@/assets/images/icon/closeicon.svg";
import Article from "@/assets/images/icon/article.svg";
import { useState } from "react";
import Accordion from "@/layouts/sidebars/vertical/Accordion"


const Home = [
  {
    title: "Benefits",
    href: "/benefits",
    icon: StoreDetails,
  },
  {
    title: "Faq",
    href: "/faq",
    icon: dashboard,

  },
  {
    title: "User Reflection",
    href: "/user-reflection",
    icon: customers,

  },
  {
    title: "Articles",
    href: "/articles",
    icon: Article,

  },
];

const Sidebar = ({ Mobilemenu, showMobilemenu, showMobile }) => {
  let curl = useRouter();
  const location = curl.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false)
 
  return (
    <>
      <div className="h-screen flex justify-between flex-col">
        <div className="py-5 relative z-50 h-full">
          <div className="flex items-center relative px-4">
          <div className={`flex items-center gap-[6px] transition-all duration-300 ease-in`}>
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
              <Image src={Userid} />
            </div>
            <p className="text-left text-sm font-semibold text-black/80 dark:text-white/80">Heena Vinayak</p>
          </div>
            <span className="ml-3 lgm:hidden block">
              <button onClick={showMobilemenu} className="flex">
                <Image src={Closebtn} alt="" className="w-6 dark:invert" />
              </button>
            </span>
          </div>
          <div className="overflow-auto h-[calc(100vh-120px)] px-4 custom-scrollbar mt-8">
            <div className="sidebar-left">
              <div className="mt-3">
                <Accordion className={`list-none flex-col`} title={'Home'} name={'Home'} >
                  <div className="">
                    {Home.map((navi, index) => (
                      <div key={index}>
                        <Link href={navi.href} onClick={showMobile}>
                          <span
                            className={`nav-link flex items-center hover:opacity-70 w-full font-semibold transition-all text-sm py-[6px] pl-3 rounded-lg relative ${location === navi.href || curl.query[navi.href.replace("/", "block")]
                              ? "bg-black/5 dark:bg-white/5 transition-all active hover:opacity-100 after:w-1 after:h-4 after:absolute after:top-[50%] after:bg-black dark:after:bg-secondary-purpleb after:rounded-[3px] after:left-0 after:translate-y-[-50%]"
                              : ""
                              }`}
                          >
                            <Image src={navi.icon} alt="" className="dark:invert" />
                            <span className="ml-1 d-inline-block font-normal text-black dark:text-white">{navi.title}</span>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Accordion>
              </div>
              <div className="mt-3">
                <Link href="/category">
                   <h4 className="text-black font-medium"> Categories </h4>           
                </Link>
              </div>
            </div>
          </div>
          {/* <Link href="/" className="bottom-0 left-0 px-3 flex justify-center w-full" onClick={showMobile}>
            <Image src='{}' alt="" className="dark:invert mb-6" />
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
