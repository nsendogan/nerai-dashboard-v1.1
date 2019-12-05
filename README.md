# NERAI DASHBOARD V1.1
A CreativeTim template was used making the dashboard. The components were edited accordingly.

# Main Page
Selection buttons with a jpg image. A real time info map chart will be added in place for the picture.

# RealTime Information
A server must be started to get the realtime info flow. 
For that: 
- Open terminal at the root
- Type: node server.js
- Refresh the page if nothing changes

# Chart Data Storage
Charts are displayed from an external source. But the datas are available at local storages. 


# PROBLEM WITH DEPLOYING
- npm run build

./build/index.html produces this problem and displays nothing: 
DOMException: Failed to execute 'replaceState' on 'History': A history state object with URL 'file:///admin/dashboard' cannot be created in a document with origin 'null' and URL 'file:///Users/S/Desktop/NERAI/NERAI_WEB/build/index.html'.
    at file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:12111
    at Object.confirmTransitionTo (file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:9407)
    at replace (file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:12020)
    at t.onMount (file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:29437)
    at t.n.componentDidMount (file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:28631)
    at za (file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:317027)
    at Va (file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:319703)
    at file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:332932
    at Object.t.unstable_runWithPriority (file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:343677)
    at _s (file:///Users/S/Desktop/NERAI/NERAI_WEB/build/static/js/2.4c335696.chunk.js:1:332867)
