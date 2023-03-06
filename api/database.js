const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
  })
  connection.connect();

module.exports={
    CheckUser:function(username,password,operation){
        let test=new Promise((resolve,reject)=>{
            // connection.connect();
            if(operation=='login')
            {
               query="select * from USERS where USERNAME='"+username+"' AND Pass_Word='"+password+"'"
               console.log(query);
               connection.query(query,(err,rows,fields)=>{
                   if(err){
                       reject(err.message)
                   }
                   else{
                       if(rows.length==0){
                           resolve({message:'user does not exists '});
                       }
                       else{
                           resolve(rows[0]);
                       }
                   }
               })
            }
               else{
                query="select USERNAME from USERS where USERNAME='"+username+"'";
                console.log(query);
                connection.query(query,(err, rows, fields) => {
                  if(err){
                         reject(err.message);
                    }
                     else {
                        if(rows.length=='0'){
                           query1="insert into USER(uniqueID,USERNAME,Pass_Word) values(UUID(),'"+username+"','"+password+"',')";
                           connection.query(query1,(error,row,field)=>{
                                if(error){
                                    reject(error.message);
                                }
                                else{
                                    resolve('USERINSERTED');
                                }
                           })
                        }
                        else{
                         console.log(rows);
                         resolve( 'USEREXISTS');
                        }
                    // console.log('The solution is: ', rows[0])
                     }
                  });
                }
            })
          
        return test;
    }
}