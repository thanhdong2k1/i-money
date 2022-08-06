import { addDoc, collection, projectFirestore } from "@/configs/index";
import { ref } from "vue";

const useCollection = (name) => {
  const error = ref(null);
  async function addRecord(record) {
    error.value = null;
    try {
      console.log(projectFirestore);
      const response = await addDoc(collection(projectFirestore, name), {
        record,
      });
      return response;
    } catch (err) {
      error.value = err.message;
    }
  }
  return { error, addRecord };
};

export default useCollection;
