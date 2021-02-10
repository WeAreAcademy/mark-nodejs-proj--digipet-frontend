# Digipet - Frontend

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

We're going to building a frontend to connect to our Digipet backend, so it's possible to interact with our digipet through a nice user interface!

## Learning Outcomes

- Connect a locally running frontend to a locally running backend
-

## Exercise 0: Running and connecting to the backend

> 🎯 **Success criterion:** you can run the frontend locally and connect it to your digipet backend

### Connecting to the backend

Make sure that you've shut down your backend server.

Then, clone/fork the repo and start your frontend app with `yarn start`.

It will start on `localhost:3000` - but it won't do anything interesting, really, but it will warn you about a `TypeError: Failed to fetch`.

If you [open up your browser console](https://developers.google.com/web/tools/chrome-devtools/open), you'll also see something like the following:

```
GET http://localhost:4000/digipet net::ERR_CONNECTION_REFUSED
```

So, our `fetch` is running into an error. It can't connect to `localhost:4000/digipet` - because our backend server isn't running!

So, start up your backend server. You now should be able to hatch and walk a digipet through your server!

### Persistence through the server

React apps lose their state when you refresh them in the browser. However, when you refresh `localhost:3000`, you'll see that the stats of our digipet are preserved - because this data is stored in-memory in the server!

When the server is restarted, it'll lose its state, and so everything will be lost (**try this and see**) - but that's still an improvement! In a later project, we'll look at adding some basic persistence to our server.

## Exercise 1: Reading, understanding and documenting

> 🎯 **Success criterion:** a document which outlines how you think this React frontend interacts with the Express backend. You don't have to achieve a theory which explains 100%, but you should strive to explain as much as possible.

## Exercise 2: Extending the frontend behaviour

> 🎯 **Success criterion:** a frontend app which lets you interact with the digipet backend at all sensible endpoints.

## Exercise 4: Commentary and reflection

> 🎯 **Success criterion:** documented reflections.
