<h1>What is it?</h1>
<h4>An event project, which seeks to help the customer find a duo for their favorite game, using ads (within a page of a specific game) and showing customer information for the connection, this project was initially made by Diego Fernandes (CTO of Rocketseat) and modified by me. Event: NLW from <a href="https://www.rocketseat.com.br/">RocketSeat</a></h4>

<h4><a href="https://github.com/cayke1/nlwWeb">Front-End(In progress)</a></h4>


<h1>Quick Start</h1>

```
npm i
// Create a .env based on .env.example
npx prisma migrate dev --name init
```

<h4>Have fun</h4>

<hr>

<h1>Routes</h1>

<h2>GET</h2>
<h3>/games</h3>

```
Will return a list of games of db, with:

id,
title,
bannerUrl,
_count: {ads}
```

<h3>/games/:gameId/ads</h3>

```
Will return a list of ads, based in a specified game, with:

id,
name,
weekDays,
useVoiceChannel,
yearsPlaying,
hourStart,
hourEnd
```

<h3>/ads/:id/discord</h3>

```
Will return discord of the ad (specified by id);

discord,
```

<hr>

<h2>POST</h2>
<h3>/games/:gameId/ads</h3>

```
Will create a new ad, into a (specified by id) game, this route will request:

name: String,
yearsPlaying: Number,
discord: String,
weekDays: Number[],
hourStart: String,
hourEnd: String,
useVoiceChannel: Boolean
```
