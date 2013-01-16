// Create a YUI sandbox on your page.
YUI().use('node', 'event', function (Y) {
    // The Node and Event modules are loaded and ready to use.
    // Your code goes here!

    Y.log("js is working!");
    Y.one("#canvas").setContent("YUI is loaded and working");
});

