import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "Sign Up | Gifty/AI",
  icons: ['/favicon.ico'],
}

export default function Page() {
  return <SignUp />;
}