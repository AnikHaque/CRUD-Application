# Ostad_assignment_M10
Ostad Assigment 10 Requirements are fuul filed by  crud operations .
ex: 
http://localhost:8080/api/v1/createWork //* by this url we can give post body and create a work list .
http://localhost:8080/api/v1/updateStatus/:id  //* by this url we can update work list status by post body . 
http://localhost:8080/api/v1/getAllWorks //* by this url we can read all data . 
http://localhost:8080/api/v1//deleteWork/:id  //* by this url we can delete one data from work list by giving ID on Url .
by this four url our frist requriement is complet 

# for specific url to access we need to Verifi a token  
ex: for create ,  update , Read or Delete  work list user have to use token . 

# password reset system 
ex: http://localhost:8080/api/v1/resetPassword
ex: http://localhost:8080/api/v1/updatePassword/:email 
by using this url we can send otp by email and if otp is matched user can update password 
