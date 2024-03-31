# FormCraft API

Welcome to FormCraft API! This project serves as the backend for the FormCraft web application, providing essential functionalities for user authentication, form management, and data storage.

## Installation and Setup

To get started with the FormCraft API, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/prabesh-regmi/FormCraft-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd FormCraft-api
   ```

3. Install dependencies using yarn:

   ```bash
   yarn
   ```

4. Setup environment variables:

   - Copy the contents of the `env.example` file into a new file named `.env`.
   - Configure the environment variables as needed for your development environment, including:
     - `DB_HOST`: Hostname of your MySQL database server.
     - `DB_PORT`: Port number of your MySQL database server.
     - `DB_USER`: Username for accessing your MySQL database.
     - `DB_PASSWORD`: Password for accessing your MySQL database.
     - `DB_NAME`: Name of your MySQL database.

5. Create a local MySQL database:
   - Ensure you have MySQL installed locally.
   - Create a new database using your preferred method (e.g., MySQL Workbench, command line).
   - Use the database name you specified in the `DB_NAME` environment variable.

## Running the Server

To start the FormCraft API server, run the following command:

```bash
yarn dev
```

This will start the server, and you can access the API endpoints at the specified port.

## API Documentation

The API documentation is generated using Swagger. You can access the documentation at the following route:

- [http://localhost:3000/v1/docs/](http://localhost:3000/v1/docs/)

## Contributing

If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request. We welcome contributions of all kinds, whether it's bug fixes, feature enhancements, or documentation improvements.

