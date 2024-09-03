# React-Quiz

This Quiz App is an interactive web application built with React that allows users to test their knowledge on various topics. The app dynamically fetches quiz questions from an API, tracks the user's progress, and calculates the score based on their answers. The project includes different states for loading data, handling errors, starting the quiz, answering questions, and displaying the final results.

## Features
- **Dynamic Question Loading:** Fetches questions from an API and displays them individually.
- **State Management:** Uses the `useReducer` hook to manage the quiz's different states, such as loading, active, and finished.
- **Scoring System:** Automatically calculates points based on correct answers and tracks the user's high score.
- **Responsive UI:** Includes components like a header, main content area, and footer, with a clean and responsive design.
- **Progress Tracking:** Displays the user's progress throughout the quiz, including the number of questions answered, current score, and maximum possible score.

## Components
- **Header:** Displays the app's title or branding.
- **Loader:** Shows a loading spinner while data is being fetched.
- **Error:** Displays an error message if the data fetching fails.
- **StartQuestions:** An interactive screen is used to start the quiz.
- **Question:** Displays each question with possible answers.
- **NextQuestion:** Button to navigate to the next question.
- **Progress:** Shows the current progress of the quiz.
- **Finish:** Displays the final score and the user's high score.
- **Footer:** Contains additional information or links.

## Technologies Used
- **React:** For building the UI components and managing the state.
- **CSS:** For styling the application.

## Getting Started
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm start`.
4. Ensure that the API server providing quiz questions is running.
