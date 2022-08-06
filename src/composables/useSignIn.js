import { projectAuth, signInWithEmailAndPassword } from "@/configs/index";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);
async function signin(email, password) {
  isPending.value = true;
  error.value = null;
  // console.log({ email, password });
  // console.log(timestamp);
  try {
    const response = await signInWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Could not signin user.");
    console.log(response);
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { signin, isPending, error };
}
