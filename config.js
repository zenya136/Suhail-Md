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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_58_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDksXG4gICAgICAgIDExMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICA4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDY5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndWN3NMdCttaUl2cWMxK0pPRTdUVW5CWFdxa1RxL1dsNWJ6OHM3Mk9TalU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZCWXlBX1kxU1VxcmNVWU5aZDd0WndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDg2ODFiZjEtOWZjOS00ZjQ0LWJhN2MtNTdkNTNjN2YyNTRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjU1LFxuICAgICAgMSxcbiAgICAgIDM4LFxuICAgICAgMjEzLFxuICAgICAgMjE4LFxuICAgICAgMjIxLFxuICAgICAgMjQ2LFxuICAgICAgMjM4LFxuICAgICAgMTA1LFxuICAgICAgNTEsXG4gICAgICAxNTksXG4gICAgICA0NCxcbiAgICAgIDIxNCxcbiAgICAgIDQyLFxuICAgICAgMjM4LFxuICAgICAgMTgwLFxuICAgICAgMjUyLFxuICAgICAgMjM1LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMjE0LFxuICAgICAgMTQ1LFxuICAgICAgNTMsXG4gICAgICAyMjMsXG4gICAgICA2MyxcbiAgICAgIDk2LFxuICAgICAgMTAyLFxuICAgICAgMTQ3LFxuICAgICAgNTksXG4gICAgICAyMjgsXG4gICAgICAyNTMsXG4gICAgICAyMzMsXG4gICAgICA3MyxcbiAgICAgIDEyNixcbiAgICAgIDEzOCxcbiAgICAgIDMzLFxuICAgICAgMTAxLFxuICAgICAgMTA5LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWldBRVBFMTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3MTgxNjk1Njo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1ha29cIixcbiAgICBcImxpZFwiOiBcIjIxMzU2MzI3MjYwOTk3Mjo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMnBsc2tFRVBMTmxiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjl3dGdBeWhFdjdsRWRBQUpsMUFOZE82SzQzeVNPM3pQM0RnSmNLU09pbXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiekw4QWNxc2EwS0F4cDM4TE5aelpldVBkVEVXSldISzYwb0Ria2NJZHFVU1l5OGNmZ1VGRmwyL3ZwME5aNkVuQVM0WlE4NWk1dVNxenNwSGhyN3pHQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMCs0RFZyeWRPKzdqcHhxUEVReUxqYmt6d1RuWXZlM1VOS2tKeHNtM1FURFh2dWd2dG53QThZcDVyeS9HR2cyT0ZEaFpQdm9YS00reHgrM0t4LzJpQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTcxODE2OTU2OjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDAxODY3N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "KÏNG 👑MAKO",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "KING👑MAKO",
  ownername:process.env.OWNER_NAME|| "MAKO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
