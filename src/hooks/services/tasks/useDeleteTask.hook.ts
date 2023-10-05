"use client";
import { APIResponse, ApiError } from "@/interfaces";
import { taskService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess } = useMutation<APIResponse, ApiError>({
    // @ts-ignore
    mutationFn: (taskId: string) => {
      return taskService.deleteTask(taskId);
    },
    onSuccess: (response: APIResponse) => {
      if (response?.status === 200) {
        queryClient.invalidateQueries(["tasks"]);

        toast.success("Tasked deleted successfully");
      }
    },
    onError: () => {
      toast.error("There was a problem deleting the task.");
    },
  });

  return { mutate, isLoading, isSuccess };
};
