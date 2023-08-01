"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStoreModal } from "@/hooks/use-store-modal";

import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * Zod 是一个变量声明库, 类似C中的typedef
 * 目的是为了实现更为复杂的数据结构
 */
const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const [isLoading, setIsLoading] = useState(false);

  // 使用react-hook-form新建一个form, 数据类型为zod定义的formSchema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),  // resolver用来做validation, optional
    defaultValues: {
      name: "",
    },
  });

  const onSubmit =async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // TODO: Add submit function, creaye store
  }

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Form {...form}>
              <form>
                <FormField 
                  control={form.control}
                  name="name"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input disabled={isLoading} placeholder="E-Commerce" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <Button disabled={isLoading} variant={"outline"} onClick={storeModal.onClose}>
                    Cancel
                  </Button>
                  <Button disabled={isLoading} type="submit">Continue</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  )
}