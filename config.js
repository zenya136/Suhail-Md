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
global.caption = process.env.CAPTION || global.caption || "CREATED BY MAKO👑" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_51_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYxLFxuICAgICAgICA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMixcbiAgICAgICAgMjMwLFxuICAgICAgICA1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYyLFxuICAgICAgICA5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZrNW1sSUMvblRhTjFobUkzaEVocHRvSjNtL282dktkSGYyTXk3VXREN0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpaY3k2ZUE4UjdtTW5wOXg4MnQzM0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGYyMzNlMzEtY2I1YS00ZTQ2LWJhZWItMWU0MjQyZDcwYTlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDI1MixcbiAgICAgIDEzMSxcbiAgICAgIDQ5LFxuICAgICAgMTM0LFxuICAgICAgMTUsXG4gICAgICAxMTcsXG4gICAgICAzNCxcbiAgICAgIDIwNCxcbiAgICAgIDE2LFxuICAgICAgNDQsXG4gICAgICAyNDUsXG4gICAgICAyNTEsXG4gICAgICAxNzAsXG4gICAgICAyLFxuICAgICAgMTExLFxuICAgICAgMTQ4LFxuICAgICAgMTUwLFxuICAgICAgMTkxLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDEzNSxcbiAgICAgIDE4NSxcbiAgICAgIDksXG4gICAgICA2NyxcbiAgICAgIDk4LFxuICAgICAgMjAsXG4gICAgICAyMjQsXG4gICAgICAxOTUsXG4gICAgICAyMzEsXG4gICAgICAxNTYsXG4gICAgICA5OCxcbiAgICAgIDY4LFxuICAgICAgMTM4LFxuICAgICAgMTgsXG4gICAgICA3NyxcbiAgICAgIDE0OCxcbiAgICAgIDcyLFxuICAgICAgMTA4LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFBWWURRMjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3MTgxNjk1Njo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1ha29cIixcbiAgICBcImxpZFwiOiBcIjIxMzU2MzI3MjYwOTk3Mjo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLK3Bsc2tFRU5IdG1yUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjl3dGdBeWhFdjdsRWRBQUpsMUFOZE82SzQzeVNPM3pQM0RnSmNLU09pbXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic2NBdEgzOURWNmpuSE1IZk93dXk1TjVsc3NycDMwdHFpZUNMcTZuNEN5VFRCczZWTW9LZUd5SEsyaEFSNWdVZ2NMa29ITk9SU1UxMnNLcWhoa0N4Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYnpRVW9HR0hhNElzNktUcDV4cFRlYkhvNkpvbkwzMnhnSVNMRllSeS92Skx4Y1E2VnVRODFOZmk5R2JuaDFuQURrNytGeHVTY0hBRHBiaGxPNHVqaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTcxODE2OTU2OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDEwNDY2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJhV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmFXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSlhyZHBPbVF2aTlZVmZkNldsSXQ2bTU0WWtQSzNtMHoyUCtVTXVEK09sYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjI3MTk5NjYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KING👑MAKO",
  ownername:process.env.OWNER_NAME|| "❤️MAKO❤️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "KING👑MAKO"  ).toUpperCase(),



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
