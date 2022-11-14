# Portfolio Project 2 - Javascript Essentials: What am I?

[What am I?](https://roman-gs.github.io/what-am-I/) is a 10 page website each containing a riddle. It allows the player to guess the answer, and gives the user the answer by displaying an alert and an image of the object.

It was developed as part of the second module in the Full Stack Software Development course dispensed by the [Code Institute](https://codeinstitute.net), using HTML, CSS & JavaScript.

![Multi-device-test](/assets/readme-images/amiresponsive.jpg)

## Repository:

You can find the Github repository [here](https://github.com/roman-gs/what-am-I).

***

## Features:

- ### The title and page number:

    - Featured at the top of all 10 pages, it contains the title of the website and the number of the page the user is currently on.

    ![Title-image](/assets/readme-images/title.jpg)

- ### The riddle area:

    - The riddle area displays the riddle in plain text.

    ![Riddle-area-image](/assets/readme-images/riddle.jpg)

- ### The user answer area:

    - This input field lets the user type in their answer.
    - A trim method is applied to its value so the user is not penalised if there's a space before or after their answer.
    - A toLowerCase method is applied to its value so the user is not penalised if there are capital letters in their answer.

    ![Answer-box-image](/assets/readme-images/answerbox.jpg)

- ### The game answer area:
    
    - This paragraph is invisible until the user clicks on the "Submit" button.
    - If the user's answer is correct, the "Correct!" message is shown.
    - If the user's answer is incorrect, the "Good idea but the correct answer was sponge!" message is shown

    ![correct-image](/assets/readme-images/correct.jpg)
    ![incorrect-image](/assets/readme-images/incorrect.jpg)

- ### The "Submit" button:

    - This button allows the user to submit their answer.
    - It's greyed out if the answer box is empty.
    - Its background color changes from grey to green when hovered over.

    ![Submit-image](/assets/readme-images/submit.jpg)

- ### The "Show Me" button:

    - This button allows the user to get the answer by displaying the image.
    - It's greyed out after the image has been displayed.
    - Its background color changes from grey to red when hovered over.

    ![Show-me-image](/assets/readme-images/showme.jpg)

- ### The "Next page" and "Start Over" links:

    - This image is, by default, a question mark.
    - It changes to an image of the object once the user click on the "Submit" or the "Show Me" button.
    - Its border changes to green if the user guessed correctly.
    - Its border changes to red if the user guessed incorrectly or clicked on the "Show Me" button.

    ![Image-area-image](/assets/readme-images/image.jpg)

- ### The "Next page" and "Start Over" links:

    - The "Next page" link is displayed on all pages except for the last one (Thank you page).
    - It turns bold and green if the user's answer is correct.
    - It turns bold and red if the user's answer is incorrect. 

    - The "Start over" link is displayed on all pages and takes the user back to the first page.

    ![links-image](/assets/readme-images/links.jpg)

- ### The "Thank you" page

    - The last page displays a thank you message along with an image. 

    ![Thank-you](/assets/readme-images/thankyou.jpg)

***

## Testings:

- I tested that this website works on different browsers: Chrome, Safari and Firefox.

- I tested that this website works on different devices: laptop and mobile phone. 

- I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the DevTools device toolbar.

- I confirmed that the "Submit" button works as expected:
    - It's greyed out if the answer box is empty and activated when the user types something in it. 
    - Its background color changes to green on mouse over.
    - It behaves as expected when clicked upon.

- I confirmed that the "Show Me" button works as expected: 
    - Its background color changes to red on mouse over.
    - It behaves as expected when clicked upon.
    - It's deactivated once the image is already displayed.

- I confirmed that the "Next page" button takes the user to the following page when clicked on, all the way to the "Thank you" page.

- I confirmed that the "Start Over" button takes the user back to the first page when clicked on. (index.html)

- I confirmed that all the images are clearly visible and matches the objects.

***

## Bugs:

### Solved:

## Validator testings:

### HTML:

- No error or warning were returned when passing through the [W3C validator](https://validator.w3.org/)

### CSS:

- No error or warning were returned when passing through the [W3C CSS validator](https://jigsaw.w3.org/css-validator/)

### JavaScript:

- No error were returned when passing through the [JSHint validator](https://jshint.com/)
- JSHint showing 27 unused variables but they're all called in the HTML pages. Three functions times the 9 pages. 

### Accessibility:

- Scored all greens using Lighthouse in Devtools.

![Lighthouse](/assets/readme-images/lighthouse.jpg)

***

## Deployment:

The site was deployed to [GitHub pages](https://github.com/roman-gs). 

### To deploy to GitHub Pages:
- Log into GitHub and locate the repository
- Navigate to the "Settings" tab 
- Click on "Pages" on the left pane
- Select "Main" in the drop-down menu called "Branch" 
- Click on "Save"

### To Fork the Repository:
- Log into GitHub and locate the repository
- Click on "Fork" in the top right corner 
- Select "Create Fork"

### To create a local Clone:
- Log into GitHub and locate the repository
- Open the "Code" drop-down menu in the top right corner
- Copy the URL from under the HTTPS tab
- In your IED, open Terminal.
- Change the current working directory to the location where you want the cloned directory.
- Type git clone, and then paste the URL you copied earlier.
- Press "Enter" to create your local clone.

***

## Credits:

### Content & Media:

- The images were all taken from [Pexel](https://www.pexels.com/)
- The riddles were taken from [the Parade.com website](https://parade.com/947956/parade/riddles/)
- All icons coming from [Fontawesome](https://fontawesome.com/)
- Fonts coming from [Google-fonts](https://fonts.google.com/)

### Code:

- Code from the HTML & CSS Essentials & JavaScript Essentials courses including the Love Running project and the Love Maths project walkthroughs. 
- Thanks to the [W3Schools](https://www.w3schools.com/) and the [Stackoverflow](https://stackoverflow.com/) websites.