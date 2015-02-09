/*******************************************************************************

   Copyright (C) 2012-2014 SequoiaDB Ltd.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*******************************************************************************/
/*
@description: add host to cluster( install db patcket and start sdbcm )
@modify list:
   2014-7-26 Zhaobo Tan  Init
@parameter
   BUS_JSON: the format is: { "_id": { "$oid": "54cafd090c1fd1708ca989dd" }, "TaskID": 1, "Type": 0, "TypeDesc": "ADD_HOST", "TaskName": "ADD_HOST", "CreateTime": {"$timestamp": "2015-01-30-11.39.53.000000"}, "EndTime": {"$timestamp": "1970-01-01-08.00.00.000000"}, "Status": 0, "StatusDesc": "INIT", "AgentHost": "susetzb", "AgentService": "11790", "Info": { "ClusterName": "c1", "SdbUser": "sdbadmin", "SdbPasswd": "sdbadmin", "SdbUserGroup": "sdbadmin_group", "InstallPacket": "/opt/sequoiadb/bin/../packet/sequoiadb-1.10-linux_x86_64-installer.run", "HostInfo": [ { "HostName": "susetzb", "ClusterName": "c1", "IP": "192.168.20.42", "User": "root", "Passwd": "sequoiadb", "OS": { "Distributor": "RedHatEnterpriseServer", "Release": "6.4", "Bit": 64 }, "OMA": { "Status": false, "Version": "" }, "Memory": { "Model": "", "Size": 2887, "Free": 1414 }, "Disk": [ { "Name": "sda", "Size": 44705762, "Mount": "/", "Free": 41470996 } ], "CPU": [ { "ID": "", "Model": "", "Core": 2, "Freq": "2.00GHz" } ], "Net": [ { "Name": "lo", "Model": "", "Bandwidth": "", "IP": "127.0.0.1" }, { "Name": "eth0", "Model": "", "Bandwidth": "", "IP": "192.168.20.165" } ], "Port": [ { "Port": "50000", "Status": false } ], "Service": [ { "Name": "", "Status": false, "Version": "" } ], "Safety": { "Name": "", "Context": "", "Status": false }, "InstallPath": "/opt/sequoiadb", "AgentService": "11790", "SshPort": "22" }, { "HostName": "rhel64-test8", "ClusterName": "c1", "IP": "192.168.20.165", "User": "root", "Passwd": "sequoiadb", "OS": { "Distributor": "RedHatEnterpriseServer", "Release": "6.4", "Bit": 64 }, "OMA": { "Status": false, "Version": "" }, "Memory": { "Model": "", "Size": 2887, "Free": 1414 }, "Disk": [ { "Name": "sda", "Size": 44705762, "Mount": "/", "Free": 41470996 } ], "CPU": [ { "ID": "", "Model": "", "Core": 2, "Freq": "2.00GHz" } ], "Net": [ { "Name": "lo", "Model": "", "Bandwidth": "", "IP": "127.0.0.1" }, { "Name": "eth0", "Model": "", "Bandwidth": "", "IP": "192.168.20.165" } ], "Port": [ { "Port": "50000", "Status": false } ], "Service": [ { "Name": "", "Status": false, "Version": "" } ], "Safety": { "Name": "", "Context": "", "Status": false }, "InstallPath": "/opt/sequoiadb", "AgentService": "11790", "SshPort": "22" } ] }, "errno": 0, "Progress": 0, "ResultInfo": [ { "IP": "192.168.20.42", "HostName": "susetzb", "Status": 0, "StatusDesc": "INIT", "errno": 0, "detail": "", "Flow": null }, { "IP": "192.168.20.165", "HostName": "rhel64-test8", "Status": 0, "StatusDesc": "INIT", "errno": 0, "detail": "", "Flow": null } ] }
   SYS_JSON: {}
   ENV_JSON: {}
   OTHER_JSON: {}
@return
   RET_JSON: the format is: {"errno":0,"detail":""}
*/

// println
//var BUS_JSON = { "_id": { "$oid": "54cafd090c1fd1708ca989dd" }, "TaskID": 1, "Type": 0, "TypeDesc": "ADD_HOST", "TaskName": "ADD_HOST", "CreateTime": {"$timestamp": "2015-01-30-11.39.53.000000"}, "EndTime": {"$timestamp": "1970-01-01-08.00.00.000000"}, "Status": 0, "StatusDesc": "INIT", "AgentHost": "susetzb", "AgentService": "11790", "Info": { "ClusterName": "c1", "SdbUser": "sdbadmin", "SdbPasswd": "sdbadmin", "SdbUserGroup": "sdbadmin_group", "InstallPacket": "/opt/sequoiadb/bin/../packet/sequoiadb-1.10-linux_x86_64-installer.run", "HostInfo": [ { "HostName": "susetzb", "ClusterName": "c1", "IP": "192.168.20.42", "User": "root", "Passwd": "sequoiadb", "OS": { "Distributor": "RedHatEnterpriseServer", "Release": "6.4", "Bit": 64 }, "OMA": { "Status": false, "Version": "" }, "Memory": { "Model": "", "Size": 2887, "Free": 1414 }, "Disk": [ { "Name": "sda", "Size": 44705762, "Mount": "/", "Free": 41470996 } ], "CPU": [ { "ID": "", "Model": "", "Core": 2, "Freq": "2.00GHz" } ], "Net": [ { "Name": "lo", "Model": "", "Bandwidth": "", "IP": "127.0.0.1" }, { "Name": "eth0", "Model": "", "Bandwidth": "", "IP": "192.168.20.165" } ], "Port": [ { "Port": "50000", "Status": false } ], "Service": [ { "Name": "", "Status": false, "Version": "" } ], "Safety": { "Name": "", "Context": "", "Status": false }, "InstallPath": "/opt/sequoiadb", "AgentService": "11790", "SshPort": "22" }, { "HostName": "rhel64-test8", "ClusterName": "c1", "IP": "192.168.20.165", "User": "root", "Passwd": "sequoiadb", "OS": { "Distributor": "RedHatEnterpriseServer", "Release": "6.4", "Bit": 64 }, "OMA": { "Status": false, "Version": "" }, "Memory": { "Model": "", "Size": 2887, "Free": 1414 }, "Disk": [ { "Name": "sda", "Size": 44705762, "Mount": "/", "Free": 41470996 } ], "CPU": [ { "ID": "", "Model": "", "Core": 2, "Freq": "2.00GHz" } ], "Net": [ { "Name": "lo", "Model": "", "Bandwidth": "", "IP": "127.0.0.1" }, { "Name": "eth0", "Model": "", "Bandwidth": "", "IP": "192.168.20.165" } ], "Port": [ { "Port": "50000", "Status": false } ], "Service": [ { "Name": "", "Status": false, "Version": "" } ], "Safety": { "Name": "", "Context": "", "Status": false }, "InstallPath": "/opt/sequoiadb", "AgentService": "11790", "SshPort": "22" } ] }, "errno": 0, "Progress": 0, "ResultInfo": [ { "IP": "192.168.20.42", "HostName": "susetzb", "Status": 0, "StatusDesc": "INIT", "errno": 0, "detail": "", "Flow": null }, { "IP": "192.168.20.165", "HostName": "rhel64-test8", "Status": 0, "StatusDesc": "INIT", "errno": 0, "detail": "", "Flow": null } ] } ;


var FILE_NAME_CHECK_ADD_HOST_INFO = "checkAddHostInfo.js" ;
var RET_JSON       = new checkAddHostInfoResult() ;
var rc             = SDB_OK ;
var errMsg         = "" ;

var task_dir       = "" ;


/* *****************************************************************************
@discretion: init
@author: Tanzhaobo
@parameter void
@return void
***************************************************************************** */
function _init()
{
   // 1. get task id
   try
   {
      task_id = BUS_JSON[TaskID] ;
      if ( "number" != typeof(task_id) )
         exception_handle( SDB_SYS, "Task id is not a number: " + task_id ) ;
   }
   catch ( e )
   {
      SYSEXPHANDLE( e ) ;
      errMsg = "Js receive invalid argument" ;
      PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
              sprintf( errMsg + ", rc: ?, detail: ?", GETLASTERROR(), GETLASTERRMSG() ) ) ;
      exception_handle( SDB_SYS, errMsg ) ;
   }
   // 2. try to remove exist task log directory
   try
   {
      task_dir = adaptPath( LOG_FILE_PATH + Task ) + task_id ;
println("task dir is: " + task_dir) ;

      if ( false == File.exist( task_dir ) )
         File.mkdir( task_dir ) ;
   }
   catch( e )
   {
      SYSEXPHANDLE( e ) ;
      rc = GETLASTERROR() ;
      errMsg = sprintf( "Failed to initialize add host task[?]'s log directory", task_id ) ;
      PD_LOG( arguments, PDWARNING, FILE_NAME_CHECK_ADD_HOST_INFO,
              sprintf( errMsg + ", rc: ?, detail: ?", rc, GETLASTERRMSG() ) ) ;
      exception_handle( rc, errMsg ) ;
   }
// println
/*
   // 2. try to remove task log file
   try
   {
      LOG_FILE_NAME = TaskLog + task_id + ".log" ;
      var task_log_file = LOG_FILE_PATH + LOG_FILE_NAME ;
println("task log file is: " + task_log_file) ;
      if ( File.exist( task_log_file ) )
         File.remove( task_log_file ) ;
   }
   catch( e )
   {
      SYSEXPHANDLE( e ) ;
      PD_LOG( arguments, PDWARNING, FILE_NAME_CHECK_ADD_HOST_INFO,
              sprintf( "Try to remove task[?]'s log file failed, rc: ?, detail: ?",
                       task_id, GETLASTERROR(), GETLASTERRMSG() ) ) ;
   }
*/
   
   PD_LOG( arguments, PDEVENT, FILE_NAME_CHECK_ADD_HOST_INFO, "Begin to check add host info" ) ;
}

/* *****************************************************************************
@discretion: final
@author: Tanzhaobo
@parameter void
@return void
***************************************************************************** */
function _final()
{
   PD_LOG( arguments, PDEVENT, FILE_NAME_CHECK_ADD_HOST_INFO, "Finish checking add host info" ) ;
}


/* *****************************************************************************
@discretion: check when install informations include installing db packet in
             local, whether these informations match local installed db's
             informations or not
@author: Tanzhaobo
@parameter void
@return
   [bool]: true or false
***************************************************************************** */
function checkAddHostInfo()
{
   var info             = null ;
   var hostInfo         = null ;
   var hostNum          = null ;
   var localInstallInfo = null ;
   var adminUser        = null ;
   var installPath      = null ;
   var localAgentPort   = null ;
   var localIP          = getLocalIP() ;

   // 1. get local install info for compare
   try
   {
      localInstallInfo = eval( '(' + Oma.getOmaInstallInfo() + ')' ) ;
      if ( null == localInstallInfo || "undefined" == typeof( localInstallInfo ) )
         exception_handle( SDB_INVALIDARG, "Invalid db install info in localhost" ) ;
      adminUser      = localInstallInfo[SDBADMIN_USER] ;
      installPath    = localInstallInfo[INSTALL_DIR] ;
   }
   catch ( e )
   {
      // when no install info in /etc/default/sequoiadb
      SYSEXPHANDLE( e ) ;
      errMsg = sprintf( "Failed to get db install info in localhost[?]", localIP ) ;
      rc = GETLASTERROR() ;
      PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
              sprintf( errMsg + ", rc: ?, detail: ?", rc, GETLASTERRMSG() ) ) ;
      exception_handle( rc, errMsg ) ;
   }

   // 2. check whether localhost needs to be installed or not
   // if so, make sure the follow 3 arguments are the same with current one:
   // adminUser, installPath, agentService
   try
   {
      info = BUS_JSON[Info] ;
      hostInfo = info[HostInfo] ;
      hostNum = hostInfo.length ;
   }
   catch( e )
   {
      SYSEXPHANDLE( e ) ;
      errMsg = "Js receive invalid argument" ;
      rc = GETLASTERROR() ;
      PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
              sprintf( errMsg + ", rc: ?, detail: ?", rc, GETLASTERRMSG() ) ) ;
      exception_handle( SDB_INVALIDARG, errMsg ) ; 
   }
   if ( 0 == hostNum )
   {
      errMsg = "Not specified any host's info to check" ;
      rc = SDB_INVALIDARG ;
      PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
              sprintf( errMsg + ", rc: ?", rc ) ) ;
      exception_handle( rc, errMsg ) ;
   }
      
   for( var i = 0; i < hostNum; i++ )
   {
      var obj = hostInfo[i] ;
      var ip = obj[IP] ;
      if ( localIP == ip )
      {
         var ssh       = null ;
         var sdbUser   = info[SdbUser] ;
         var sdbPasswd = info[SdbPasswd] ;
         var user      = obj[User] ;
         var passwd    = obj[Passwd] ; 
         var path      = obj[InstallPath] ;
         var port      = obj[AgentService] ;
         var sshport   = parseInt(obj[SshPort]) ;

         // 1st, check sdb user and password
         if ( adminUser != sdbUser )
         {
            errMsg = "When installing db packet in localhost[" + localIP + "], sdb admin user[" + sdbUser  + "] needs to match current one[" + adminUser + "]" ;
            rc = SDB_INVALIDARG ;
            PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
                    sprintf( errMsg + ", rc: ?", rc ) ) ;
            exception_handle( rc, errMsg ) ; 
         }
         else
         {
            // check the passwd of adminUser
            try
            {
               // ssh to local sdb user
               ssh = new Ssh( ip, sdbUser, sdbPasswd, sshport ) ;
            }
            catch ( e )
            {
               SYSEXPHANDLE( e ) ;
               errMsg = "When installing db packet in localhost[" + localIP + "], sdb admin password needs to match current one" ;
               rc = GETLASTERROR() ;
               PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
                       sprintf( errMsg + ", rc: ?, detail: ?", rc, GETLASTERRMSG() ) ) ;
               exception_handle( SDB_INVALIDARG, errMsg ) ; 
            }
         }
         // 2nd, check agent service
         localAgentPort = getSdbcmPort( ssh ) ;
         if ( localAgentPort != port )
         {
            errMsg = "When installing db packet in localhost[" + localIP + "], agent service[" + port  + "] needs to match current one[" + localAgentPort  + "]" ;
            rc = SDB_INVALIDARG ;
            PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
                    sprintf( errMsg + ", rc: ?", rc ) ) ;
            exception_handle( rc, errMsg ) ; 
         }
         // thirdly, check install path
         var path1 = adaptPath( installPath ) ;
         var path2 = adaptPath( path ) ;
         if ( path1 != path2 )
         {
            errMsg = "When installing db packet in localhost[" + localIP + "], install path[" + path  + "] needs to match current one[" + installPath  + "]" ;
            rc = SDB_INVALIDARG ;
            PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
                    sprintf( errMsg + ", rc: ?", rc ) ) ;
            exception_handle( rc, errMsg ) ; 
         }
      }
   }
   
}

function main()
{
   _init() ;
   
   // check install info
   try
   {
      checkAddHostInfo() ;
   }
   catch ( e )
   {
      SYSEXPHANDLE( e ) ;
      errMsg = "Failed to check add host's information" ;
      rc = GETLASTERROR() ;
      PD_LOG( arguments, PDERROR, FILE_NAME_CHECK_ADD_HOST_INFO,
              sprintf( errMsg + ", rc: ?, detail: ?", rc, GETLASTERRMSG() ) ) ;
      RET_JSON[Errno] = rc ;
      RET_JSON[Detail] = errMsg ;
   }
   
   _final() ;
   
println("RET_JSON is: " + JSON.stringify(RET_JSON)) ;
   return RET_JSON ;
}

// execute
   main() ;

