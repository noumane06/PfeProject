# Management of meetings between client and company
## Description
**platform that connects customers needing a service with the companies that provide it and set up an appointment depending on availability.**
## Features
Our web application will have the following features:
- **Search**: The client can search for companies with three criteria: city, domain and company name. The result will list all the companies with their name, description and the number of likes they have.
- **Authentication**: the client and the company must have an account to book meetings and view other profiles. There are two types of user: Company and Client.

   **The company** must provide the following information:
    - Title (Director, Secretary, HR ...)
    - Name, First name, Company name, Email, Password.
    - Telephone (landline and mobile), presentation of the company, diplomas , training , languages spoken, Domain and address.
    
   **The customer** must provide the following information:
    - Name, first name, Email, password
    - Address, City, mobile phone.
- **Appointment** : the client can visit the profile of a company and make an appointment,
  he can see the schedule and reserve free time by specifying the purpose of this meeting. He then waits for the company to confirm this meeting.
  the company receives a notification with the customer's profile and the purpose of the meeting.

## Technologies
I developed this project using nextJs , with the integration of expressJs in the backend . And mongodb as a database .

**Styling** : i used sass as css compiler , all styling was created from scratch by me with the help of https://ant.design/ . 
## Preview of some routes
### Home  
![alt text](https://github.com/noumane06/PfeProject/blob/master/home.png?raw=true)
### Search 
![alt text](https://github.com/noumane06/PfeProject/blob/master/search.png?raw=true)
### Profile page
![alt text](https://github.com/noumane06/PfeProject/blob/master/profile.png?raw=true)
![alt text](https://github.com/noumane06/PfeProject/blob/master/profile2.png?raw=true)
### Notifications 
![alt text](https://github.com/noumane06/PfeProject/blob/master/notification.png?raw=true)
