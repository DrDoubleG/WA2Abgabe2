const helper = require("../helper.js");
const BestellpositionDao = require("../dao/bestellpositionDao.js");
const express = require("express");
var serviceRouter = express.Router();

serviceRouter.get("/bestellposition/gib/:id", function(request, response) {
    helper.log("Service Bestellposition: Client requested one record, id=" + request.params.id);

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.loadById(request.params.id);
        helper.log("Service Bestellposition: Record loaded");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Bestellposition: Error loading record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.get("/bestellposition/alle/", function(request, response) {
    helper.log("Service Bestellposition: Client requested all records");

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.loadAll();
        helper.log("Service Bestellposition: Records loaded, count=" + result.length);
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Bestellposition: Error loading all records. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.get("/bestellposition/existiert/:id", function(request, response) {
    helper.log("Service Bestellposition: Client requested check, if record exists, id=" + request.params.id);

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.exists(request.params.id);
        helper.log("Service Bestellposition: Check if record exists by id=" + request.params.id + ", result=" + result);
        response.status(200).json(helper.jsonMsgOK({ "id": request.params.id, "existiert": result }));
    } catch (ex) {
        helper.logError("Service Bestellposition: Error checking if record exists. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.post("/bestellposition", function(request, response) {
    helper.log("Service Bestellposition: Client requested creation of new record");

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
        helper.log("Service Bestellposition: Creation not possible, data missing");
        response.status(400).json(helper.jsonMsgError("Hinzufügen nicht möglich. Fehlende Daten: " + helper.concatArray(errorMsgs)));
        return;
    }

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.create(request.body.kategorie.id, request.body.bezeichnung, request.body.beschreibung, request.body.mehrwertsteuer.id, request.body.details, request.body.nettopreis,  request.body.bilder);
        helper.log("Service Bestellposition: Record inserted");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Bestellposition: Error creating new record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.put("/bestellposition", function(request, response) {
    helper.log("Service Bestellposition: Client requested update of existing record");

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
        helper.log("Service Bestellposition: Update not possible, data missing");
        response.status(400).json(helper.jsonMsgError("Update nicht möglich. Fehlende Daten: " + helper.concatArray(errorMsgs)));
        return;
    }

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var result = bestellpositionDao.update(request.body.id, request.body.kategorie.id, request.body.bezeichnung, request.body.beschreibung, request.body.mehrwertsteuer.id, request.body.details, request.body.nettopreis, request.body.bilder);
        helper.log("Service Bestellposition: Record updated, id=" + request.body.id);
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Bestellposition: Error updating record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }    
});

serviceRouter.delete("/bestellposition/:id", function(request, response) {
    helper.log("Service Bestellposition: Client requested deletion of record, id=" + request.params.id);

    const bestellpositionDao = new BestellpositionDao(request.app.locals.dbConnection);
    try {
        var obj = bestellpositionDao.loadById(request.params.id);
        bestellpositionDao.delete(request.params.id);
        helper.log("Service Bestellposition: Deletion of record successfull, id=" + request.params.id);
        response.status(200).json(helper.jsonMsgOK({ "gelöscht": true, "eintrag": obj }));
    } catch (ex) {
        helper.logError("Service Bestellposition: Error deleting record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

module.exports = serviceRouter;