import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center  h-screen bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className=" text-center">
          <h2 className="mb-8 font-bold text-5xl ">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-xs font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn-primary ">
            <span className="text-xs">Homepage</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
