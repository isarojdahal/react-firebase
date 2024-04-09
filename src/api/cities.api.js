import {
  addDoc,
  doc,
  deleteDoc,
  getFirestore,
  collection,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import firebaseConfig from "../config/firebase.config";

class CityAPI {
  #db;
  constructor() {
    this.db = getFirestore(firebaseConfig);
  }

  async add() {
    return await addDoc(collection(this.db, "cities"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    })
      .then((res) => {
        console.log("Document written with ID: ", res.id);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async update(id, value) {
    await updateDoc(doc(this.db, "cities", id), {
      Nepal: value,
    });
  }

  async getAll() {
    const citiesCol = collection(this.db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
  }

  async deleteCity(id) {
    await deleteDoc(doc(this.db, "cities", id));
  }
}

export default new CityAPI();
