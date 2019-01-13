# Angular5-node.js-Web-project

Both Pages are multiSites and singleSite, the site runs on Node.js on localHost and the connection to the database in mySql with tables:

*itour_feedback.sql

*itour_properties.sql

*itour_sites.sql

multiSites: A screen displays a list of sites with an image and ranking and explanation for each site, after filtering,
Arrive at this screen, or when filtering out navBar by regions,Or when you filter from the zone bar.

singleSite: view each site separately, display site images, its properties, explanation, rating and reviews, and a link to a google map that allows navigation to reach the site, and also allows to add rating and opinions.

The project is divided into two  files Client and  Server
Server :whose contains Node.js files ,execute connect to the database and run queries to the database.
client: side that contains the Angular files with all the departments. 
The requests between the parties are made by a Http protocol.
