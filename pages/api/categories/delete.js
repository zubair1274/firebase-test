import { database } from "@/lib/firebase";

export default function handler(req, res) {
    const { id,type } = req.query
  if (req.method === "DELETE") {
    let url = type=="sub"?"subcategories":"categories";
    database
      .ref(url).child(id).remove()
      .then((result) =>
      res.status(200).json({firebaseLink:result,success:true,message:"delete"})
      )
      .catch((error) => res.status(400).json(error));
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
}
