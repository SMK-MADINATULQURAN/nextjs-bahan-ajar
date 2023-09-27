"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Button from "@/components/Button";
import useAuthModule from "../auth/lib";

const Page = () => {
  const {useProfile} = useAuthModule()

  const {data:profile, isFetching} = useProfile()
  const { data: session, status } = useSession();
  console.log('profile', profile)
  return (
    <div>
      Admin
      {JSON.stringify(session)}
      
      {status}
      <Button
        title="Logout"
        colorSchema="red"
        onClick={() => {
          signOut();
        }}
      />
    </div>
  );
};

export default Page;
