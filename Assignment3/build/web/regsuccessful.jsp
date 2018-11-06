<%-- 
    Document   : regsuccessful
    Created on : 2018-11-5, 21:34:38
    Author     : ASUS
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>register Successful</title>
        <jsp:useBean id="ub" class="javabean.userbean" scope="session" />
    </head>
    
    
<body>
    <center>
        <form method = "post" action="Servlet1" id="loginfrm">
      <h3>Sucessful</h3>
      <h3>Hello!
      <jsp:getProperty name="ub" property="username" /></h3>
      
        </form>
    </center>
  </body>
</html>
