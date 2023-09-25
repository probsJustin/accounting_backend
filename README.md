# Account Management & Billing Platform

This platform offers a comprehensive account management, billing, and user management service. It's designed to manage backend transactions of money for accounts, allowing other APIs to utilize it for selling their applications.

## Service Architecture

- **account_backend:** Manages backend operations, transaction processing, and data storage.
- **account_frontend:** Provides the user interface for account management, billing, and other functionalities.

## Getting Started

### Prerequisites

Ensure you have these installed:

- [Node.js and npm](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started)
- [Nx CLI](https://nx.dev/l/r/guides/cli-overview) - Install using `npm install -g nx`

### Setup

1. **Clone the Repository**

git clone https://github.com/probsJustin/accounting_backend
cd accounting_backend


2. **Install Dependencies**

npm install


3. **MySQL Docker Setup**

First, build your custom MySQL Docker image:

docker build -t custom-mysql .


Then, run the MySQL container:

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=test -p 3306:3306 -d custom-mysql


Ensure the MySQL container is running:

docker ps


4. **Run the Backend Service**

npx nx run account_backend:serve:development


### Running the Frontend Service

To run the frontend, use the corresponding Nx command. For example, if it's an Angular app:

npx nx serve account_frontend


## Contributing

- **Code Standards:** (Provide coding standards if available)
- **Commit Messages:** (Guidelines for commit messages)
- **Pull Requests:** Steps on creating and submitting a pull request.

## Testing

Provide guidelines on running unit tests, e2e tests, and any other testing procedures.

## Deployment

Provide deployment instructions for both the backend and frontend services.

## Troubleshooting

List common problems and solutions here for quick reference.

## License

Specify your licensing agreement here.

