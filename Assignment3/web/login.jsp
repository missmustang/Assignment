<%-- 
    Document   : loginin
    Created on : 2018-11-2, 15:06:19
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
        <style>

        </style>
    </head>
    
    
    <body>
    <center>
        <form method = "post" action="Servlet1" id="loginfrm">
              
        <h4>Login</h4>
        <hr/>
	          Name：&nbsp;&nbsp;&nbsp;    <input type="text" name="username" id="username"/><br/>
	          Password：<input type="password" name="password" id="password"/><br/>
        <input type="submit" value="submit" id="log" name="log"/> 
        <input type="submit" value="register" id="reg" name="reg" /> 
      </form>
    </center>
    </body>
</html>



