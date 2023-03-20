Requirements for Landing page
Requirement 1: <br/>
– Test Case ID-0001: When not signed in, the landing page shall display a method 
(button or link) to navigate to a “Sign-in” page# News-app<br/>
Requirement 2:<br/>
– Test Case ID-0002: When signed in, the landing page shall display the user’s 
name<br/>
– Test Case ID-0003: When signed in, the landing page shall display a method to 
sign out (button or link)<br/><br/>

Requirements for Sign in page<br/>
Requirement 1:<br/>
– Test Case ID-0004: Implement a form that will sign in a user<br/>
– Test Case ID-0005: The form shall use a textbox to collect a user name<br/>
– Test Case ID-0006: The user name shall be required<br/>
– Test Case ID-0007: The form shall use a textbox to collect a password<br/>
– Test Case ID-0008: The password shall be required<br/>
– Test Case ID-0009: The form shall use a button to submit the form<br/>
Requirement 2:<br/>
– Test Case ID-0010: When a correct combination of user id and password have been submitted, navigate to 
the Landing Page as signed in.<br/>
Requirement 3:<br/>
– Test Case ID-0011: When an incorrect combination of user id and password have been submitted, display 
an appropriate message.<br/><br/>

Requirements for Sign up page:<br/>
Requirement 1:<br/>
– Test Case ID-0012: Implement a form that will sign in a user<br/>
– Test Case ID-0013: The form shall use a textbox to collect a user name<br/>
– Test Case ID-0014: The user name shall be required<br/>
– Test Case ID-0015: The form shall use a textbox to collect a password<br/>
– Test Case ID-0016: The password shall be required<br/>
– Test Case ID-0017: The form shall use a textbox to collect a confirmation password<br/>
– Test Case ID-0018: The confirmation password shall be required<br/>
– Test Case ID-0019: The form shall use a button to submit the formv
Requirement 2:<br/>
– Test Case ID-0020: The user name shall be a string at least 8 character long<br/>
– Test Case ID-0021: The user name shall not include any spaces<br/>
– Test Case ID-0022: The UX shall automatically trim leading and trailing spaces<br/>
Requirement 3:<br/>
– Test Case ID-0023: The password shall not include any spaces<br/>
– Test Case ID-0024: The password shall be at least 8 characters long<br/>
– Test Case ID-0025: The UX shall automatically trim leading and trailing spaces<br/><br/>
– Test Case ID-0026: The password must contain at least one upper case letter<br/>
– Test Case ID-0027: The password must contain at least one lower case letter<br/>
– Test Case ID-0028: The password must contain at least one character that is not a 
letter.<br/>
Requirement 4:
– Test Case ID-0029: When the form is correctly filled out and submitted, navigate to the 
Landing Page as signed in.<br/>
Requirement 5:
– Test Case ID-0030: When an incorrect entry is made, display an appropriate message.<br/><br/>

Requirements for Database:<br/>
Requirement 1:<br/>
- Test case ID-0031: Check if the data is landing in the database.<br/>

Requirements for Status Codes:<br/>
- Test case ID-0032: 200 OK<br/>
- Test case ID-0033: 400 The request was not properly found<br/>
- Test case ID-0034: 401 Access denial due to incorrect credentials<br/>
- Test case ID-0035: 404 Resources not found<br/>
- Test case ID-0036: 500 Server threw an error<br/>


| Test Case ID | Name of the Tester |Date| Pass/Fail | comment |
|---|---|---|---|---|
|ID-0001|Sri Harsha|03/08/2023|Pass|The landing page shows a sign in button|
|ID-0002|Sri Harsha|03/08/2023|Pass|The user name is displayed when the user is signed in|
|ID-0003|Sri Harsha|03/08/2023|Pass|Sign out option in displayed when the user is logged in|
|ID-0004|Sri Harsha|03/08/2023|Pass|Sign in form is available to the users|
|ID-0005|||||
|ID-0006|||||
|ID-0007|||||
|ID-0008|||||
|ID-0009|||||
|ID-0011|||||
|ID-0012|||||
|ID-0013|||||
|ID-0014|||||
|ID-0015|||||
|ID-0016|||||
|ID-0017|||||
|ID-0018|||||
|ID-0019|||||
|ID-0020|Bhuvan|03/11/2023|Fail|Mail ID is used to login instead of the User Name|
|ID-0021|||||
|ID-0022|||||
|ID-0023|Sri Harsha|03/15/2023|Pass|The Page wont accept the password if there are spaces in it|
|ID-0024|Sri Harsha|03/15/2023|Pass|Minimum length of the password is 8 characters|
|ID-0025|Sri Harsha|03/15/2023|Pass|The page igores all the spaces that are added after the mail id|
|ID-0026|Sri Harsha|03/15/2023|Pass|One upper case is mandatory|
|ID-0027|Sri Harsha|03/15/2023|Pass|One lower case is mandatory|
|ID-0028|Sri Harsha|03/15/2023|Pass|One special character is mandatory|
|ID-0029|||||
|ID-0030|||||
|ID-0031|||||
|ID-0032|||||
|ID-0033|||||
|ID-0034|||||
|ID-0035|||||
|ID-0036|||||
