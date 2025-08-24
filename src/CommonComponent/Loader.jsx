import React from 'react';

const Loader = ({color}) => {
  return (
    <div className={`fixed top-0 left-0 h-screen w-screen inset-0 ${color?color:'bg-dark-green/70'} z-[1100] flex justify-center items-center`}
          >
      <div
        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
