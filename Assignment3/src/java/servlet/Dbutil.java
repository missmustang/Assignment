/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author ASUS
 */
public class Dbutil {

	private String url = "jdbc:derby://localhost:1527/Chuqian_Ma";
	private String username = "IS2560";
	private String password = "IS2560";
	private Connection conn = null;
	private Statement stm =null ;
	private ResultSet rs =null;
public boolean createConn() {
		boolean b = false;
		try {
			
			conn = DriverManager.getConnection(url, username, password);
			b = true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}// 获取连接
		
		return b;
	}

public boolean query(String sql){
      boolean b = false; 
		try {
                  
			stm = conn.createStatement();
			rs = stm.executeQuery(sql);
                        if(rs.next()){
				b = true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
                return b;
	}
	

public void closeRs() {
		try {
			if (rs != null) {
				rs.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
}
public void closeConn() {
		try {
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
public void closeStm() {
		try {
			if (stm != null) {
				stm.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	


public boolean update(String sql){
		boolean b = false;
		try {
			stm = conn.createStatement();
			stm.execute(sql);
			b = true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return b;
	}
  public boolean logvalid(String username,String password){
		boolean isValid = false;
                String sql = "select * from IS2560.LOGIN where NAME='"+username+"' and KEYWORD='"+password+"'";
		Dbutil db = new Dbutil();
		if(db.createConn()){
			if(db.query(sql)){
				isValid = true;
			}
			db.closeRs();
			db.closeStm();
			db.closeConn();
		}
		return isValid;
	}
public boolean regvalid(String username,String password){
		boolean isValid = false;
                String sql = "select * from IS2560.LOGIN where NAME='"+username+"' ";
		Dbutil db = new Dbutil();
		if(db.createConn()){
			if(db.query(sql) == false){
				isValid = true;
			}
			db.closeRs();
		}
                if(isValid){
                     sql = "insert into IS2560.LOGIN(NAME,KEYWORD) values('"+username+"','"+password+"')";
			isValid = db.update(sql);
			db.closeStm();
			db.closeConn();
		}

		return isValid;
	}

}
