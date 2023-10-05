"use client";

import { APIResponse, ApiError } from "@/interfaces";
import { taskService } from "@/services";
import { CreateOrUpdateTask } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

type MutationProp = {
  taskId: string;
  data: CreateOrUpdateTask;
};

export const useUpdateTask = () => {
  const [taskId, settaskId] = useState<string>("");
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ taskId, data }: MutationProp) => {
      settaskId(taskId);
      return taskService.updateTask(taskId, data);
    },
    onSuccess: async (response: APIResponse) => {
      if (response?.status === 200) {
        toast.success(response?.message ?? "Task updated successfully");

        queryClient.invalidateQueries(["tasks"]);
        queryClient.invalidateQueries(["tasks", taskId]);
      }
    },
    onError: (error: ApiError) => {
      toast.error(error?.message || "Opps! Something went wrong.");
    },
  });

  return { mutate, isLoading, isSuccess };
};
