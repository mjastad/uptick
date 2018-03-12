# Uptick Application
The uptick application is designed to be used as a boiler plate for provisioning infrastructure, and application deployment and devlopment..

Out-of-the-box, the application can connect to both MSSQL, and Mongoose databases, with extensions to support PGSQL, and MySQL as well...



## Requirements
* CentOS v7
* NGINX for CentOS v7
* node.js v9.x.x
  * mssql ODB driver v3.3.0
  * express

## Setup & Configuration

### Multi Node
* Create 2x CentOS v7 Guest VMs
  * Install NGINX on Guest VM #1
  * Install node.js v9.x on Guest VM #2
  
  User<--HTTP--->[NGINX-SERVER]<----REST---->[NODE-SERVER]<---ODBC Protocol--->[DATABASE-SERVER]
  
### Single Node
* Create a CentOS v7 Guest VM
  * Install NGINX 
  * Install node.js
  
  User<--HTTP--->[NGINX + NODE SERVER]<---ODBC Protocol--->[DATABASE-SERVER]
