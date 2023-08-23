import {create} from 'zustand';

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

/**
 * 自定义Hook
 * 使用第三方库zustand来进行状态管理
 * 用来管理StoreModel的onOpen和onClose两个状态
 */
export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}));