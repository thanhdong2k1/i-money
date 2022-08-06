import { useUser } from "@/composables/useUser";
import {
  getDownloadURL,
  projectStorage,
  ref as refF,
  uploadBytes,
} from "@/configs/index";
import { ref } from "vue";

const { getUser } = useUser();
const { user } = getUser();

const useStorange = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;

    const fileRef = refF(projectStorage, filePath.value);

    try {
      // const storageRef = ref(storage, "temp/" + docRef.id + "/" + file.name);

      // const snapshot = await uploadBytes(storageRef, file, metadata);
      // const downloadURL = await getDownloadURL(snapshot.ref);
      // photos.push(downloadURL);
      const response = await uploadBytes(fileRef, file);
      console.log(response);
      // url.value = await response.ref.getDownloadURL();
      url.value = await getDownloadURL(response.ref);
      console.log("URL File:", url);

      return url.value;
    } catch (err) {
      error.value = err.message;
    }
  }
  return { error, url, filePath, uploadFile };
};

export default useStorange;
