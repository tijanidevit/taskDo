import { APIResponse, ApiError } from "@/interfaces";
import { taskService } from "@/services";
import { CreateOrUpdateTask } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

type MutationProp = {
  data: CreateOrUpdateTask;
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess } = useMutation<
    APIResponse,
    ApiError,
    MutationProp
  >({
    // @ts-ignore
    mutationFn: ({ data }: MutationProp) => {
      return taskService.createTask(data);
    },
    onSuccess: (response: APIResponse) => {
      if (response?.status === 200) {
        toast.success(response?.message ?? "Task created successfully");
        queryClient.invalidateQueries(["tasks"]);
      }
    },
    onError: (error: ApiError) => {
      toast.error(error?.message || "Opps! Something went wrong.");
    },
  });

  return { mutate, isLoading, isSuccess };
};
