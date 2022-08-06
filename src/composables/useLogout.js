import { projectAuth, signOut } from "@/configs/index";
import { ref } from "vue";

const error = ref(null);

async function logout() {
  error.value = null;
  // console.log({ email, password });
  // console.log(timestamp);
  try {
    const response = await signOut(projectAuth);
    return response;
  } catch (err) {
    error.value = err.message;
  }
}

export function useLogout() {
  return { logout, error };
}
