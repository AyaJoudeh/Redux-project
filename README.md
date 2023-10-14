Project Name: Task-Shahid
Project Structure:
•	Project Directory: Inside the 'src' directory, you'll find the source code for my project, including the 'components' and 'pages' folders.
•	Top-Level Components:
•	App.js: This serves as the main entry point of my application, where I define the top-level routing and layout.
•	Pages Folder: Contains the main pages of the application, including the 'home,' 'about,' 'blogs,' and 'contact' pages.
•	Components Folder: Houses the primary components used on these pages, such as 'layout,' 'form,' 'redux,' and 'blogs.'
•	Components Directory: Within this directory, you'll find four subfolders:
•	Redux: This folder is crucial for managing the theme parameter across various components. It contains four essential files: 'store.js,' 'themeActions.js,' 'themeReducer.js,' and 'themeSelector.js.' These files facilitate theme management, and I've also integrated local storage to ensure the user's chosen theme persists across sessions and page refreshes.
•	Layout: The 'layout' folder comprises three files: 'layout.js,' 'navigation.js,' and 'navigation.css.' These files define the overall structure and navigation elements of the application.
•	Form: This folder contains 'input.js,' which handles form-related functionality.
•	Blogs: The 'blogs' folder is home to 'BlogCard.js,' a component for displaying blog-related content.
•	Styles: My project's styling is influenced by two libraries, 'react-bootstrap' and 'Ant Design.' I've made an effort to avoid using style files and, instead, have relied on classes to customize the styles. These libraries seamlessly coexist, eliminating any style conflicts.
•	Routes and Navigation: For navigation and routing between different pages, I've employed the 'react-router-dom' library. Users can effortlessly navigate between pages using the navbar, which lists the available pages. Clicking on any page name provides quick access. I've wrapped the routes with a 'layout' component, which includes the navbar and outlet component, ensuring a consistent layout across the application.



How to Run the Application Locally:
Before getting started, ensure you have the following prerequisites installed on your machine:Node.js , node.

Steps to Run the Application:
git clone <repo-url>
npm install 
npm start


https://github.com/AyaJoudeh/Shahid-task/assets/99333648/177bda72-6a26-447a-ba95-62cdc1c8c434

