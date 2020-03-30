# The Nodejs event loop is implemented differently than the browser based event loop.

    This is a point of huge confusion in the Nodejs community.

    While Nodejs uses the Google V8 as it's runtime, it does not used V8 to implement the event loop.

    Nodejs uses the Libuv library (written in C++) to implement the event loop.

    The digram you have above, which works for the JS event loop, is not the same for the Nodejs event loop.

    There are three references you should study in order to fully understand the Nodejs event loop:

    https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
    http://docs.libuv.org/en/v1.x/design.html
    https://www.youtube.com/watch?v=sGTRmPiXD4Y