const router = require("express").Router();
const getOffer = `

SELECT listings.*, offers.* FROM listings 
JOIN users ON users.id=user_id 
JOIN offers ON listings.id=listing_offer_made_to_id
WHERE users.id = $1
AND
pending IS FALSE
AND
complete IS TRUE;
`;

module.exports = (db) =>{
  router.get("/offerlist/conversation",(req,res) => {
    db.query(getOffer,[req.user?.id])
    
  })
}