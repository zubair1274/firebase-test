import { database } from "@/lib/firebase";

export default async function handler(req, res) {
      const dbRef = database.ref();
      let categories =await dbRef.child("categories").get().then((snapshot) => {
        if (snapshot.exists()) {
        //   console.log(snapshot.val());
         return snapshot.val();
        } else {
           return [];
        }
      }).catch((error) =>error);

      let subCategories = await dbRef.child("subcategories").get().then((snapshot) => {
        if (snapshot.exists()) {
        //   console.log(snapshot.val());
         return snapshot.val();
        } else {
           return [];
        }
      }).catch((error) =>error);

      res.status(200).json({categories,subCategories})

}
