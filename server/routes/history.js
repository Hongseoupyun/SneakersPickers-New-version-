const router = require("express").Router();

const queryListings = `
SELECT * FROM listings 
JOIN users ON users.id=user_id 
JOIN offers ON listings.id=listing_offer_made_to_id
WHERE users.id = $1
AND
active IS FALSE;
`;

const offeredListings = `
SELECT * FROM listings 
JOIN offers ON listings.id=listing_being_offered_id
JOIN users ON user_id=users.id
WHERE listing_being_offered_id = $1
AND listing_offer_made_to_id = $2;
`;

module.exports = (db) => {
  router.get("/myacceptedoffers", (req, res) => {
    // console.log("User id:", req.user.id)
    console.log("offerlist");
    db.query(queryListings, [req.user.id])
      .then((result) => {
        console.log("seller's info:", result.rows);
        // console.log("/////////////////////////////SELLERS DATA")
        res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/myofferedproducts", (req, res) => {
    // console.log("User id:", req.user.id)

    db.query(offeredListings, [req.body.offeredid, req.body.wantedID])
      .then((result) => {
        console.log("buyer's info:", result.rows);
        // console.log("/////////////////////////////////BUYERS DATA")
        // console.log(req.body.wantedID)
        res.json(result.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
