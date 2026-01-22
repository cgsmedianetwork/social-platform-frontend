import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  //   console.log("pathname", pathname);
  //   console.log("backendUrl", backendUrl);

  const publicRoutes = ["/"];
  const authRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/verify",
    "/stepper",
  ];

  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  // Handle root route - redirect logged in users
  if (pathname === "/") {
    if (refreshToken) {
      try {
        const response = await fetch(`${backendUrl}/api/v1/user/verify-token`, {
          headers: {
            Cookie: `refreshToken=${refreshToken}`,
          },
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          const userRole = data?.data?.role;

          // Redirect based on role
          if (userRole === "admin") {
            return NextResponse.redirect(new URL("/home", request.url));
          } else if (userRole === "user") {
            return NextResponse.redirect(new URL("/dashboard", request.url));
          }
        }
      } catch (error) {
        // If verification fails, allow access to root (user not logged in)
        return NextResponse.next();
      }
    }
    // If no token, allow access to root
    return NextResponse.next();
  }

  // Handle other public routes (if any)
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!refreshToken && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Handle authenticated users accessing protected routes
  if (refreshToken && !isAuthRoute) {
    try {
      const response = await fetch(`${backendUrl}/api/v1/user/verify-token`, {
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        const userRole = data?.data?.role;
        // console.log(response.ok, userRole, data);

        // Shared routes accessible by both admin and user
        const sharedRoutes = ["/profile"];
        const isSharedRoute = sharedRoutes.some((route) =>
          pathname.startsWith(route)
        );

        // If accessing a shared route, allow access regardless of role
        if (isSharedRoute) {
          return NextResponse.next();
        }

        const adminRoutes = [
          "/home",
          "/admin-dashboard",
          "/schedule",
          "/settings",
          "/sub-admin",
          "/users",
          "/user",
        ];
        const userRoutes = ["/dashboard", "/booking-schedule", "/stepper"];
        const isUserRoute = userRoutes.some((route) =>
          pathname.startsWith(route)
        );

        const isAdminRoute = adminRoutes.some((route) =>
          pathname.startsWith(route)
        );

        if (userRole === "admin" && isUserRoute) {
          return NextResponse.redirect(new URL("/home", request.url));
        }

        if (userRole === "user" && isAdminRoute) {
          return NextResponse.redirect(new URL("/dashboard", request.url));
        }
      } else {
        console.log("error in verify token");
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
