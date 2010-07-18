//
// jQuery helper for constructing links to RedLaser custom apps.
//

function redLaserURL(userOptions) {
  var options = {
    "redLaserURL": "http://www.redlaser.com/CustomApp.aspx",
    "name": "jQuery app",
    "url": "http://jquery.com",
    "param": "barcode"};

  $.extend(options, userOptions);
  var params = ["name=" + options.name, "url=" + encodeURIComponent(options.url), "param=" + options.param];

  return [options.redLaserURL, "?", params.join("&")].join("");
}
