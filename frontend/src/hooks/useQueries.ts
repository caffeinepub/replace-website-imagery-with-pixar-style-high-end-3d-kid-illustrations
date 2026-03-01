import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useRegisterUser() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
    }: {
      name: string;
      email: string;
      phone: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.registerUser(name, email, phone);
    },
  });
}

export function useVerifyOTP() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      email,
      otp,
    }: {
      email: string;
      otp: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.verifyOTP(email, otp);
    },
  });
}

export function useGetUsers() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUsers();
    },
    enabled: !!actor && !isFetching,
  });
}
