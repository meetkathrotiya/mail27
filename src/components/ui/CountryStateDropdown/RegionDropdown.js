import Image from 'next/image';
import React, { PureComponent, useRef, useEffect , useState } from 'react';
import CountryRegionData from '../../../../data.json';
import Selecticon from "@/assets/images/icon/selecticon.svg";

const RegionDropdown = (props) => {
	const [regions, setRegions] = useState(getRegions(props.country));
   useEffect(() => {
		setRegions(getRegions(props.country))
   }, [props.country])

	 function getRegions(country) {
		if (!country) {
			return [];
		}

		const { countryValueType, whitelist, blacklist } = props;
		const searchIndex = (countryValueType === 'full') ? 0 : 1;
		let regions = [];
		CountryRegionData.forEach((i) => {
			if (i.countryName === country) {
				regions = i.regions;
			}
		});

		return regions;
	}

	function getRegionList() {
		return regions.map(({ name, regionCode }) => {
			const label = name;
			const value = regionCode;
			return <option value={value} key={name} className="dark:text-blacklight">{label}</option>;
		});
	}

	function getDefaultOption() {
		if (!props.country) {
			return <option value="">Please select the country first</option>;
		} else {
			
		}
		return null;
	}
  return (
	<div className="relative">
	  	<select className={`${props.className} w-full cursor-pointer appearance-none dark:bg-transparent dark:text-blacklight focus:outline-none pr-4 bg-transparent`}  onChange={(e) => props.onChange(e.target.value)}>
			{getDefaultOption()}
			{getRegionList()}
		</select>
		{props.removearrow == 'true' ? "" :
        	<Image src={Selecticon} alt="" className="dark:invert absolute right-0 top-[50%] translate-y-[-50%] pointer-events-none"/>
      	}
	</div>
  )
}

export default RegionDropdown
