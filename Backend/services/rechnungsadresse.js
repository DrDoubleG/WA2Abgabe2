const helper = require("../helper.js");
const RechnungsadresseDao = require("../dao/rechnungsadresseDao.js");
const express = require("express");
var serviceRouter = express.Router();

serviceRouter.get("/rechnungsadresse/gib/:id", function(request, response) {
    helper.log("Service Rechnungsadresse: Client requested one record, id=" + request.params.id);

    const rechnungsadresseDao = new RechnungsadresseDao(request.app.locals.dbConnection);
    try {
        var result = rechnungsadresseDao.loadById(request.params.id);
        helper.log("Service Rechnungsadresse: Record loaded");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Rechnungsadresse: Error loading record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.get("/rechnungsadresse/existiert/:id", function(request, response) {
    helper.log("Service Rechnungsadresse: Client requested check, if record exists, id=" + request.params.id);

    const rechnungsadresseDao = new RechnungsadresseDao(request.app.locals.dbConnection);
    try {
        var result = rechnungsadresseDao.exists(request.params.id);
        helper.log("Service Rechnungsadresse: Check if record exists by id=" + request.params.id + ", result=" + result);
        response.status(200).json(helper.jsonMsgOK({ "id": request.params.id, "existiert": result }));
    } catch (ex) {
        helper.logError("Service Rechnungsadresse: Error checking if record exists. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.post("/rechnungsadresse", function(request, response) {
    helper.log("Service Rechnungsadresse: Client requested creation of new record");

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
        helper.log("Service Rechnungsadresse: Creation not possible, data missing");
        response.status(400).json(helper.jsonMsgError("Hinzufügen nicht möglich. Fehlende Daten: " + helper.concatArray(errorMsgs)));
        return;
    }

    const rechnungsadresseDao = new RechnungsadresseDao(request.app.locals.dbConnection);
    try {
        var result = rechnungsadresseDao.create(request.body.kategorie.id, request.body.bezeichnung, request.body.beschreibung, request.body.mehrwertsteuer.id, request.body.details, request.body.nettopreis,  request.body.bilder);
        helper.log("Service Rechnungsadresse: Record inserted");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Rechnungsadresse: Error creating new record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.put("/rechnungsadresse", function(request, response) {
    helper.log("Service Rechnungsadresse: Client requested update of existing record");

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
        helper.log("Service Rechnungsadresse: Update not possible, data missing");
        response.status(400).json(helper.jsonMsgError("Update nicht möglich. Fehlende Daten: " + helper.concatArray(errorMsgs)));
        return;
    }

    const rechnungsadresseDao = new RechnungsadresseDao(request.app.locals.dbConnection);
    try {
        var result = rechnungsadresseDao.update(request.body.id, request.body.kategorie.id, request.body.bezeichnung, request.body.beschreibung, request.body.mehrwertsteuer.id, request.body.details, request.body.nettopreis, request.body.bilder);
        helper.log("Service Rechnungsadresse: Record updated, id=" + request.body.id);
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Rechnungsadresse: Error updating record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }    
});

serviceRouter.delete("/rechnungsadresse/:id", function(request, response) {
    helper.log("Service Rechnungsadresse: Client requested deletion of record, id=" + request.params.id);

    const rechnungsadresseDao = new RechnungsadresseDao(request.app.locals.dbConnection);
    try {
        var obj = rechnungsadresseDao.loadById(request.params.id);
        rechnungsadresseDao.delete(request.params.id);
        helper.log("Service Rechnungsadresse: Deletion of record successfull, id=" + request.params.id);
        response.status(200).json(helper.jsonMsgOK({ "gelöscht": true, "eintrag": obj }));
    } catch (ex) {
        helper.logError("Service Rechnungsadresse: Error deleting record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

module.exports = serviceRouter;