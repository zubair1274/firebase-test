import { database } from "@/lib/firebase";

export default function handler(req, res) {
  if (req.method === "POST") {
   let data = req.body;
   let url=data.parentCategory?"subcategories": "categories";
   let apiData={
      category_name: data.name,
      isActive: true,
      hasChild:!data.parentCategory && true,
      parentID:data.parentCategory
  }
    database
      .ref(url).push(apiData)
      .then((result) =>
      
      res.status(200).json({firebaseLink:result,success:true,message:"Added Successfully"})
      )
      .catch((error) => res.status(400).json(error));
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
}
