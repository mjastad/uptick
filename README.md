# Uptick Application
The uptick application is designed to be used as a boiler plate for provisioning infrastructure, and application deployment and devlopment..

![uptick](./img/uptick.png)

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

  **[BROWSER/CLIENT]** <--HTTP---> **[NGINX-SERVER]** <----REST----> **[NODE-SERVER]** <---ODBC Protocol---> **[DATABASE-SERVER]**
  
* Create 2x CentOS v7 Guest VMs
  * Install NGINX on Guest VM #1
  * Install node.js v9.x on Guest VM #2
  
### Single Node

  **[BROWSER/CLIENT]** <--HTTP---> **[NGINX + NODE SERVER]** <---ODBC Protocol---> **[DATABASE-SERVER]**

* Create a CentOS v7 Guest VM
  * Install NGINX 
  * Install node.js

## Infrastructure
Configuring software needed for application deployment(s)...

### References
* [Installing NGINX on CentOS v7](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7)
* [Installing node on CentOS v7](https://www.rosehosting.com/blog/how-to-install-node-js-and-npm-on-centos-7)
* [Enabling/Disabling SE Linux on CentOS v7](https://www.tecmint.com/disable-selinux-temporarily-permanently-in-centos-rhel-fedora/)
* [Installing Mongoose on CentOS v7](https://www.howtoforge.com/tutorial/how-to-install-and-configure-mongodb-on-centos-7/)

## Setup and Configuring Application
* Install software to /var/www/html
* Insure files (including full path) have **drwxr..xr..x** (755) privileges.

```
% chmod -R 755 /var/www/html/*

```

* Build the node runtime for the project - this adds the required libs to the node runtime.

```
% npm build /var/www/html/package.json

```
* Modify IP Address in **js/data.js** file

```
var url = "http://IP-ADDDRESS:3000/api/";
```
* Modify MSSQL database connection file

```
module.exports = {
  connConfig: {
    server: 'DB SERVER IP-ADDRESS',
    database: 'DATABASE NAME',
    user: 'SQL AGENT (i.e. 'sa')',
    password: 'DB USER PASSWORD',
    port: 'DB PORT'
  }
};

```
* Start server

```
% node /var/www/html/server.js

```

* Once the server is started, point web-browser to the NGINX SERVER IP Address and click the serach icon to populate and render the data table...

### Supported Functions
* Search for data in the application
* Add data in the application

