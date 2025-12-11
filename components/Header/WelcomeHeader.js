"use client";

import { useSelector } from "react-redux";

const WelcomeHeader = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <h1 className="text-2xl font-semibold text-neutral-900">
      Welcome back
      <span className="capitalize">{user?.name ? `, ${user?.name}` : ""}</span>
    </h1>
  );
};

export default WelcomeHeader;
