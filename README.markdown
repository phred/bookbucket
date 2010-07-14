bookbucket
====

Part of my [two weeks on the couch](http://weblog.fredalger.net/) effort, the first in a series of CouchApps and CouchDB-related goodness done here, from my couch.

Not too functional, yet, but so far:

 * [RedLaser Custom App Support](http://redlaser.com/apps) &mdash; hit this app from your iPhone, click a link, and add an icon to your home screen that pops open the awesome RedLaser app, lets you scan a barcode, and then takes you right to the CouchApp.  This is the future!


Planned features:

 * Combined search/data entry field.  If you've entered the book, scanning the barcode will bring it up.  If it's new, it'll start you entering data.
 * Photo uploads.  Take a picture while cataloging.

Yep, it's gonna be pretty spartan, but that's what you get for throwing your books in a bucket.  My hope is that some other people will see the potential here, roll some things into their own apps, or just join up and help me hack on stuff.

Install
---
You're on your own here.  It's a CouchApp, so you'll need [couchapp](http://couchapp.org) and Python to get started and push it into a CouchDB.

Demo
---
Coming soon to [a geeky website near you](http://bookbucket.fredalger.net), just as soon as I get it reasonably functional and secure and figure out how to proxy to CouchDB from [nginx](http://nginx.org).  I'll likely allow read-only replication from a clean copy of the app in order to let people get started quickly at home.
