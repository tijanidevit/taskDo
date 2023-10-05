"use client";

import { ApiError, Task } from "@/interfaces";
import { taskService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useSingleTask = (taskId: string) => {
  const { data, isLoading, isError } = useQuery<Task, ApiError>(
    ["tasks", taskId],
    () => taskService.getSingleTask(taskId),
    {
      enabled: !!taskId,
      onError: () => {
        toast.error("Unable to load task");
      },
    }
  );

  return { data, isLoading, isError };
};
