import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "Sign In | Gifty/AI",
  icons: ['/favicon.ico'],
}

export default function Page() {
  return <SignIn />;
}