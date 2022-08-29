# Numbers APP

## What It Is
This is a Codecademy project in which I used React, Bootstrap, and a couple of APIs to create an app that provides the user with math facts, trivia, and practice. The purpose of the project was to utilize APIs and provide the user with 'messages'. 

## How It Works

When the app is opened, the user is provided a welcome message and three options: Math Facts, Math Trivia, and Math Practice. The user can select one of the paths, which redirects them using Routing to a new page. 

For Math Facts, the user can choose to input a number or select `Random`. They will be provided a 'fact' about that number using the Numbers API. 

For Math Trivia, the user selects `Generate` and is given a trivia question about a random, unknown number. The user can input a guess as to what the number is, select `Submit`, and then select `Result` to check their answer. If needed, they are provided a calculator which is hidden unless the user selects `Show Calculator`. Depending on the result, the user will receive a message letting them know whether they were correct or incorrect in their guess. This also uses the Numbers API. 

Lastly, the Math Practice page utilizes the xMath API to generate addition, subtraction, multiplication, or division questions. The calculator component is provided on this page as well. The user can input a number, click `Submit`, then check if their answer is correct using the `Result` button. They will be given a message stating if they got the answer correct or incorrect. Unfortunately, this API was not functioning the last time I checked, so I may need to remove this page if it isn't fixed. 

## What I Found Difficult

The most difficult part of this build was refactoring the code. I didn't want the API calls to be made directly from the components, so I had to create a util folder and create individual files for each API. Once this was done, the code worked great. 

## What I Would Improve

I would really love to add more pages and activities to this app. I could include a page that has math videos directly pulled from the YouTube API. I could add links to other Math learning resources or embed games into the app itself. 