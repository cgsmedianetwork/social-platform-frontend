"use client";

import { useSelector } from "react-redux";

const WelcomeHeader = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <h1 className="text-sm sm:text-base md:text-2xl font-semibold text-neutral-900">
      Welcome back{user?.name && `, `}
      <br className="sm:hidden" />
      <span className="capitalize">{user?.name}</span>
    </h1>
  );
};

export default WelcomeHeader;
