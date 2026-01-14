# Digital Bookshelf API

## Description

A simple RESTful backend for a "Digital Bookshelf" that lets librarians manage a collection of books. Built with vanilla Node.js, Express, and Mongoose; supports creating, reading, updating, and deleting book records stored in MongoDB Atlas.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [Local Usage](#deployment)
- [About The Author](#author)

## <a name="technologiesused"></a>Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework for API routes
- **Mongoose** - MongoDB ORM for schemas and model methods
- **MongoDB Atlas** - Cloud-hosted MongoDB (connection via `MONGODB_URI`)
- **dotenv** - Environment variable management

## <a name="features"></a> Features

**Create Book (POST /api/books)** - Add a new book record using JSON in the request body.  
**Read All Books (GET /api/books)** - Retrieve the full list of books.  
**Read One Book (GET /api/books/:id)** - Retrieve a single book by its `_id`.  
**Update Book (PUT /api/books/:id)** - Update fields for a book; returns the updated document.  
**Delete Book (DELETE /api/books/:id)** - Remove a book from the collection.  

**Validation:** `title` and `author` are required; `isbn` is unique.  

**In Progress:**

- [ ] Add request validation middleware and tests

## <a name="nextsteps"></a>Future Features

- **Search & Filtering** - Query by title, author, or isbn with pagination.  
- **Authentication** - API keys or user auth for protected routes.  
- **Request Validation** - `express-validator` or Joi for stronger validation.  
- **Rate Limiting & Logging** - Protect API and capture activity.  
- **OpenAPI Spec** - Generate docs and client SDKs.

## <a name="deployment"></a>Local Usage

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` in the project root and set your MongoDB URI:

```env
MONGODB_URI="your_mongodb_connection_string_here"
PORT=3000
```

3. Start the server:

```bash
npm start
# or: node server.js
```

4. API endpoints (examples):

- Create:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"Example","author":"Me","isbn":"123-ABC"}' http://localhost:3000/api/books
```

- Read all:

```bash
curl http://localhost:3000/api/books
```

- Read one:

```bash
curl http://localhost:3000/api/books/<id>
```

- Update:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"title":"New Title"}' http://localhost:3000/api/books/<id>
```

- Delete:

```bash
curl -X DELETE http://localhost:3000/api/books/<id>
```

## <a name="author"></a>About The Author

**Clarence Franklin** — Backend developer and student author of this assignment.

## Development Process

- Built with small iterative commits; each step (scaffold, DB connection, model, routes, tests) was implemented and verified before moving on.

## Works Cited

- [Express Documentation](https://expressjs.com/)  
- [Mongoose Documentation](https://mongoosejs.com/)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
- [MDN Web Docs - Node.js](https://developer.mozilla.org/)
