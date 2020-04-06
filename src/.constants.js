module.exports = Object.freeze({
  TOKEN: '1033491868:AAERf48siHK4XaaOBQ4-YFjc7Rv9vfu4wBY',
  ARIA_SECRET: 'yua',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  INDEX_DOMAIN: 'https://aria.water.workers.dev/',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '16RhU4hPvcS2CTi09EREl2gGhe1itLhKP',
  SUDO_USERS: [761714259],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001248473495,-1001486387452],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['pankajmallah685@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@LucciferOO7_bot"
  },
  IS_TEAM_DRIVE: true
});
