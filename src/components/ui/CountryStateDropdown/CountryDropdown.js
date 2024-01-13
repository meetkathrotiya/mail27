import React, { useState } from "react";
import CountryRegionData from "../../../../data.json";
import Selecticon from "@/assets/images/icon/selecticon.svg";
import Image from "next/image";

const CountryDropdown = (props) => {
  function filterCountries(countries, priorityCountries, whitelist, blacklist) {
    let countriesListedFirst = [];
    let filteredCountries = countries;

    if (whitelist > 0) {
      filteredCountries = countries.filter(
        ([, countrySlug]) => whitelist.indexOf(countrySlug) > -1
      );
    } else if (blacklist > 0) {
      filteredCountries = countries.filter(
        ([, countrySlug]) => blacklist.indexOf(countrySlug) === -1
      );
    }

    if (priorityCountries > 0) {
      // ensure the countries are added in the order in which they are specified by the user
      priorityCountries.forEach((slug) => {
        const result = filteredCountries.find(
          ([, countrySlug]) => countrySlug === slug
        );
        if (result) {
          countriesListedFirst.push(result);
        }
      });

      filteredCountries = filteredCountries.filter(
        ([, countrySlug]) => priorityCountries.indexOf(countrySlug) === -1
      );
    }

    return countriesListedFirst.length
      ? [...countriesListedFirst, ...filteredCountries]
      : filteredCountries;
  }

  const [countries, setCountries] = useState(
    filterCountries(
      CountryRegionData,
      props.priorityOptions,
      props.whitelist,
      props.blacklist
    )
  );

  function getCountries() {
    const { valueType, labelType } = props;

    return countries.map((country) => {
      let selected = props.defaultCountry == country.countryName ? true : false;
      return (
        <option
          className="dark:text-blacklight"
          selected={selected}
          value={
            valueType === "short" ? country.countrySlug : country.countryName
          }
          key={country.countrySlug}
        >
          {labelType === "short" ? countrySlug : country.countryName}
        </option>
      );
    });
  }
  function getDefaultOption() {
    return (
      <option value="" key="" className="dark:text-blacklight">
        India
      </option>
    );
  }
  return (
    <div className="relative">
      <select
        className={`${props.className} w-full cursor-pointer appearance-none dark:bg-transparent outline-none focus:outline-none pr-4 bg-transparent`}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {getCountries()}
      </select>
      {props.removearrow == "true" ? (
        ""
      ) : (
        <Image
          src={Selecticon}
          alt=""
          className="dark:invert absolute right-0 top-[50%] translate-y-[-50%] pointer-events-none"
        />
      )}
    </div>
  );
};

export default CountryDropdown;
