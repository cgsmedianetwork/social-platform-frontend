"use server";

export const loginAction = async ({ phone, password }) => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  //   console.log("backendUrl", backendUrl);
  if (!phone || !password) {
    return { success: false, message: "Phone and password are required!" };
  }

  try {
    const response = await fetch(`${backendUrl}/api/v1/user/login`, {
      method: "POST",
      body: JSON.stringify({ phone, password }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log("data", data);

    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, message: "Internal Server error." };
  }
};
