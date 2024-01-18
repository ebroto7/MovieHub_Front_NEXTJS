


# MOVIE HUB 

This project was based on taking the MovieHub frontend made with react and rebuilding it with Next.js.


## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies and Concepts](#technologies-and-concepts)
- [Conclusion](#conclusion)
- [Preview](#preview)

## Introduction

I took this project as a way to remake the previous movieHub frontend from scratch. That meant I had to focus a lot, initially on discovering next.js and what it can offer, to later rebuild the movieHub interface with a good foundation.
This way I was able to plan well and try to atomize the components as much as possible, to separate SSR and CSR.
A functionality that I wanted to introduce to give some more meaning to the project was a comment system, where users can give their opinion to the uploaded movies.
This meant that I also had to implement the new functionality in the Backend and the database.

## Features
- Search and view movie data
- Moves management
- Login management

## Requirements
To run the project, you need to have the following requirements installed:
- Node.js
- pnpm (or npm)
- Vite


## Installation
Follow these steps to install the project:
1. Clone the repository:
```sh
git clone https://github.com/ebroto7/moviehub_front_nextjs.git
```

2. Navigate to the project directory:
```sh
cd MovieHub_front_nextjs
```

3. Install the dependencies:
```sh
pnpm install
```
4. run 
 ```sh
pnpm run dev
```
5. open sql shell and run your server

6. you need to create the project in auth0 and generate the following routes:

 (use localhost:+"number of port where you run your app")
    - Allowed callback URLs => http://localhost:3000/api/auth/callback
    - Allowed logout URLs => http://localhost:3000/
    - Allowed web origins  => http://localhost:3000/

7. To run test:
```sh
pnpm install -D vitest @vitejs/plugin-react jsdom @testing-library/react
```
4. run 
 ```sh
pnpm test
```

To run the project, follow these steps and commands:

1. Create a `.env` file in the root of your project with the following content:
```sh
VITE_API_BASE_URL=
VITE_AUTH0_DOMAIN=
VITE_AUTH0_CLIENTID=
VITE_AUTH0_CLIENT_SECRET=
```
Additionally, you can find an example of the .env file in the config folder named env.example. This file serves as a template for your configuration.

2. Run server
    - view : https://github.com/ebroto7/MovieHub.git

3. Run the development server:

 ```sh
pnpm run dev
```

Access the project through your browser at http://localhost:3000.

## Technologies and Concepts
HTML, CSS
TypeScript
React
Next.js
Prop-drilling
useState, useEffect
Conditionals and error handling
App Router
useContext
Inputs and forms
Async/Await
AXIOS
include external libraries
react icons
MUI
Vitest

## Conclusion
Once again, carrying out this project from scratch in a limited time has been a challenge. Learn a new framework, decipher its use, complexity, differences with others, etc. in record time.
Starting a testing system for the first time has been another challenge, it forces you to rethink the implemented code and correct those things that, although it worked, could be done in a better way.

In the future, I would like to take the project, give it a spin, add new features, such as a list of movies that the user wants to see, or that they like. Add director or stars information page, using external API.
improve the comment system. paginate data download, etc.
And of course continue explaining everything that next.js is and provides, such as the use of server components, suspense, and many other things.