const helper = require("../helper.js");
const KundeDao = require("../dao/kundeDao.js");
const express = require("express");
var serviceRouter = express.Router();

serviceRouter.get("/kunde/gib/:id", function(request, response) {
    helper.log("Service Kunde: Client requested one record, id=" + request.params.id);

    const kundeDao = new KundeDao(request.app.locals.dbConnection);
    try {
        var result = kundeDao.loadById(request.params.id);
        helper.log("Service Kunde: Record loaded");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Kunde: Error loading record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.get("/kunde/existiert/:id", function(request, response) {
    helper.log("Service Kunde: Client requested check, if record exists, id=" + request.params.id);

    const kundeDao = new KundeDao(request.app.locals.dbConnection);
    try {
        var result = kundeDao.exists(request.params.id);
        helper.log("Service Kunde: Check if record exists by id=" + request.params.id + ", result=" + result);
        response.status(200).json(helper.jsonMsgOK({ "id": request.params.id, "existiert": result }));
    } catch (ex) {
        helper.logError("Service Kunde: Error checking if record exists. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.post("/kunde", function(request, response) {
    helper.log("Service Kunde: Client requested creation of new record");

    var errorMsgs=[];
    if (helper.isUndefined(request.body.bezeichnung)) 
        errorMsgs.push("bezeichnung fehlt");
    if (helper.isUndefined(request.body.beschreibung)) 
        request.body.beschreibung = "";
    if (helper.isUndefined(request.body.details)) 
        request.body.details = null;
    if (helper.isUndefined(request.body.nettopreis)) 
        errorMsgs.push("nettopreis fehlt");
    if (!helper.isNumeric(request.body.nettopreis)) 
        errorMsgs.push("nettopreis muss eine Zahl sein");
    if (helper.isUndefined(request.body.kategorie)) {
        errorMsgs.push("kategorie fehlt");
    } else if (helper.isUndefined(request.body.kategorie.id)) {
        errorMsgs.push("kategorie gesetzt, aber id fehlt");
    }        
    if (helper.isUndefined(request.body.mehrwertsteuer)) {
        errorMsgs.push("mehrwertsteuer fehlt");
    } else if (helper.isUndefined(request.body.mehrwertsteuer.id)) {
        errorMsgs.push("mehrwertsteuer gesetzt, aber id fehlt");
    }        
    
    if (helper.isUndefined(request.body.bilder)) 
        request.body.bilder = [];
    
    if (errorMsgs.length > 0) {
        helper.log("Service Kunde: Creation not possible, data missing");
        response.status(400).json(helper.jsonMsgError("Hinzufügen nicht möglich. Fehlende Daten: " + helper.concatArray(errorMsgs)));
        return;
    }

    const kundeDao = new KundeDao(request.app.locals.dbConnection);
    try {
        var result = kundeDao.create(request.body.kategorie.id, request.body.bezeichnung, request.body.beschreibung, request.body.mehrwertsteuer.id, request.body.details, request.body.nettopreis,  request.body.bilder);
        helper.log("Service Kunde: Record inserted");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Kunde: Error creating new record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.put("/kunde", function(request, response) {
    helper.log("Service Kunde: Client requested update of existing record");

    var errorMsgs=[];
    if (helper.isUndefined(request.body.id)) 
        errorMsgs.push("id fehlt");
    if (helper.isUndefined(request.body.bezeichnung)) 
        errorMsgs.push("bezeichnung fehlt");
    if (helper.isUndefined(request.body.beschreibung)) 
        request.body.beschreibung = "";
    if (helper.isUndefined(request.body.details)) 
        request.body.details = null;
    if (helper.isUndefined(request.body.nettopreis)) 
        errorMsgs.push("nettopreis fehlt");
    if (!helper.isNumeric(request.body.nettopreis)) 
        errorMsgs.push("nettopreis muss eine Zahl sein");
    if (helper.isUndefined(request.body.kategorie)) {
        errorMsgs.push("kategorie fehlt");
    } else if (helper.isUndefined(request.body.kategorie.id)) {
        errorMsgs.push("kategorie gesetzt, aber id fehlt");
    }        
    if (helper.isUndefined(request.body.mehrwertsteuer)) {
        errorMsgs.push("mehrwertsteuer fehlt");
    } else if (helper.isUndefined(request.body.mehrwertsteuer.id)) {
        errorMsgs.push("mehrwertsteuer gesetzt, aber id fehlt");
    }        
 
    if (helper.isUndefined(request.body.bilder)) 
        request.body.bilder = [];

    if (errorMsgs.length > 0) {
        helper.log("Service Kunde: Update not possible, data missing");
        response.status(400).json(helper.jsonMsgError("Update nicht möglich. Fehlende Daten: " + helper.concatArray(errorMsgs)));
        return;
    }

    const kundeDao = new KundeDao(request.app.locals.dbConnection);
    try {
        var result = kundeDao.update(request.body.id, request.body.kategorie.id, request.body.bezeichnung, request.body.beschreibung, request.body.mehrwertsteuer.id, request.body.details, request.body.nettopreis, request.body.bilder);
        helper.log("Service Kunde: Record updated, id=" + request.body.id);
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Kunde: Error updating record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }    
});

serviceRouter.delete("/kunde/:id", function(request, response) {
    helper.log("Service Kunde: Client requested deletion of record, id=" + request.params.id);

    const kundeDao = new KundeDao(request.app.locals.dbConnection);
    try {
        var obj = kundeDao.loadById(request.params.id);
        kundeDao.delete(request.params.id);
        helper.log("Service Kunde: Deletion of record successfull, id=" + request.params.id);
        response.status(200).json(helper.jsonMsgOK({ "gelöscht": true, "eintrag": obj }));
    } catch (ex) {
        helper.logError("Service Kunde: Error deleting record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

module.exports = serviceRouter;