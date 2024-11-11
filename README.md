# Social Posts Platform (Post It)

A simple Express.js application that allows users to create, read, update, and delete social media posts. This project demonstrates basic CRUD operations using Express.js and EJS templating.

## Features

- View all posts
- Create new posts
- View individual posts
- Edit existing posts
- Delete posts
- Unique ID generation for each post
- Static file serving
- RESTful routing architecture

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Required Dependencies

```bash
npm install express
npm install ejs
npm install uuid
npm install method-override
```

## Project Structure

```
project-root/
│
├── views/
│   ├── index.ejs    # Main posts listing page
│   ├── new.ejs      # New post creation form
│   ├── edit.ejs     # Edit post form
│   ├── show.ejs     # Individual post view
│   └── error.ejs    # Error page
│
├── public/          # Static files directory
├── app.js          # Main application file
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone 
```

2. Navigate to the project directory:
```bash
cd social-posts-platform
```

3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
node app.js
```

The application will be available at `http://localhost:8080`

## API Routes
|
 Method 
|
 Route 
|
 Description 
|
|
--------
|
-------
|
-------------
|
|
 GET 
|
`/posts`
|
 Display all posts 
|
|
 GET 
|
`/posts/new`
|
 Show new post form 
|
|
 POST 
|
`/posts`
|
 Create a new post 
|
|
 GET 
|
`/posts/:id`
|
 Show specific post 
|
|
 GET 
|
`/posts/:id/edit`
|
 Show edit form for a post 
|
|
 PATCH 
|
`/posts/:id`
|
 Update a specific post 
|
|
 DELETE 
|
`/posts/:id`
|
 Delete a specific post 
|

## Data Structure

Each post object contains:
- `id`: Unique identifier (UUID)
- `username`: Author of the post
- `content`: Post content

Example:
```javascript
{
  id: "550e8400-e29b-41d4-a716-446655440000",
  username: "CodeNinja42",
  content: "Just deployed my first full-stack project!"
}
```

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
