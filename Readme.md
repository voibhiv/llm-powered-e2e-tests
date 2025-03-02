# E2E Testing Project with Cypress and Ollama

This project uses [Cypress](https://www.cypress.io/) for End-to-End (E2E) testing and [Ollama](https://github.com/ollama/ollama) to enhance test execution.

## Requirements

Before running the project, make sure you have:

- [Node.js](https://nodejs.org/) installed
- [Yarn](https://yarnpkg.com/) installed
- [Ollama](https://github.com/ollama/ollama) installed and running locally

## Steps to Run the Project

1. **Install project dependencies:**

   ```sh
   yarn
   ```

2. **Configure Ollama to accept cross-origin requests:**

   - Run the setup script:
     ```sh
     ./proxy-setup
     ```
   - If you are on Linux or macOS, grant execution permission before running:
     ```sh
     chmod +x proxy-setup
     ./proxy-setup
     ```

3. **Ensure Ollama is running locally.**

4. **Start Cypress:**
   ```sh
   yarn cy:open
   ```

Now, Cypress will open and be ready to run your E2E tests!

---

If you encounter any issues, check the [Ollama](https://github.com/ollama/ollama) and [Cypress](https://docs.cypress.io/) documentation or open an issue in this repository.
