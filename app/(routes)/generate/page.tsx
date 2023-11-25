"use client";

import { UserButton } from "@clerk/clerk-react";

const GeneratePage = () => {
  return (
    <div>
      <div>Generate</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
 
export default GeneratePage;