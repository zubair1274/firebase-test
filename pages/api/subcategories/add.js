import { database } from "@/lib/firebase";

export default function handler(req, res) {
  if (req.method === "POST") {
   let data = req.body;
 
    database
      .ref("subcategories/").push({
        category_name: data.name,
        isActive: true,
        parentId:data.parentId
    })
      .then((result) => res.status(200).json(result))
      .catch((error) => res.status(400).json(error));
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
}
