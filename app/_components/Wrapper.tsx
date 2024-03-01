import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className='xl:max-w-[1400px] lg:max-w-7xl m-auto md:p-8 p-4'>
      {children}
    </div>
  );
};

export default Wrapper;
