# Tesodev Data Management System
The Tesodev Data Management System is a feature-rich React application designed for managing and searching user data. It consists of three main pages: Home, Search Results and Add Record. Each offering distinct functionalities and features. Such as pagination, sliding cards and validators.

## Features
* Home Page
  * Add New Record Button: Clicking this button navigates you to the "Add New Record" page, where you can add new user data.
  * Search Input: A search input at the center of the page allows you to filter results by name.
    Show More Button: When more than three results match your search, a "Show More" button appears, allowing you to navigate to the "Search Results" page.
  * Footer Card Slider: You can slide through user data cards with arrow buttons in the footer.
  * Contact Details: Contact information for Tesodev is provided, including address and phone number.
  * Google Map: An embedded Google Map displays Tesodev's location.
  
* Search Results Page
  * Pagination: User data is displayed with pagination, showing five results per page.
  * Dropdown Sort: You can sort results by Name Ascending, Name Descending, Year Ascending, and Year Descending using the dropdown menu.
 
* Add New Record Page
  * Form: A form allows you to add new user data, including name, surname, country, city, and email.
  * Validation: The form includes validation for the following conditions:
    * Name and surname input cannot be empty.
    * Name and surname must contain at least two words.
    * Name and surname cannot contain numbers.
    * Name and surname must be at least four characters long.
    * Country and city inputs cannot have fewer than two letters.
    * Email input is validated for correct email format.
  * Error Pop-Up: When validation errors occur, an error pop-up will display, listing the errors. The pop-up includes an option to close it.
    * Error List: The pop-up displays a list of errors related to the form fields.
    * Close Button: Users can close the error pop-up by clicking the "X" button.
  * Add Button: The "Add" button adds a new user data object (for display purposes only).

## Getting Started
To use this project, follow these steps:
1. Clone the repository to your local machine: git clone https://github.com/dogukankumru/React-Tesodev-Challenge-Project.git
2. Navigate to the project directory:
3. Install project dependencies: (npm install)
4. Start the development server: (npm start)
5. Open a web browser and access the application at http://localhost:3000.

## Usage
  * Home Page
    1. Click the "Add New Record" button to navigate to the "Add New Record" page.
    2. Enter a name in the search input field. If more than three results match, a "Show More" button will appear.
    3. Use the card slider to view user data cards.
    4. Scroll to see contact details and the embedded Google Map.
       
  * Search Results Page
    1. Use the dropdown to sort results.
    2. Click page numbers for pagination.
    3. Enter a name in the search input field.
    4. Click the "Search" button to see updated results.

  * Add New Record Page
    1. Fill out the form with user data.
    2. Ensure data meets validation criteria.
    3. Click the "Add" button to add a new user data object (display purposes only).
   
## Screenshots
### Home Page
<img width="1440" alt="Screenshot 2023-09-11 at 10 29 23" src="https://github.com/dogukankumru/React-Tesodev-Challenge-Project/assets/95023894/1f5874a9-bac5-41fd-a66e-a0f0b3905fc5">
<img width="1440" alt="Screenshot 2023-09-11 at 10 29 57" src="https://github.com/dogukankumru/React-Tesodev-Challenge-Project/assets/95023894/63822e45-7bf5-459b-9b85-355599dc7f3e">

### Search Results Page
<img width="1440" alt="Screenshot 2023-09-11 at 10 31 02" src="https://github.com/dogukankumru/React-Tesodev-Challenge-Project/assets/95023894/93d869cb-6cfd-40ed-915a-f6c699ba22e8">

### Add New Record Page
<img width="1440" alt="Screenshot 2023-09-11 at 10 31 46" src="https://github.com/dogukankumru/React-Tesodev-Challenge-Project/assets/95023894/a094edfc-e2be-4f8e-a027-f432401481b9">
<img width="1440" alt="Screenshot 2023-09-11 at 10 33 50" src="https://github.com/dogukankumru/React-Tesodev-Challenge-Project/assets/95023894/fbc32d9c-8de1-4c4c-bab8-e803d0b9d951">
