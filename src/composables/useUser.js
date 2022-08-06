import { onAuthStateChanged, projectAuth } from "@/configs/index";
import { ref } from "vue";

const user = ref(projectAuth.currentUser);

onAuthStateChanged(projectAuth, (_user) => {
  if (_user) user.value = _user;
});

function getUser() {
  return { user };
}

export function useUser() {
  return { getUser };
}
