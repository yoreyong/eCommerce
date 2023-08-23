import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

export default async function DashBoardLayout({
  children,
  params
} : {
  children: React.ReactNode
  params: { storeId: string}
}) {
  const { userId } = auth();
  if(!userId) {
    redirect('/sign-in');
  }

  // 从数据库查询Id为storeId是否存在
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId: userId,
    }
  });

  // 判读数据库中是否存在
  if(!store) {
    redirect('/');
  };

  // 渲染layout及子组件页面
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}