function solve() {
	var library = (function () {
		var books = [];
		var categories = [];

		function listBooks(value) {
			if (value === undefined) {
				return books;
			}
			if (value.category !== undefined) {		
				return books.filter(x => x.category === value.category);
			};

			if (value.author !== undefined) {
				return books.filter(x => x.author === value.author);
			};
		}

		function addBook(book) {
			validateNames(book.category);
			validateAuthor(book.author);
			validateNames(book.title);
			validateISBN(book.isbn);

			if (books.some(x => x.title === book.title)) {
				throw 'title exist';
			}
			if (books.some(x => x.isbn === book.isbn)) {
				throw 'ISBN exist';
			}

			if (!categories.some(x => x === book.category)) {
				categories.push(book.category);
			}
			book.ID = books.length + 1;
			books.push(book);
			return book;
		}
		function validateNames(value) {
			if (value.length < 2 || value.length > 100) {
				throw 'Inavlide name length';
			};
			// not clear what symbols are included
			var mathes = value.match(/[a-zA-Z0-9!,. #]/g);
			if (value.length !== mathes.length) {
				throw 'wrong name';
			};
			return true;
		}
		function validateISBN(value) {
			if (value.length !== 10 && value.length !== 13) {
				throw 'Invalide length of ISBN';
			};
			var mathes = value.match(/[0-9]/g);
			if (value.length !== mathes.length) {
				throw 'This is not real ISBN';
			};
			return true;
		}
		function validateAuthor(value) {
			var author = value.replace(/ +/g, ' ');
			if (typeof (author) !== 'string' || author.length < 1) {
				throw 'Not valide author name';
			}
			return true;
		}

		function listCategories() {
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}