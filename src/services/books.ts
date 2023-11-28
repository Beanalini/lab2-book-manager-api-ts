import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBooksByPublisher = async (publisher: string) => {
	const books = await Book.findAll({
		where: { publisher: publisher },
	});
	return books;
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	return Book.create<Book>(book);
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};

export const deleteBook = async (bookId: number) => {
	return Book.destroy({
		where: { bookId },
	});
};
