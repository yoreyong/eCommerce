"use client";

import { useEffect, useState } from 'react';

import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading
}) => {
  const [isMounted, setIsMounted] = useState(false);
  // 目的是为了在组件渲染完成之前, 不展示任何页面
  // useEffect是在组件渲染完成之后调用的, 在本案例中, 先返回null, 等组件渲染完成之后,
  // 使用useEffect将 isMounted 设置为true, 然后展示组件
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) {
    return null;
  }

  return(
    <Modal
      title='Are you sure?'
      description='This action cannot be undone.'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='pt-6 space-x-2 flex items-center'>
        {/* 取消 按键 */}
        <Button disabled={loading} variant={"outline"} onClick={onClose}>
          Cancel
        </Button>
        {/* 继续 按键 */}
        <Button disabled={loading} variant={"destructive"} onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};