import ReduxProvider from "@/Redux/Provider/ReduxProvider";

export default function MainLayout({ children }) {
  return (
    <ReduxProvider>
      <main>{children}</main>
    </ReduxProvider>
  );
}
