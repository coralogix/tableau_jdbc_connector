(function dsbuilder(attr){
	var prefix = "jdbc:opensearch://";

	var auth = attr[connectionHelper.attributeAuthentication];
	if ( auth == "auth-none" ) {
		var customUrl = attr[connectionHelper.attributeServer];
		return [prefix + customUrl];
	}

	var region = attr["v-region"];
	var regionUrl;
	if (region === "Production") {
		regionUrl = "coralogix.com"
	} else if (region === "Mumbai") {
		regionUrl = "app.coralogix.in"
	} else if (region === "US") {
		regionUrl = "coralogix.us"
	} else if (region === "AP Prod2") {
		regionUrl = "coralogixsg.com"
	} else if (region === "EU Prod2") {
		regionUrl = "eu2.coralogix.com"
	} else if (region === "Staging") {
		regionUrl = "app.staging.coralogix.net"
	}

	var logsKey = attr[connectionHelper.attributeUsername];
	var connStr =  prefix + "https://ng-api-http." + regionUrl + "/sql/" + logsKey;
	return [connStr];
})
