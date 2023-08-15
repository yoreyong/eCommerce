import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {userId} = auth();
  if(!userId) {
    redirect("/sign-in");
  }

  // 从DB查询store信息
  const store = await prismadb.store.findFirst({
    where: {
      userId: userId,
    }
  });

  console.log(store);
  
  if(store) {
    redirect(`/${store.id}`);
  };

  return (
    <>
      {children}
    </>
  );
};