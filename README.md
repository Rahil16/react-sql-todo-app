# react-sql-todo-app
A To-Do app built using React and SQL.

## Description:
This is a To-Do app built using PERN stack (postgressql, Express js, React js, Node js). The purpose of this To-Do app is to display tasks entered by the user and strike them out on completion, user can also delete the tasks completely if wanted. <br>
The app has a simple UI. Some parts of the UI like SVG's, icons, etc. are used from Material UI library.Vite is used for local development. <br>
The app also uses api from <a href="https://zenquotes.io/">zenquotes.io</a> to display the thought of the day as a feature. <br>
(The app is not compaitaible for mobile devices)

## Screenshots:
![image](https://github.com/Rahil16/react-sql-todo-app/assets/57716269/b4ecd1c9-f104-4946-8f31-1c506a92a835) 
![image](https://github.com/Rahil16/react-sql-todo-app/assets/57716269/e272bf8b-9fe0-4c90-afc1-47ff22f035bc)

## Usage and Installation Instructions:

<ol>
	<li> Cloning the repository<br>
		
	git clone https://github.com/Rahil16/react-sql-todo-app
	 
</li>
<li>
	Installing the dependencies:

	npm i
 
</li>
<li>
	You will need to use two servers one to run client side and the other to run the server side. I am running the client side on port 5173 which is used by default when using vite and for the server side I am hosting it on port 5000.
</li>
<li>
	For the database I have used PostgresSQL. You will need to create a database and name the columns appropriately.
</li>
<li>
	Run your Application

 	npm run dev
</li>
<li>
	Open your Browser and visit 'http://localhost:5173/' to view the application
</li>
</ol>

### Folder Structure
<ul>
	<li>
		vite-project: Contains the frontend code written in React.js.
	</li>
	<li>
		Backend: Contains the backend code written in Node.js and Express.js.
	</li>
</ul>

### License:
This project is licensed under the MIT License.
