import firebase from "@/lib/firebase"

export default function handler(req, res) {
firebase.auth().onAuthStateChanged(function(user) {
    
        if (user) {
            res.status(200).json({success:"Authorize"});
        } else {
            res.status(400).json({error:"unAuthorize"});
        }
      });
  
  }
  