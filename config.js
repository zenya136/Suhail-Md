const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "CREATED BY KING 👑 MAKO " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260971816956";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_28_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICA3MixcbiAgICAgICAgMTYxLFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICA2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS1ZvemJ4WGgxMDRmOStqTHdKSzJXUDdzNllxZ1VnTWh4TWJNWW9talNpaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ20zWV9JU1dSMFc2NlB0X3lhOG1JQVwiLFxuICBcInBob25lSWRcIjogXCI3Mzk5ZmFlYy0xNzY4LTQ2MzItYTBhOC0wZjZhZDc4N2JjN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgOSxcbiAgICAgIDIwNixcbiAgICAgIDEzLFxuICAgICAgMjM4LFxuICAgICAgMTE4LFxuICAgICAgNDIsXG4gICAgICAyMixcbiAgICAgIDEyNSxcbiAgICAgIDksXG4gICAgICA1NCxcbiAgICAgIDE3MyxcbiAgICAgIDIwLFxuICAgICAgMjA1LFxuICAgICAgNzksXG4gICAgICAzMixcbiAgICAgIDc0LFxuICAgICAgMTY3LFxuICAgICAgNTMsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAxNDYsXG4gICAgICA2OSxcbiAgICAgIDIzNixcbiAgICAgIDIyNSxcbiAgICAgIDkxLFxuICAgICAgMTAzLFxuICAgICAgMjE3LFxuICAgICAgMjcsXG4gICAgICA5OCxcbiAgICAgIDE3OSxcbiAgICAgIDIzLFxuICAgICAgMTM5LFxuICAgICAgNDQsXG4gICAgICAzNixcbiAgICAgIDE2MCxcbiAgICAgIDEwLFxuICAgICAgNTEsXG4gICAgICAxNTksXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMV1ZaNlBBUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTcxODE2OTU2OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFrb1wiLFxuICAgIFwibGlkXCI6IFwiMjEzNTYzMjcyNjA5OTcyOjY2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s2cGxza0VFTEg0bGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXd0Z0F5aEV2N2xFZEFBSmwxQU5kTzZLNDN5U08zelAzRGdKY0tTT2ltdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4M01jWG1uV2E1K2dyRDJpa2ZKNFQ0ME5PWUR2b3lWTWlJbjU5aC9yd1Y2YUdyQjg1NFJrZWJ2M1E4NlhMWkVPb21xbGF0QUZTejdpRUNBckxYTVFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmZXpNa0hXNmhjN1h0L2pSaytrYjFoSXlRTjd5QkdVaW1CR0hMUm41Rmw4WHJtMUJwVi9hdnlhTUNtK2JVaDE3ZUdiaHhZdEFUWWdBR1BXNXRvN3dCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NzE4MTY5NTY6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDI0MTE4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
