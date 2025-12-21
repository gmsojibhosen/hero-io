import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
         <div className="p-15">
      <div className="mb-4">
        <img className="mx-auto" src={errorImg} alt="404" />
      </div>

      <div className="text-center">
        <h1 className="font-semibold text-5xl mb-2 leading-15">
          Oops, page not found!
        </h1>

        <p className="text-[20px] text-[#627382] mb-4">
          The page you are looking for is not available.
        </p>
     
        <Link to="/">
          <button className="px-10 py-3 rounded-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            Go Back!
          </button>
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;