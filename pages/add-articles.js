import React, { useState, useRef } from "react"
import Layout from "@/layouts/layout";

function Articles() {
  const [previewImage, setPreviewImage] = useState(null);

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
    if (!formData.nameone) {
      newErrors.nameone = 'Add Title Required*';
      hasErrors = true;
    }
    if (!formData.author) {
      newErrors.author = 'Add Author Required*';
      hasErrors = true;
    }
    if (hasErrors) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
    }
  };
  // form Validate end

  const goBack = () => {
    window.history.back();
  };

  return (
    <Layout >
      <>
        <div className='flex justify-between items-center'>
            <div className='flex'>
              <button className='flex items-center justify-center text-base px-2 py-1 h-auto border border-[#fff] hover:border hover:!border-[#000000] transition-all duration-500  border-black/20 dark:border-white/20 rounded' onClick={goBack}>
                <svg fill="#000" width="20px" height="20px" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"><path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" /></svg>
                Article
              </button>
              <span className='ml-7 text-base p-2'>Edit</span>
            </div>
        </div>
        <div className="xl:mt-10 md:mt-8 mt-6">
          <div className="">
            <h2 className="2xl:text-4xl sm:text-3xl text-xl font-semibold text-center"> Read top articles from our Astrology Blog </h2>
            <form onSubmit={handleSubmit} className="w-full xl:max-w-[700px] md:max-w-[660px] shadow-lg border md:p-5 p-4 rounded-md lg:mt-6 mt-4 mx-auto">
              <div className="">
                <div className="fileUpload rounded-md w-full xl:h-[240px] sm:h-[220px] h-[190px]">
                  <input type="file" className="!block" onChange={handleFileChange} />
                  <span className="sm:text-[18px] text-[16px]"> Upload image </span>
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Preview"
                    />
                  )}
                </div>
                <div className="flex flex-col xl:mt-4 mt-3 xl:gap-3 gap-2 w-full">
                  <div className="">
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Add sub title*" className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm border-x-0 rounded-md border-t-0 border-b-1 border-b-zinc-500 bg-stone-100" />
                    <span style={{color: 'red', display: "block" ,marginTop: '2px'}}>{errors.name}</span>
                  </div>
                  <div className="">
                    <input type="text" id="nameone" name="nameone" value={formData.nameone} onChange={handleInputChange} placeholder="Add title*" className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm border-x-0 rounded-md border-t-0 border-b-1 border-b-zinc-500 bg-stone-100" />
                    <span style={{color: 'red', display: "block" ,marginTop: '2px'}}>{errors.nameone}</span>
                  </div>
                  <div className="">
                    <input type="text" id="author" name="author" value={formData.author} onChange={handleInputChange} placeholder="Add author name*" className="w-full xl:py-3 xl:px-4 py-2 px-3 xl:text-base text-sm border-x-0 rounded-md border-t-0 border-b-1 border-b-zinc-500 bg-stone-100" />
                    <span style={{color: 'red', display: "block" ,marginTop: '2px'}}>{errors.author}</span>
                  </div>
                  <button className="w-full max-w-[200px] p-2 border-2 border-green-600 hover:border-green-500 !bg-green-600 hover:!bg-green-500 rounded-md font-medium text-white transition lg:text-lg text-md tracking-wide block mx-auto"> Save </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Articles;