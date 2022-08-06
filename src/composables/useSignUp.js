import {
  createUserWithEmailAndPassword,
  projectAuth,
  updateProfile,
} from "@/configs/index";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);
async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;

  // console.log(timestamp);
  try {
    const response = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");
    await updateProfile(response.user, { displayName: fullName });
    console.log(response);

    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
  // try {
  //   const response = await createUserWithEmailAndPassword(
  //     projectAuth,
  //     email,
  //     password
  //   )
  //     .then((userCredential) => {
  //       // Signed in
  //       console.log("userCredential", userCredential);
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       // ..
  //     });
  //   if (!response) throw new Error("Could not create a new user.");
  //   return response;
  // } catch (err) {
  //   console.log(err);
  //   error.value = err.message;
  // } finally {
  //   isPending.value = false;
  // }
}

export function useSignUp() {
  return { signup, isPending, error };
}
