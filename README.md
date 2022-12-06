# Account

{id , Username , Password , PhoneNumber , Address , Role , IsActive}

-SignUp : http://localhost:8080/api/Account/SignUp  
Method : Post gửi Username và Password

-SignIn : http://localhost:8080/api/Account/SignIn  
Method : Post gửi Username và Password

-GetAll : http://localhost:8080/api/Account  
Method : Get  
-GetAll : http://localhost:8080/api/Account?Username=cuong
Method :Get tim kiem
-GetDetail : http://localhost:8080/api/Account/1  
Method : Get

-Update : http://localhost:8080/api/Account/1  
Method : Put gửi Password , Role , PhoneNumber

-Delete : http://localhost:8080/api/Account/Delete/1  
Method : Put
