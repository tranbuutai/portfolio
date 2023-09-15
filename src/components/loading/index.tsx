"use client";

import React, { useEffect, useState, ComponentType } from "react";

import Loading from "./loadingScreen";

function withLoading<P>(Component: ComponentType<P>) {
  return function WrappedComponent(props: JSX.IntrinsicAttributes & P) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(false);
    }, []);

    if (isLoading) {
      return <Loading />;
    }

    return <Component {...props} />;
  };
}

export default withLoading;
