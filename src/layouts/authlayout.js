import React from "react";
const AuthLayout = ({ children ,className }) => {
  return (
    <main className="max-h-screen overflow-y-scroll">
      <main className={`auth-bg min-h-screen h-full pb-6 p-4 md:p-0 relative md:flex justify-center ${className}`}>
        {children}
      </main>
    </main>
  );
};

export default AuthLayout;
