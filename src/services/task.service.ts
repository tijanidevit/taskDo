import { apiService } from "@/services";
import { CreateOrUpdateTask } from "@/types";

export const taskService = {
  getTasks: async () => await apiService.get(`/tasks`),

  getSingleTask: async (taskId: string) =>
    await apiService.get(`/tasks/${taskId}`),

  createTask: async (payload: CreateOrUpdateTask) =>
    await apiService.post({
      url: `/tasks`,
      payload,
    }),

  deleteTask: async (taskId: string) =>
    await apiService.delete({ url: `/tasks/${taskId}` }),

  updateTask: async (taskId: string, payload: CreateOrUpdateTask) =>
    await apiService.patch({ url: `/tasks/${taskId}`, payload }),
};
