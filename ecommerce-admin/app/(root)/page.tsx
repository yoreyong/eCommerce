"use client";

import { useEffect } from "react";

import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  // 直接使用useStoreModal没办法嵌入到useEffeft中, 因此先将其解构出来
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])

  return (
    <div>
      Root Page
    </div>
  )
}

export default SetupPage;
