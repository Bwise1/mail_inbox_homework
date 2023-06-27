# Home Assignment – Full Stack Developer

Aim is to develop a mail inbox applica?on

## Table of Contents

- [Home Assignment – Full Stack Developer](#home-assignment--full-stack-developer)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [API Layer](#api-layer)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Frontend](#frontend)
    - [Installation](#installation-1)
    - [Live links](#live-links)

## Project Overview

there is the api layer and frontend layer, api layer is done with nodejs while the frontend layer is done with reactjs.

## API Layer

The `api_layer` folder contains the backend code responsible for handling API requests and serving data to the frontend application. It acts as the server-side component of the project. The API layer provides the following routes and endpoints:

- `/login`: Handles user authentication and login.
- `/messages/:userId`: Retrieves all messages belonging to a specific user.
- `/messages/inbox/:messageId`: Retrieves a specific message from the user's inbox.

### Installation

To start using the API, follow these steps:

1. Copy the `.env.example` file and rename it to `.env`. This file contains the environment variables required for the API configuration. inside the database url should be provided

2. Install the necessary dependencies by running the following command:

   ```shell
   npm install
   ```

3. to start server:
   ```shell
   node server.js
   ```
4. the server would be listening on port 3001

### Usage

For detailed information about the API's routes, endpoints, request/response formats, and error handling, please refer to the [API Documentation](https://documenter.getpostman.com/view/24512296/2s93z8945D).

### Frontend

The `frontend` folder contains the client-side code responsible for the user interface and interaction with the API. It represents the frontend or user-facing component of the project. The frontend code is written using React.js

The frontend application includes the following main components:

- **login**: displays an interface to input a name
- **Home**: Displays a welcome message and a summary of the user's messages.
- **Inbox**: Shows a list of messages for the entered user.
- **MessageView**: Displays the detailed content of a selected message.

### Installation

To start using the API, follow these steps:

1. Copy the `.env.example` file and rename it to `.env`. This file contains the environment variables required for the frontend which is the api url

2. Install the necessary dependencies by running the following command:

   ```shell
   npm install
   ```

3. to start server:
   ```shell
   npm start
   ```
4. the frontend would be started on port 3000

### Live links

- Frontend: [https://mail-inbox-homework-oqjhl1btd-bwise1.vercel.app/](https://mail-inbox-homework-oqjhl1btd-bwise1.vercel.app/)
- Backend: [https://inbox-v7r9.onrender.com/](https://inbox-v7r9.onrender.com/)
