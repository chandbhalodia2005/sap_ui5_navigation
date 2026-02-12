sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library" // <--- 1. Add this library
], (Controller, mobileLibrary) => { // <--- 2. Add the reference here
    "use strict";

    return Controller.extend("nw4.controller.View1", {
        onInit() {
        },

        onTilePress: function (oEvent) {
            // This will now work because mobileLibrary is defined above
            mobileLibrary.URLHelper.redirect("http://localhost:8082/index.html", true);
        }
    });
});