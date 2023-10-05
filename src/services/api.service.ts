import {
  convertCamelKeysToSnakeCase,
  convertSnakeCaseKeysToCamelCase,
  getCookie,
  setCookie,
} from "@/utils";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";

const apiResource = (baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!) => {
  const service = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": baseURL,
    },
  });

  service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // check if config has a data property, and it's not formData. Then convert all camel case keys to snake case
    if (config?.data && !(config?.data instanceof FormData)) {
      const data = convertCamelKeysToSnakeCase(config.data);
      config.data = data;
    }

    // get token from cookie
    const token = getCookie("token");

    // if token is not present, return config
    if (!token) return config;

    // if token is present, add it to headers as Authorization
    config.headers!["Authorization"] = `Bearer ${token}`;

    return config;
  });

  service.interceptors.response.use(
    (response: any) => {
      const responseData = response?.data;

      // check if responseData has a data property, and the convert all snake case keys to camel case
      if (responseData?.data) {
        const data = convertSnakeCaseKeysToCamelCase(responseData?.data);
        responseData.data = data;

        // check if data has a token property, and set it in cookie
        if (data?.accessToken) {
          // set token in cookie
          setCookie("token", data.accessToken);
        }
      }

      return responseData;
    },
    (error: AxiosError) => {
      if (error?.response === undefined) {
        console.log("error", error);

        toast.error("Unable to establish connection to server.");
        return Promise.reject("Unable to establish connection to server.");
      } else {
        const errors = error?.response?.data;
        // @ts-ignore
        const errorMessage = errors?.error || errors?.message;

        if (errorMessage) {
          console.error(errorMessage);
        }
        // @ts-ignore
        let serverErrors = errors?.errors;
        if (serverErrors) {
          // loop through serverErrors object and display value of each key
          Object.keys(serverErrors).forEach((key) => {
            const error = serverErrors[key];
            if (Array.isArray(error)) {
              error.forEach((err) => {
                toast.error(err);
              });
            } else {
              toast.error(error);
            }
          });
        }
        // @ts-ignore
        else if (errors?.status === 401 && errorMessage === "Unauthorized!!!") {
          // toast.error("Session expired!!! Redirecting to logout");
          // redirect to logout page
          // if (window) window.location.href = "/logout";
        } else {
          toast.error(
            errorMessage || "Something went wrong! Please try again."
          );
        }
        return Promise.reject(errors);
      }
    }
  );

  interface IPostProps {
    url: string;
    payload?: object;
  }

  return {
    get: async (url: string) => {
      try {
        const data = service.get(url);
        const resolvedData = await Promise.resolve(data);
        const exactData = resolvedData?.data;

        return exactData;
      } catch (error) {
        console.error(error);
      }
    },

    post: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.post(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        console.error(error);
      }
    },

    patch: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.patch(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        console.error(error);
      }
    },

    delete: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.delete(url, { data: payload || {} });
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        console.error(error);
      }
    },

    put: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.put(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        console.error(error);
      }
    },
  };
};

export const apiService = apiResource();
