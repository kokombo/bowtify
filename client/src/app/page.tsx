"use client";
import { useSession, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  console.log(session?.user);

  return (
    <main>
      <button onClick={() => signOut()}>Signout</button>
    </main>
  );
};

export default Home;
