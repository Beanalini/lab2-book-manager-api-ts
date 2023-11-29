import { Request, Response } from "express";
import * as bookService from "../services/books";

export const getBooks = async (req: Request, res: Response) => {
	const books = await bookService.getBooks();
	res.json(books).status(200);
};

export const getBook = async (req: Request, res: Response) => {
	const bookId = req.params.bookId;
	try {
		const book = await bookService.getBook(Number(bookId));
		if (book) {
			res.json(book).status(200);
		} else {
			//call getBooks to check if book exists in the database
			const checkBook = await bookService.getBooks();
			const found = checkBook.find((entry) => {
				entry.bookId === +bookId;
			});
			!found
				? res
						.status(404)
						.json(`Book with ID:${bookId} does not exist in the database`)
				: res.status(400).json("invalid request");
		}
	} catch (err) {
		res.status(500).json({ message: (err as Error).message });
	}
};

export const getBooksByPublisher = async (req: Request, res: Response) => {
	const publisher = req.params.publisher.replace(/\+/g, " ");

	try {
		const books = await bookService.getBooksByPublisher(String(publisher));

		if (books.length === 0) {
			res
				.status(404)
				.json({ message: "No books found for requested publisher." });
		} else {
			res.status(200).json(books);
		}
	} catch (err) {
		res.status(500).json({ error: err });
	}
};

export const saveBook = async (req: Request, res: Response) => {
	const bookToBeSaved = req.body;
	console.log(req.body);
	try {
		const book = await bookService.saveBook(bookToBeSaved);
		res.status(201).json(book);
	} catch (error) {
		//call getBook to check if book exists
		const bookCheck = await bookService.getBook(req.body.bookId);
		bookCheck
			? res
					.status(400)
					.json(
						`A book with id ${req.body.bookId} already exists in the database`
					)
			: res.status(400).json({ message: (error as Error).message });
	}
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (req: Request, res: Response) => {
	const bookUpdateData = req.body;
	const bookId = Number.parseInt(req.params.bookId);

	const book = await bookService.updateBook(bookId, bookUpdateData);
	res.status(204).json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
	const bookId = req.params.bookId;
	//returns number of rows deleted - 0 if nothing deleted
	try {
		const count = await bookService.deleteBook(Number(bookId));
		console.log(count);
		if (count) {
			res.status(200).json("Book successfully deleted");
			return;
		} else {
			res
				.status(404)
				.json(`Book with ID:${bookId} does not exists in the database`);
		}
	} catch (err) {
		//internal database error
		res.status(500).json(err);
	}
};
