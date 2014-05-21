portalng
========

Sample AngularJS application demonstrating a portal application using a 'federated applet' model 

## Design Goals
- Portal and applets should be independent web applications.  
- Applets should still work and present their 'core' interface if the portal is down.
- Changes to portal layout should update automatically accross all applets without a deployment or restart.
- Portal API should be versioned to allow backward compatability with older applets.

## Implementation Notes
- I have used express as the backend for the portal but this is not a requirement, any backend that can serve the layout html fragment and the restful API would work.
- I have implemented CORS on the server and the client to allow the applets to communicate with the portal accross different domains.
- Angular version is 1.2.16 but any 1.2.x version should be ok.  1.1.x versions will **not** work because the transclude function is not available on the link function signature in 1.1.x
- I have used the angular-ui-router library in the applet to demonstrate that the portal approach and routing within an applet are compatible however this is not a requirement for the portal to work.  Standard AngularJS routing or no routing at all will work equally well with this approach.

## Running the sample
Clone repo then..
```
$ cd portalng/portal
$ npm install
$ node app.js
$ cd ../applet1
$ npm install
$ node app.js
```
then Navigate to http://localhost:3000
