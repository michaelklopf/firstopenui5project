jQuery.sap.declare("sap.ui.demo.app.Component");
jQuery.sap.require("sap.ui.demo.app.MyRouter");

sap.ui.core.UIComponent.extend("sap.ui.demo.app.Component", {
	// setting configuration
	metadata : {
		// general part
        name : "Open UI5 Demo",

        version : "1.0",

        includes : [],

        dependencies : {
            libs : ["sap.m", "sap.ui.layout"],
            components : []
    	},

 		rootView : "sap.ui.demo.app.view.App",
 		// use rootView when view is not enhanced with additional data
 		// else use createContent

 		// config part obviously
 		// disable the security of the browser to make the following work
 		// start Chrome with the arguments --disable-web-security
 		// or setup a proxy URL on the server that redirects requests
 		// TODO: try it with RESTler/Gulp/Grunt
 		config : {
            resourceBundle : "i18n/messageBundle.properties",
            serviceConfig : {
                name : "Northwind",
                serviceUrl : 
                	"http://services.odata.org/V2/(S(sapuidemotdg))/OData/OData.svc/"
            }
    	},

    	// routing part obviously
    	routing: {
        	// will be done in part 3 of the tutorial
    	}
    },

  	init : function() {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        var mConfig = this.getMetadata().getConfig();

        // always use absolute paths relative to our own component
        // (relative paths will fail if running in the Fiori Launchpad)
        var rootPath = jQuery.sap.getModulePath("sap.ui.demo.app");

        // set i18n model - links to folder i18n
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : [rootPath, mConfig.resourceBundle].join("/")
        });
        this.setModel(i18nModel, "i18n");
        
        // Create and set domain model to the component
        // - taken from above service config
        var sServiceUrl = mConfig.serviceConfig.serviceUrl;
        var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
        this.setModel(oModel);

        // set device model - for responsiveness that is not part of the controls
        // (some is implicit, this is for the explicit part)
        var deviceModel = new sap.ui.model.json.JSONModel({
            isTouch : sap.ui.Device.support.touch,
            isNoTouch : !sap.ui.Device.support.touch,
            isPhone : sap.ui.Device.system.phone,
            isNoPhone : !sap.ui.Device.system.phone,
            listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
            listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
        });

        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");
        
        this.getRouter().initialize();
    },
});