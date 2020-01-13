# Team-Generator (Software-Engineering based)
___________________________________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________________________________

**Description

- Node CL application that takes in information about employees and generates an HTML webpage that displays summaries for each person.

- the app will take in one manager for the team and require you to at least add one more employee before you can generate an html.

- You can add either Engineers or interns and can add as many as you like.

- The team will generate in the order of manager, engineers, interns

- The team file will be generated in the output folder of the repo

____________________________________________________________________________________________________________________________________

**Instructions

- fork and clone the repo
- run npm install
- run node app.js   

**Validation**
- this app also uses regex user validation
- Employee name will only accept in Character a-z
- Employee id will only accept numbers
- employee email will accept most formats - the validation pattern is from the ASP.NET code base.
- school and github will accecpt both characters and numbers.
- manager office number will accept the following formats
   - 123-456-7890
   - (123) 456-7890
   - 123 456 7890
   - 123.456.7890
   - +91 (123) 456-7890
____________________________________________________________________________________________________________________________________

**GIF Demo**
![Gif](teamgeneratorGIF.gif)

**Example picture of output file**
![Example profile](./example-img.png)