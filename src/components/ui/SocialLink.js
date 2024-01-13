import React, {useState, useEffect} from "react";
import Image from "next/image";
import Warning from "@/assets/images/icon/Warning.svg";

const SocialLink = ({ social }) => {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [previouseValidValue, setPreviousValidValue] = useState("");

  const validateUrl = (e) => {
    const { value } = e.target;

    const regex = new RegExp('(http?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    

    const isValid = !value || regex.test(String(value).toLowerCase())
    setIsValid(isValid);
    if (isValid) {
      setPreviousValidValue(url)
    } else {
      setUrl(previouseValidValue)
      setTimeout(() => {
        setIsValid(true);
      }, 500)
    }
  }

  const onChangeUrl = (e) => {
    const { value } = e.target;
    setUrl(value);
  }
  
  useEffect(() => {
    setPreviousValidValue(url)
  }, [])

  return (
    <>
      <div className={`border rounded-lg transition-all duration-300 border-black/10 dark:border-white/10 px-5 py-4 flex flex-col ${isValid ? 'border-black/10' : 'border-secondary-red'}`}>
        <label
          htmlFor={""}
          className="text-xs leading-[18px] pb-1 text-black/40 dark:text-white/40"
        >
          {social.name}
        </label>
        <input type="text" value={url} onBlur={(e) => validateUrl(e)} onChange={(e) => onChangeUrl(e)} placeholder="Please enter link" name={social.name} className={` transition-all duration-300 text-blacklight text-sm dark:text-white outline-none bg-transparent ${isValid ? 'text-blacklight' : 'text-secondary-red'}`} />
      </div>
    </>
  );
};
export default SocialLink;
