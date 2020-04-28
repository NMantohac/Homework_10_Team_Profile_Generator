# Homework_10_Team_Profile_Generator

URL Links:
  1) https://github.com/NMantohac/Homework_10_Team_Profile_Generator
  2) Overall Function: https://drive.google.com/file/d/1Xz4UVmrmbjhqw25QzQOEXHg6UMvYJGv4/view
  3) Passed Test Cases: https://drive.google.com/file/d/1AL9r3vKXRCeGX31akKkBy6p1oANNcVjx/view
  
## Description:
  - A team profile generator that renders an HTML page based on the user's answers to a series of prompts utilizing Inquirer (npm).
    The series of prompts will show up after the user clones/downloads this repo, and runs **npm install** and **node app.js** in 
    VS Code's terminal. In general, the HTML page displays the team member's name, role, id, email, and a specific piece of information 
    that is unique to that role. For managers, it is the office number; for engineers, it is the GitHub name; and for interns, 
    it is the school name. In addition, the user can run test cases and check if they pass by typing in **npm run test** 
    in the terminal.
  - The team profile generator is done through HTML and Javascript code in Visual Studio Code, and utilizes Bootstrap with its 
    components and utilities. There are large amounts of javascript files, but overall they contain variables (const/let), 
    functions, if-else statements, and classes and constructors. The team.html is rendered by the htmlRenderer.js file, whereas the
    app.js file is the main javascript file that prompts the user the necessary questions to display the information in the 
    team.html file. In addition, npm installation was used in order to install Inquirer for the questions prompts, 
    and Jest to run the test cases.
  
## Technologies:
  - Visual Studio Code
  - HTML, Javascript
  - Bootstrap
  - npm - Inquirer
  - npm - Jest
  
## Challenges:
  - This homework went a lot easier than I expected because there was already a 'built-in' guide for the necessary steps to complete
    the team profile generator. There were comments that were outlined it in the app.js file, the htmlRendered.js file was already done
    to render the HTML page, and the test cases were already written out for the user to just type in **npm run test**. Overall, this
    was a good experience and practice for writing classes and constructors, and the logic behind displaying the answers after doing
    an inquirer prompt. 
  - Initially, the README.md file kinda overwhelmed me since there were so much information, so I had to read it several times in order
    to fully understand what I had to do. I didn't have much difficulty after that because I went step-by-step and did the classes and
    constructors first before I went on to writing the rest of the code in the app.js file. The logic for displaying the answers after
    the prompt was a small challenge because I initially created functions for each employee role, but I decided to all write it
    in one function because I thought it would make sense to me if the user wanted to add more members. 
  - The only thing that I really learned that I haven't already was the logic behind displaying the HTML through the htmlRendered.js
    file. I wanted to understand how the information was displayed, so I read through it several times and I think I understood the 
    process. In addition, I read through the test cases for each test file, so I can get a better understanding of them.
  - I was able to solve each of my problem through time management, persistent effort, patience, and using my online resources!
    
## Screenshot(s):
  
  Team Profile Generator - Overall Rendered HTML Page:
  ![Team Profile Generator - Overall Rendered HTML Page:](https://puu.sh/FzOYD/6bb1064139.png)
  
