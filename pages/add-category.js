import React, { useState, useRef } from "react"

function category({onClose }) {
  const [previewImage, setPreviewImage] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleFileChange = (event) => {

    const file = event.target.files[0];

    // Create a preview URL for the selected file
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // form Validate start
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear the error when the user starts typing again
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let hasErrors = false;
    const newErrors = { ...errors };

    if (formData.name.trim() === '') {
      newErrors.name = 'Add Subtitle Required*';
      hasErrors = true;
    }
    if (hasErrors) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
    }
  };
  // form Validate end
  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="fixed top-[0%] left-[0%] w-full h-[100vh] backdrop-blur-md z-50">
    <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[600px] bg-slate-200 p-6 rounded-2xl">
      <h2 className="2xl:text-4xl sm:text-3xl text-xl font-bold text-center text-black"> Add Category </h2>
      <form onSubmit={handleSubmit} className="w-full xl:max-w-[700px] md:max-w-[660px] border pt-1 rounded-md mx-auto">
        <div className="flex flex-col mt-3 xl:gap-3 gap-2 w-full">
          <div className="">
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Add Category Name  " className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm border-x-0 rounded-md border-t-0 border-b-1 border-b-zinc-500 bg-white" />
            <span style={{color: 'red', display: "block" ,marginTop: '2px'}}>{errors.name}</span>
          </div>
          <div className="flex justify-end gap-x-2 mt-2">
            <button className="w-full max-w-[180px] p-2 border-2 border-green-600 hover:border-green-500 !bg-green-600 hover:!bg-green-500 rounded-md font-medium text-white transition lg:text-lg text-md tracking-wide block" onClick={onClose}> Cancle </button>
            <button className="w-full max-w-[180px] p-2 border-2 border-green-600 hover:border-green-500 !bg-green-600 hover:!bg-green-500 rounded-md font-medium text-white transition lg:text-lg text-md tracking-wide block"> Save </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
};

export default category;