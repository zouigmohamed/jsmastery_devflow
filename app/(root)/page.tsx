import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

import ROUTES from "./../../constants/routes";

const Home = async () => {
  const session = await auth();
  return (
    <>
      <h1 className="font-space-grotesk text-3xl font-bold text-light-500"></h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">log out :  {session?.user?.name}</Button>
      </form>
    </>
  );
};
export default Home;
