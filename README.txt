# yellow-class-demo


Functionalities and Sample endpoints-

1. Register Users-
   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/users/
   JSON body- {
      "email": "ankitsub961@gmail.com",
      "name": "Ankit",
      "password": "qwerty123" 
   }
   output- 
   {
        "status": {
            "message": "signup successful",
            "code": 200
        },
        "data": {
            "userId": "60a129328eec6e0015d97588",
            "name": "Ankit",
            "email": "ankitsub961@gmail.com",
            "status": "active",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjkzMjhlZWM2ZTAwMTVkOTc1ODgiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTYxQGdtYWlsLmNvbSIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTE3NDU3OCwiZXhwIjoxNjIxMTc4MTc4fQ.SDTdv2WGkfOmgoy_-_m2bEEL_UodDwBQIBcgpcy6fyA",
            "expiresIn": 3600000
        }
    }
   Remarks- 
   The fields email, name and password are compulsory to register a user successfully


   2. Login Users-
   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/users/ankitsub961@gmail.com/login
   JSON body- { 
      "password": "qwerty123" 
   }
   output- 
   {
        "status": {
            "message": "Login successful",
            "code": 200
        },
        "data": {
            "userId": "60a129328eec6e0015d97588",
            "name": "Ankit",
            "email": "ankitsub961@gmail.com",
            "status": "active",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjkzMjhlZWM2ZTAwMTVkOTc1ODgiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTYxQGdtYWlsLmNvbSIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTE3NDcyNCwiZXhwIjoxNjIxMTc4MzI0fQ.D2e3EDMEkOE80FwuiTR6RootYjUjQMBWnHQCYqKDRSQ",
            "expiresIn": 3600000
        }
    }
   Remarks- 
   The email in URL is the one which the password corresponds to. The field password is compulsory to login a user successfully
   
   3. Change Users details- 

   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/users/60a125b48eec6e0015d97572/updateDetails

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o
   }

   JSON body- {  
      "email": "ankitsub96@gmail.com",
      "name": "Ankit Dahiya",
      "password": "qwerty123" 
   }

   output- 
   {
        "status": {
            "message": "Login successful",
            "code": 200
        },
        "data": {
            "userId": "60a129328eec6e0015d97588",
            "name": "Ankit",
            "email": "ankitsub96@gmail.com",
            "status": "active",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjkzMjhlZWM2ZTAwMTVkOTc1ODgiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTYxQGdtYWlsLmNvbSIsInN0YXR1cyI6ImFjdGl2ZSIsImlhdCI6MTYyMTE3NDcyNCwiZXhwIjoxNjIxMTc4MzI0fQ.D2e3EDMEkOE80FwuiTR6RootYjUjQMBWnHQCYqKDRSQ",
            "expiresIn": 3600000
        }
    }
   Remarks- 
   This can be used to update some or all of the users' details. The new username to be set needs to be unique and not one used by any active user. 
   The userId and token used here is returned when user logs in using the correct credentials.
   All fields used here are optional.


   4. Make a new group- 

   Method- POST
   URL- https://yellow-class-demo.herokuapp.com/groups/

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o
   }

   JSON body- { 
      "name": "group21" 
   }

   output- 
   {
        "status": {
            "message": "Group Creation successful",
            "code": 200
        },
        "data": {
            "groupId": "60a12c398eec6e0015d9758a",
            "adminId": "60a125b48eec6e0015d97572",
            "name": "group21",
            "members": [],
            "status": "active"
        }
    }
   Remarks- 
   This endpoint was made so that the paginated fetch of the groups can be tested properly.
   This can be used to Create new empty Groups. 
   The token used here is returned when user logs in using the correct credentials.
   The name field is compulsory. 


   5. Fetch active groups using the pagination concept- 

   Method- GET
   URL- http://yellow-class-demo.herokuapp.com/groups/?delta=3&limit=5

   Headers- {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGExMjViNDhlZWM2ZTAwMTVkOTc1NzIiLCJuYW1lIjoiQW5raXQiLCJlbWFpbCI6ImFua2l0c3ViOTZAZ21haWwuY29tIiwic3RhdHVzIjoiYWN0aXZlIiwiaWF0IjoxNjIxMTczNzIxLCJleHAiOjE2MjExNzczMjF9.FTHtTxojT_sa29odFFTPuURuHhqq10FZDPxClM1_65o
   } 

   output- 
   {
        "status": {
            "message": "Groups requested",
            "code": 201
        },
        "data": [
            {
                "name": "group16",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:37.383Z"
                },
                {
                "name": "group17",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:40.620Z"
                },
                {
                "name": "group18",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:44.815Z"
                },
                {
                "name": "group19",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:48.317Z"
                },
                {
                "name": "group20",
                "members": [],
                "adminId": "60a125b48eec6e0015d97572",
                "createdAt": "2021-05-16T14:08:52.170Z"
            }
        ]
    }
   Remarks-   
   Here, limit refers to the pagination size and delta refers to which (page) is to be fetched, so that appropriate number of mongo documents can be skipped.
   The token used here is returned when user logs in using the correct credentials.
   The name field is compulsory. 