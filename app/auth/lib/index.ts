import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hook";
import {
  LoginPayload,
  LoginResponse,
  ProfileResponse,
  RegisterPayload,
  RegisterResponse,
} from "../interface";
import { axiosClient } from "@/lib/axiosClient";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useAxiosAuth from "@/hook/useAxiosAuth";
import { useSession } from "next-auth/react";

const useAuthModule = () => {
  const { toastError, toastSuccess, toastWarning } = useToast();
  const axiosAuthClient = useAxiosAuth()
  const {data:session} = useSession()

  const router = useRouter();
  const register = async (
    payload: RegisterPayload
  ): Promise<RegisterResponse> => {
    return axiosClient.post("/auth/register", payload).then((res) => res.data);
  };

  const useRegister = () => {
    const { mutate, isLoading } = useMutation(
      (payload: RegisterPayload) => register(payload),
      {
        onSuccess: (response) => {
          toastSuccess(response.message);
          router.push("/auth/login");
        },
        onError: (error) => {
          toastError();
        },
      }
    );
    return { mutate, isLoading };
  };

  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    return axiosClient.post("/auth/login", payload).then((res) => res.data);
  };

  const useLogin = () => {
    const { mutate, isLoading } = useMutation(
      (payload: LoginPayload) => login(payload),
      {
        onSuccess: async (response) => {
          toastSuccess(response.message);
          await signIn("credentials", {
            id: response.data.id,
            name: response.data.nama,
            email: response.data.email,
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token,
            redirect: false,
          });

          router.push("/admin");
        },
        onError: (error: any) => {
          if (error.response.status == 422) {
            toastWarning(error.response.data.message);
          } else {
            toastError();
          }
        },
      }
    );
    return { mutate, isLoading };
  };

  const getProfile = async (): Promise<ProfileResponse> => {
    return axiosAuthClient.get("/auth/profile").then((res) => res.data);
  };

  const useProfile = () => {
    const { data, isLoading, isFetching } = useQuery(
      ["/auth/profile"],
      () => getProfile(),
      {
        select: (response) => response,
        staleTime: 1000 * 60 * 60,
        refetchInterval: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        enabled : session?.user?.id !== undefined
      }
    );

    return { data, isFetching, isLoading };
  };

  return { useRegister, useLogin, useProfile };
};

export default useAuthModule;
