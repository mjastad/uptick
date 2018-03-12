# Uptick Application
The uptick application is designed to be used as a boiler plate for provisioning infrastructure, and application deployment and devlopment..

Out-of-the-box, the application can connect to both MSSQL, and Mongoose databases, with extensions to support PGSQL, and MySQL as well...

## Requirements
* CentOS v7
* NGINX for CentOS v7
* node.js v9.x.x
  * mssql ODB driver v3.3.0
  * express
* Database
  * MSSQL (2008, 2012, 2014, 2016)
  * Mongoose

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

## Infrastructure
Configuring software needed for application deployment(s)...

### References
* [Installing NGINX on CentOS v7](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7)
* [Installing node on CentOS v7](https://www.rosehosting.com/blog/how-to-install-node-js-and-npm-on-centos-7)
* [Enabling/Disabling SE Linux on CentOS v7](https://www.tecmint.com/disable-selinux-temporarily-permanently-in-centos-rhel-fedora/)
* [Installing Mongoose on CentOS v7](https://www.howtoforge.com/tutorial/how-to-install-and-configure-mongodb-on-centos-7/)

## Setup and Configuring Application
* Install software to /var/www/html
* Modify IP Address in **js/data,js** file

... 
     var url = "http://IP-ADDDRESS:3000/api/";
