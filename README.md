# Job Search Organizer

## Aim

To build an entire application using 3-tier architecture using **React/Redux** as **UI**, **Sequlize** as ORM (**O**bject-**R**elational **M**apping) and **MySQL** to manage the database. Beside the main features, there are **validations** from the **UI** to the **database**.

## Technologies

> 1. **UI** -->  **React/Redux**
> 2. **UI - Server** --> **axios - ExpressJS**
> 3. **Server** --> **Express/NodeJS**
> 4. **Server - Database** --> **Sequelize - MySQL**
> 5. **Database** --> **MySQL**

## The EER Diagram

![alt text](assets/img/eer.jpg)

## User Interfaces

### Add New Job
As long as all "***Required***" fields are empty, we could not submit the form (**validation**)

![alt text](assets/img/addNewJob.jpg)

### List All Jobs (with Options)
![alt text](assets/img/displayJobs.jpg)

### Show Details of a Specific Job
![alt text](assets/img/displayJobs_show_details.jpg)

### To Change the "Status" or "Comment"
![alt text](assets/img/update.jpg)

## Execution

### Setting
I - Create a **Database** with the name of "**job_search_organizer**" then enter the "**password**" of your ***Database*** in the file [**index.js**](server/models/index.js)

II - Create **tables** for the ***database*** by setting the [**server.js**](server.js) with "**({ force: true })**"

![alt text](assets/img/server.jpg)

### Executing

I - **Database**: set the ***database*** to "**user**" (don't forget to provide the **password** of your DB in the file [**index.js**](server/models/index.js))

II - **Server**: start your server in your [**Git Bash**](https://git-scm.com/downloads) on the same folder of your [**server.js**](server.js) file. Enter the command

> npm install

to install the dependencies. Following by to start the ***server***:

> npm run build

III - **Client** - Open your favorite Internet Brower (**Chrome**, **Firefox**, **IE**, etc.) and enter in the address bar

> localhost:3000


---------------

## Author
* Dinh HUYNH - All Rights Reserved!
* dinh.hu19@yahoo.com