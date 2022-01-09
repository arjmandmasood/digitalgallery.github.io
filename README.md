## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/arjmandmasood/digitalgallery.github.io/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/arjmandmasood/digitalgallery.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.





# Software Quality Management
## Problem Sheet 2 : Suggested Answers

#### 1. What are the main objectives of software testing?
- Demonstrate that an application meets its requirements
    - Prove it does what it's intended to do.
- Discover situations when the application behaves in an unexpected and unwanted way.
    - Find bugs.

#### 2. What should be documented in a test plan?
 A test plan describes the scope, approach, resources and schedule of intended test activities for a software product.
 Recommended documentation defined in "ISO/IEC/IEEE 29119 Software Testing" (an internationally agreed set of standards for software testing). Some things a test plan can include

 - Scope of testing effort (what features will be tested)
 - Details of test strategies to be used
 - Assigned responsibilities for various test stages (staffing)
 - Schedule of testing activities
 - Entry and exit criteria (when can test activities start and end)
 - Details of documentation to be used and produced
 - What metrics will be used (defect count, test coverage etc.)

#### 3. What is a test case? What are the main elements of a test case?
A test case is the full set of information required to verify a single piece of software functionality. It includes:

- an identifier for the test case
- the test objective (what functionality is being tested)
- operating and set up conditions
- input data
- steps to carry out the test
- expected results

Good bug reports are described in this form, e.g. https://github.com/travs/markdown-pdf/issues/178.

For comparison, here's a very bad bug report https://github.com/swagger-api/swagger-codegen/issues/8802.

####  4. Imagine you’re on the QA team for the Google Maps mobile app. Write a test case for the scenario where a user wants to get directions to a local bar.

##### Test Case 123: Get Cycling Directions for non-logged in user

###### Objective
Verify that a user (who isn't logged in) can search for and get cycling directions to a location.

##### Setup
- Windows 10 Home version 10.0.17134
- Firefox 62.0.3 (64-bit)
- User not logged in
- App has access to location data, and user is located in Galway.

##### Test Steps
- Enter "Bierhaus" in the search box
- Select the first result from the auto-suggest list (Bierhaus, Henry St, Galway)
- Map should zoom to the location and display location information in the left hand pane
- Click the Directions icon in the information tab
- Enter GMIT in the "Starting Point" field
- Select the cyclist icon

##### Expected Result
- Map should show three possible routes
- Suggested route should be highlighted in blue
- Journey times and distances should be shown for each route

####  5. Explain how white box testing differs from black box testing. Is one better than the other?
- White box testing uses detailed knowledge of the internal structure of the application to verify that all key parts of the code are functioning correctly, and to verify that all the paths through the code are executed by tests.
    - Focuses on data processing and calculation.
- Black box testing ignores the internal workings of the application and focuses only on the outputs of the application in response to inputs.
    - Concerned with the user's point of view.
- Both types of testing have a part to play in a QA program, and neither can be relied on exclusively to ensure quality.
    - White-box testing:
        - identifies bugs early in the development lifecycle
        - is well-suited to automation
        - shows what parts of the codebase haven't been well tested
    - Black-box testing:
        - demonstrates that requirements have been met
        - can address implicit quality factors like usability and reliability

####  6. What is Equivalence Partitioning and why is it useful?
Equivalence partitioning divides possible inputs into classes or ranges of values which are expected to be processed identically and produce the same result. It increases the efficiency of the test effort by testing only one value in an equivalence class rather than all possible values in the range.

####  7. A software-controlled brewing system is programmed to turn on heating if the temperature of the beer falls below 18 degrees and to activate cooling if the temperature goes above 21 degrees. Identify the equivalence classes that should be used to test this feature and give example values and expected behaviour of the system for these values.

-  < 18 degrees (heating). Example value: 16 degrees.
- 18 degrees - 21 degrees (inactive). Example value: 20 degrees.
- \> 21 degrees (cooling). Exampe value: 23 degrees.

####  8. If we also decide to use Boundary Analysis to test the brewing system, what boundary values should we test?
- 17, 18
- 21, 22

####  9. Why do organisations bother to do integration testing even when individual components have been extensively tested?
Issues can arise when individually functioning components are put together into a larger system, e.g.

- APIs for sharing data may be incompatible or handle data inconsistently.
- Separate modules may have adverse affects on each other when working a larger system.
- Different component teams may have made different assumptions regarding shared data/global data structures.

####  10. You’re working on a web application with separate components for user account management, application data persistence (storing in a database) and search, data processing, and client-side frontend (GUI). Describe how you might approach integration testing of this system.
Possible approach (backend first):

- Start with user account management, users can be added and logged in using existing test drivers (e.g API clients).
- Then add application data persistence and search. Logged in users can now save and search for things.
- Then add processing. Logged in users can now do more stuff with the things they have saved.
- Finally add frontend. All backend functionality supporting the frontend has already been integrated and tested with test drivers.

Alternative approach (frontend first, suggested in class):

- Start with frontend. Assumed already tested with mock backend services returning dummy data.
- Replace mock accounts service with real accounts service. Verify user management works end to end.
- Replace mock persistence/search service with real service. Verify real logged-in users can create and search for stuff.
- Replace mock processing service with real service. Verify real logged-in users can do more things with the stuff they've created.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
