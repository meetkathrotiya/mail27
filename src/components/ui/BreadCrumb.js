import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumb= () => {
  let curl = useRouter();

  let currentLink = '';
  console.log(curl)

const crumbs = curl.pathname.split('/')
.filter(crumb => crumb !== '')
.map((crumb, index) => {
  crumb = curl.asPath.split('/').filter(crumb => crumb !== '')[index]
  currentLink += `/${crumb}`;
  let urlLength = curl.pathname.split('/')
  .filter(crumb => crumb !== '').length
  let isNext = false;

  if (index + 1 < urlLength) {
    isNext = true;
  }
  var newcrumb = crumb.replace(/-/, ' ')
  return (    
    <Link href={currentLink} className={`text-sm text-blacklight dark:text-white hover:text-black/80 dark:hover:text-white/80 ${isNext ? 'text-black/40 dark:text-white/40' : ''}`} key={crumb}>
      <span className="ml-1 d-inline-block font-normal capitalize">/ {newcrumb}</span>
    </Link>
  )
})

  return (
    <>
      {crumbs}
    </>
  ); 
};

export default BreadCrumb;
