const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ":Faizan99770/Suhail-Md Mongob"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314391364";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923314391364";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923314391364";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_38_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAzOSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICA1NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDksXG4gICAgICAgIDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkM3WStaNlkrMzc5Zm5mOFRRbVBRdFFhL1BrdksyVTI0Z2QzWXhOUTFTcGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0MzkxMzY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RTk4MjA0RTU5NjZFMzkwRTg4MjlEMjgxMTY4OTg2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY4OTI2OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQzOTEzNjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBBNDEwMkQ1RkU1NDRGQjg4Q0FERkVCRkM2QUQyOEI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjg5MjY5OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDMXpJZ3hjTlIxR01HcEJMRXdPTHpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcwNGVhYjg3LTVjMjctNDJkZS05MTM4LWFjZGM1YWQ4ZDNlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDEwOCxcbiAgICAgIDIxOCxcbiAgICAgIDI0MCxcbiAgICAgIDEzMSxcbiAgICAgIDIxNyxcbiAgICAgIDI0NixcbiAgICAgIDE0OCxcbiAgICAgIDE0MSxcbiAgICAgIDEwLFxuICAgICAgMTY2LFxuICAgICAgMjEsXG4gICAgICAyNDIsXG4gICAgICAxMTEsXG4gICAgICAxMTYsXG4gICAgICAyMTcsXG4gICAgICAyMDQsXG4gICAgICAyMzQsXG4gICAgICAyMyxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxNCxcbiAgICAgIDE4NixcbiAgICAgIDE3NyxcbiAgICAgIDMzLFxuICAgICAgODgsXG4gICAgICAxNzgsXG4gICAgICAyMDgsXG4gICAgICAxNTMsXG4gICAgICA1NixcbiAgICAgIDI0MSxcbiAgICAgIDEwLFxuICAgICAgNzIsXG4gICAgICAxMTIsXG4gICAgICAxMzYsXG4gICAgICAyMDUsXG4gICAgICAyMSxcbiAgICAgIDg1LFxuICAgICAgNDMsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGV0paTjc2V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE0MzkxMzY0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2ODUxNzQ3OTgxNzM0MjoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlBhZ2Fs8J+kp1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05DWXJwVUhFSkxvMXJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMWRzbWY5cmJDOVFMc0lreVMrNTlmQllzTkNaSmxuaytzQWYvdzB6RDdSYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5Ym1INzl6MXN6QlBYaGw1cFJDUjJUd2loSkRqazZaQ0lCRm9lKzExQ05xRmJsUTZISTFlSU1SNTVOZ0ZpdkhwSnRqS1BZUCsxZ3Q2L1B2azIySWRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2U0dRY0h1cnIzc081L2d5MFZ1Qk1FNjZOaWx3MmxwN0VXbHdpTjIxNzlab1pLemk5SkF5Q3FyRmFUQUpKWmpFclhzNzhJTk9QWHJHRTU3bHFvTHZCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQzOTEzNjQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjg5MjY5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFBUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUFRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaUo4S05iTjdyNmpiaURvVjVhTm9RV21PMkpCT205ZmhVZzdtemVoMlJrcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTIzODQ1MjAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY4OTI2OTQ4MjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "FAIZI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
