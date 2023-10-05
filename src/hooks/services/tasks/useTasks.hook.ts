"use client";

import { ApiError, Task } from "@/interfaces";
import { taskService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useTasks = () => {
  const { data, isLoading, isError } = useQuery<Task[], ApiError>(
    ["tasks"],
    () => taskService.getTasks(),
    {
      onError: () => {
        toast.error("Unable to load tasks");
      },
    }
  );

  return { data, isLoading, isError };
};
