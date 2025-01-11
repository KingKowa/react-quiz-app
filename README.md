# REACT-QUIZ-APP

## Project Overview

This project is a responsive Quiz Application built using React, Tailwind CSS, and Axios.
The app fetches quiz questions from the Open Trivia Database API, allowing users to select topics,
difficulty levels, and the number of questions. It features quiz history tracking and performance
metrics, making it a comprehensive learning tool.

## Features

- Fetch quiz questions from the Open Trivia Database API.

- Selectable quiz topics, difficulty levels, and question amounts.

- Responsive design for mobile, tablet, and desktop.

- Quiz history and performance tracking.

- User-friendly interface with clear navigation and feedback.

## Technologies Used

- React: For building the user interface.
- Tailwind CSS: For responsive and utility-first styling.
- Axios: For handling API requests.
- Vite: For fast development and building.

## Installation and Setup

### Prerequisites

Node.js and npm installed on your system.

## Steps

- Clone the repository:

git clone https://github.com/KingKowa/react-quiz-app.git

- Navigate to the project directory:

cd quiz-app

- Install dependencies:

npm install

- Start the development server:

npm run dev

Open your browser and navigate to http://localhost:3000.

## Live Demo

[see awesome books live]()

## Author

👤 **Frederick Ankomah**

- GitHub: [@githubhandle][https://github.com/kingkowa]
- Twitter: [@twitterhandle][https://twitter.com/kingkowa1]
- LinkedIn: [LinkedIn][https://linkedin.com/in/frederickankomah]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed

## Key Components

- QuizStart: Handles user input for selecting quiz options.

- QuestionCard: Displays each quiz question and its options.

- ScoreSummary: Shows the user's score at the end of the quiz.

## API Integration

The app fetches data from the Open Trivia Database API using Axios.
The API provides various quiz questions based on selected categories and difficulty levels.

## Challenges Faced

- API Integration: Managing asynchronous data fetching and error handling.

- State Management: Handling quiz data, user input, and navigation between components.

- Responsive Design: Ensuring the app looks good on different screen sizes.

## Key Learnings

- Improved understanding of React hooks and state management.

- Practical experience with Tailwind CSS for responsive design.

- Handling API requests and managing different states like loading and errors.

## Future Improvements

- Implement persistent data storage using localStorage.

- Add detailed feedback and explanations for quiz answers.

- Explore advanced state management tools like Redux or Zustand.

- Optimize performance with lazy loading and React optimizations.

## Deployment

The app can be deployed using platforms like Vercel or Netlify for easy and free hosting. After building the app with:

npm run build

You can deploy the dist folder to your chosen hosting service.
