/*
Function: $get
	This function provides access to the "get" variable scope + the element anchor

Version: 1.3

Arguments:
	key - string; optional; the parameter key to search for in the url's query string (can also be "#" for the element anchor)
	url - url; optional; the url to check for "key" in, location.href is default

Example:
	>$get("foo","http://example.com/?foo=bar"); //returns "bar"
	>$get("foo"); //returns the value of the "foo" variable if it's present in the current url(location.href)
	>$get("#","http://example.com/#moo"); //returns "moo"
	>$get("#"); //returns the element anchor if any, but from the current url (location.href)
	>$get(,"http://example.com/?foo=bar&bar=foo"); //returns {foo:'bar',bar:'foo'}
	>$get(,"http://example.com/?foo=bar&bar=foo#moo"); //returns {foo:'bar',bar:'foo',hash:'moo'}
	>$get(); //returns same as above, but from the current url (location.href)
	>$get("?"); //returns the query string (without ? and element anchor) from the current url (location.href)

Returns:
	Returns the value of the variable form the provided key, or an object with the current GET variables plus the element anchor (if any)
	Returns "" if the variable is not present in the given query string

Credits:
		Regex from [url=http://www.netlobo.com/url_query_string_javascript.html]http://www.netlobo.com/url_query_string_javascript.html[/url]
		Function by Jens Anders Bakke, webfreak.no
*/
function $get(key,url){
	if(arguments.length < 2) url =location.href;
	if(arguments.length > 0 && key != ""){
		if(key == "#"){
			var regex = new RegExp("[#]([^$]*)");
		} else if(key == "?"){
			var regex = new RegExp("[?]([^#$]*)");
		} else {
			var regex = new RegExp("[?&]"+key+"=([^&#]*)");
		}
		var results = regex.exec(url);
		return (results == null )? "" : results[1];
	} else {
		url = url.split("?");
		var results = {};
			if(url.length > 1){
				url = url[1].split("#");
				if(url.length > 1) results["hash"] = url[1];
				url[0].split("&").each(function(item,index){
					item = item.split("=");
					results[item[0]] = item[1];
				});
			}
		return results;
	}
}
