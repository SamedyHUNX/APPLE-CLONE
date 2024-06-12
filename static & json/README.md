# apple clone

using git for version and data management.
Since this project will be entirely handled by me. I will be responsible for everything from coding to folder structuring, gitlab/github role management, etc.

1. GIT STRATEGY
It is an utmost important that as a developer one uses git for project management. Properly managing roles will be a crucial phase to take the project at hand to fruition and completion.
This below will be myg strategy towards git/gitlab management of this particular project:
    -> uses git init at the start of the project to initalize git into the project for version management
    -> automatically, main branch is created after the initialization. But main branch should not be touched, conventionally speaking, until the development is satifised.
    -> use git flow init -d to create the develop branch for project development.
    -> setting name, and email using git config
    -> connecting the project with the remote server using 'remote add origin <link of gitlab>'
    -> should not work directly on either the develop or the main branch
    -> create a feature branch using 'git flow feature start <name>' to create components for implementation
    -> unless the outcome is satisfied; do not finish them just yet
    -> after being satisfied with the outcome, finish it to make git automatically merge them into the develop branch
    -> the naming convention for a feature will be '#numberth'
    -> the count of feature branch can be limitless depending on needs
    -> frequently push a commit to the remote server to avoid unintended consequences
    -> after the production is satisfied, use 'git flow release start <version>' to do a quality check before deployment
    -> in case that there are unexpected bugs, use 'git flow bugfix start' to correct them
    -> after being satisfied with everything, finish to the release branch to automatically merge them into both the development and the main branch
    -> the release branch requires the version number. This project's convention is that it starts with 1.0 and then increments by 0.1 (depending on the occurences of the hotfix branch (talk later))
    -> hotfix branch will be created in the case that there are improvements could be made or whether there are still bugs residing within the project. The name of the hotfix branch depending on the number of this type of branch creation (after the last release and before the next release) and it increments by 0.1 every time.

2. CONVENTION GUIDE
    1. introduction
        To ensure consistency, debuggability, and standard of a webpage, it is essentially important to have a standard document as a reference before engaging in a project. This convention guide is a reference for my own personal assigned endeavor of cloning the Apple.com website to apply what I have learned. 
    2. guidelines
        Cleanliness and tidiness are the utmost aspect before, during, and after doing something, regardless of whether it is in life, career, academic, or any aspect of an endeavor.  In this very regard, tidiness ensures reproducibility, debuggability, and, what we often overlook on, appealing. 
    2.a. file/folder structure
        1. Files and folders that are not global should be arranged within, analogically speaking, a separated box, or technically speaking, a separated folder. In personal case of cloning a website, I will be cloning three pages: 1. The Homepage; 2. The Sign-up page; and 3. The Find-Store page. Since some common components will be created to reuse and be applied to several different pages, a folder containing common components such as footer, header, navbar, hero, slideshow, card will be created to store them. The naming of the folder and its children will be capitalized to distinguise between common components and normal files within the project. 
        2. One file containing all the static data used to add dynamicity such as array or objects, READ.me file, etc., will be created to store them. This ensures clean folder structure and navigation between files/folders. 
    2.b. css convention
        Since writing a website often requires complex structure and lengthy codes, to comply with the own defined rules written above: a comment stating the start or end of each part or section will be specifically included, regardless of a file type. For example:

        /* navbar */ 

        /* MARKING THE END*/ (CAPITALIZED) 
    
        There is also one rule that I have formerly heard within the coding called “Do not repeat yourself”. The idea has been lingering on my mind ever since. Therefore, since a thousand lines of code will be written, reuse code whenever possible, if possible. This practice will surely produce each webpage with an appealing look to users. 

        Be very specific in naming: we shall not have the same ID tag for element, since ID is unique and is not applicable to more than one element. Another thing on naming aspect is that to be very specific at naming a class. If the element is in the hero section, then the word hero should be included; if it is of the navigation bar, then a shorthand word of navigation bar should be included; this applies for everything from atop to the bottom of a webpage.

        An element-starting and element-closing tag MUST be on the same line vertically: this ensures debuggability. Nested container MUST be one-tab away from the parent container. 

        Have a CSS-format comment before and after finishing a section.

        Starting to style an element with a left-to-right and top-to-bottom manner. Never leave something unfinished before going to the next element or line.

        Never starting coding CSS without a plan: using the inspection tool of a browser, in my case Firefox and Chrome, for inspection on aspects such as: gap, margin, padding, width, height, font size, font family, etc. And then, use a pencil and a paper to draw out the grid system of the webpage, and then conceptualize the numbers of container necessary. This practice ensures that time will not be wasted in styling and arrangement.

    2.c. javascript convention
        This phase of study, only responsiveness is a requirement of this completion of the project. However, JavaScript should not be omitted entirely, since this piece of technology was created specifically for CSS and html to add reactivity of static nature of CSS rules. 

        In my case, JS will be used to add some small functionality to dropdown menu of the 

        Bag icon of the navbar. After clicking the bag, a dropdown menu will appear. Additionally, within the footer section as well. 

        COMPONENTS: will be created using purely vanilla JavaScript. 

        1. JS-variable naming: a JavaScript variable must be in a Pascal or a Camel format, depending on the type of function. And each name must be meaningful, this means that each name must be named corresponding with what it contains or target: 

            - NAVBAR (for navbar common component), 

            - dropDownMenu (for the dropdown menu.), 

            - closeButton (for targeting the closing button), etc. 

        2. The linking element (<script>) must be within the body but at the bottom before the closing tag of the body element. But for JavaScript files containing static will go in the head section. 