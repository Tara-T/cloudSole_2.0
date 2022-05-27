import {
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  collection,
  where,
} from "firebase/firestore";
import { db } from "./db";

//makes the sneaker class (object)
export class Sneaker {
  static collection = collection(db, "sneakers");

  //gets snekers by id
  static findByName(name) {
    return getDoc(doc(db, Sneaker.collection.path, name));
  }

  //gets all sneakers
  static async findAll() {
    //awaits the database then gets all sneakers
    const doc = await getDocs(query(Sneaker.collection));
    return doc.docs.map((doc_1) => ({ ...doc_1.data(), id: doc_1.id }));
  }

  static async findAllByBrand(brand) {
    const doc = await getDocs(
      query(Sneaker.collection, where("brand", "==", brand))
    );
    return doc.docs.map((doc_1) => ({ ...doc_1.data(), id: doc_1.id }));
  }

  static async findAllNewShoes() {
    const doc = await getDocs(
      query(Sneaker.collection),
      where("isNewArrival", "==", "Yes")
    );
    return doc.docs.map((doc_1) => ({ ...doc_1.data(), id: doc_1.id }));
  }
}
