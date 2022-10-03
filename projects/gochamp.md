---
title: "GoChamp"
order: 1
---

This project is my most advanced work to date. It is a full stack web application, deployed at [GoChamp.co.uk](https://www.gochamp.co.uk#link-info) with a trial currently in progress at a South London sports club as I look to commercialise the venture.

The site aims to digitize the process of sports game selection, initially for badminton, and subsequently provide performance insights to players and club decision-makers by capturing data on game outcomes.

![Screenshot](/images/gochamp-img-1.jpg#image-center)

If you would like to see how a user interacts with the site - have a look at [this guide](/gochamp-guide.pdf#link-info) I created to support new users with the rollout of the trial.

What I have enjoyed most about this project is the diversity of technologies I learnt to make it work as I imagined.
One of the most interesting learning experiences for me was that I was able to architect the core logic of the site using Socket.io. In this project, I have used it to drive real time synchronicity between all connected clients, and enable the adoption of a system of event driven state change across both the front and back end.

![Screenshot](/images/gochamp-img-2.png#image-center)

As a summary of technology used:

The backend is a Node server using Express to manage HTTP requests. These cover mostly user profile operations such as account creation as well as logging in and out, which itself is powered by Passport.js, where both local and Google OAuth strategies for user authentication have been employed. Once signed in the client will use a provided JWT to authenticate with the Socket.io server, which I have referenced. Session state is managed using Express-Session, which is a standard implementation of a cookie session. This state is stored on the backend using a Redis instance, to keep clients in active logged-in sessions, whilst scaling beyond a single virtual machine instance. The underlying data store for the application is a MySql database, for which I have utilised Sequelize as an ORM.

On the frontend, the UI is a React application written mostly in TypeScript (as is the server), bootstrapped initially by create-react-app. Client side routing is handled by react-router@v6 using some of the latest features, such as dynamic path naming and utilization of the Outlet component. As an additional challenge, the homepage features a shuttlecock that follows a user around the viewport, powered by Three.js. Once logged in the site will also install a service worker, which uses the browser push manager API to subscribe the client to web-push notifications from the server (subject to user approval). The most recent release also includes a component to manage the client's cached assets. This was previously a serious issue that prevented some users from using the latest features. To do this, I made use of Semantic Versioning on each push to my main (deployed) branch. The client will compare the version it is using and in case of a mismatch with metadata published as a static asset, will clear the cache and reload the page with the latest changes.
