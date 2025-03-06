# API Automation Testing

## Overview
This project is an API automation testing framework using **Node.js**, **Supertest**, and **Chai**. The tests validate the GoRest API endpoints, ensuring proper authentication and response validation.

## Technologies Used
- **Node.js** (v20.x)
- **Supertest** - HTTP assertions
- **Chai** - Assertion library
- **Mocha** - Test runner
- **dotenv** - Environment variable management
- **GitHub Actions** - CI/CD workflow

## Project Structure
```
├── test/
│   ├── gorest.js         # API request functions
│   ├── test_case.json    # Test case descriptions
│   ├── get_list_user.js  # Test file for GET list users
├── node.js.yml           # GitHub Actions workflow for CI/CD
├── .env                  # Environment variables (ignored in repo)
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
```

## Prerequisites
Make sure you have:
- **Node.js v20.x** installed
- **npm** (comes with Node.js)
- A **GoRest API token** (stored in `.env` file)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/api-automation.git
   cd api-automation
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```sh
   BASE_URL=https://gorest.co.in
   TOKEN=your_api_token_here
   ```

## Running Tests
Run all test cases:
```sh
npm test
```

Run specific test file:
```sh
npx mocha test/get_list_user.js
```

## Test Cases
### ✅ **Positive Case:**
- Fetch list of users with a valid token

### ❌ **Negative Case:**
- Fetch list of users with an **invalid token** (Expect **401 Unauthorized**)

## CI/CD with GitHub Actions
This project includes a **GitHub Actions workflow** (`node.js.yml`) that:
1. Runs on **push** or **pull request** to `main`
2. Uses **Node.js 20.x**
3. Runs API tests using `npm test`

## Contributing
1. Fork the repo
2. Create a new branch (`feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature-branch`)
5. Open a pull request

## License
MIT License

