import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/layouts/layout";

const StoreSettings = [
  {
    title: "Store Details",
    href: "/store-details",
  },
  {
    title: "Permissions",
    href: "/permissions",
  },
  {
    title: "Checkout",
    href: "/checkout",
  },
  {
    title: "Payment Gateways",
    href: "/payment-gateways",
  },
  {
    title: "Shipping & Delivery",
    href: "/shipping-delivery",
  },
  {
    title: "Taxes",
    href: "/taxes",
  },
  {
    title: "Brand Assets",
    href: "/brand-assets",
  },
  {
    title: "Email Settings",
    href: "/email-settings",
  },
];

const TabList = () => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <>
      <div className={" overflow-x-auto "}>
        <div className="flex mb-5 xxl:w-auto w-[870px]">
          {StoreSettings.map((navi, index) => (
            <div key={index}>
              <Link href={navi.href}>
                <span className={`tabs-main ${location === navi.href ? "selected  relative" : ""}`}>
                  <span
                    className={`${
                      location === navi.href ? "font-semibold text-blacklight dark:text-secondary-purpleb" : ""
                    }`}
                  >
                    {navi.title}
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabList;
