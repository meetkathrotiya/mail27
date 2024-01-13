import React from "react";

export default function OtpInput({ value, valueLength, onChange }) {
  const RE_DIGIT = new RegExp(/^\d+$/);

  const inputOnChange = (e, idx) => {
    const target = e.target;
    const targetValue = target.value;

    if (!RE_DIGIT.test(targetValue)) {
      let sibling = target.previousElementSibling;
      if (sibling) {
        sibling.focus();
      }
      return;
    }
    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);
    onChange(newValue);

    let sibling = target.nextElementSibling;

    if (sibling) {
      sibling.focus();
    }
  };

  return (
    <div className="otp-group">
      {[1, 2, 3, 4, 5, 6].map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className="otp-input focus:border-black/20s"
          onKeyDown={(e) => inputOnChange(e, idx)}
        />
      ))}
    </div>
  );
}
