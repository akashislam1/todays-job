import React from "react";

const Blog = () => {
  return (
    <>
      <div className=" lg:text-center my-10 ">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Frequently asked questions
        </h1>
      </div>

      <div className="flex flex-col gap-5 mb-5">
        <div>
          <h2 className="text-xl font-bold">
            {" "}
            1. When should you use context API?
          </h2>
          <p>
            <span className="font-bold">context API : </span>When some data
            needs to be accessible by many components at different nesting
            levels you can use context API. If you only want to avoid passing
            some props through many levels, component composition is often a
            simpler solution than context.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">2. What is a custom hook?</h2>
          <p>
            <span className="font-bold">Custom Hook : </span>Custom Hook is a
            JavaScript function which we create by ourselves, when we want to
            share logic between other JavaScript functions. It allows you to
            reuse some piece of code in several parts of your app.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">3. What is useRef?</h2>
          <p>
            <span className="font-bold">useRef : </span>Ref means just
            reference, so it can be a reference to anything (DOM node,
            Javascript value, etc). The useRef hook returns a mutable object
            which doesn't re-render the component when it's changed. Think it
            like useState, but unlike useState, doesn't trigger re-render of the
            component. The object that useRef returns have a current property
            that can hold any modifiable value.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">4. What is useMemo?</h2>
          <p>
            <span className="font-bold">useMemo : </span>React has a built-in
            hook called useMemo that allows you to memoize expensive functions
            so that you can avoid calling them on every render. You simple pass
            in a function and an array of inputs and useMemo will only recompute
            the memoized value when one of the inputs has changed.
          </p>
        </div>
      </div>
    </>
  );
};
export default Blog;
