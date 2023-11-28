import { Book } from "../models/book";

export const populateDummyData = async () => {
	// Populate environment with some dummy data in dev
	console.log("🍼 Populating database with dummy data");
	await Book.sync({ force: true });
	await Book.create({
		bookId: 1,
		title: "The Hobbit",
		author: "J. R. R. Tolkien",
		publisher: "Harper Collins",
		description: "Someone finds a nice piece of jewellery while on holiday.",
	});
	await Book.create({
		bookId: 2,
		title: "The Shop Before Life",
		author: "Neil Hughes",
		publisher: "Harper Collins",
		description:
			"Before being born, each person must visit the magical Shop Before Life, where they choose what kind of person they will become down on Earth...",
	});
	await Book.create({
		bookId: 3,
		title: "The Silmarillion",
		author: "J. R. R. Tolkien",
		publisher: "Harper Collins",
		description: "A story of rebellion and adventure",
	});
	const bookCount = (await Book.findAll()).length;
	console.log(
		`📚 ${bookCount} book${bookCount !== 1 ? "s" : ""} added to table`
	);
};
