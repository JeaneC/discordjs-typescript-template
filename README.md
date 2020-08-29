# Getting Started

This is a template that sets up discord.js with TypeScript and a directory structure based on the official guide https://discordjs.guide/.
<br><br>

## Initial Config

Create a `.env` file in the root directory (where `package.json` is)

```
BOT_KEY=Enter_Your_Bot_Key_Here
PREFIX=!
```

## Running

Make sure you have node installed.

```
// In the root folder
npm install
npm start
```

Once you add the discord bot to your channel you can trigger the basic commands through text.

```
!ping
// Pong.

!beep
// Bop.
```

You can change the PREFIX to react to something else

```
PREFIX=!run

!run ping
!run beep
```
