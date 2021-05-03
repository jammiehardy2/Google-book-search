const router = require("express").Router();
const book = require("../../controllers/book");

// Matches with "/api/books"
router.route("/").get(book.findAll).post(book.create);

// Matches with "/api/books/:id"
router.route("/:id").get(book.findById).put(book.update).delete(book.remove);

module.exports = router;
