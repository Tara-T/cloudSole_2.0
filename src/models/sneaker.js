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

//makes the sneaker class
export class Sneaker {
  static collection = collection(db, "sneakers");

  //gets all sneakers
  //static because we are creatin an object
  static async findAll() {
    //awaits the database then gets all sneakers
    const doc = await getDocs(query(Sneaker.collection));
    // then returns all sneakers with all items
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

  static async findById(id) {
    const document = await getDoc(doc(db, Sneaker.collection.path, id));
    return { ...document.data(), id: doc.id };
  }

  static async findAllRecomended() {
    const doc = await getDocs(
      query(Sneaker.collection),
      where("isRecomended", "==", "Yes")
    );
    return doc.docs.map((doc_1) => ({ ...doc_1.data(), id: doc_1.id }));
  }

  static async findAllWithStyle(style) {
    const doc = await getDocs(
      query(Sneaker.collection),
      where("style", "==", style)
    );

    return doc.docs.map((doc_1) => ({ ...doc_1.data(), id: doc_1.id }));
  }
}
