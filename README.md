# NodeJs-RESTAPI-CRUD
This is a basic Node.Js based REST API that just performs simple CRUD operations.

### End Points ->
   #### GET Request
   ###### To Get Every Person -> http://localhost:8080/person/getperson
   ###### To Get Every Person -> http://localhost:8080/person/getperson/id
   
   #### POST Request
   ###### To Add A Person -> http://localhost:8080/person/newperson
   JSON Format = {
                   "name" : "YourName" ,
                   "language" : "Lang which you know"
                   }
   
   #### Delete Request
   ###### To Delete A Person -> http://localhost:8080/person/deleteperson/id
   
   #### Patch Request
   ###### To Update A Person's Detail -> http://localhost:8080/person/updatepersonlang/id
   JSON Format = {
                   "language" : "Lang which you want to update to"
                   }
   
   

   
   

