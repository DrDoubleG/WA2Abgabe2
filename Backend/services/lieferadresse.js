const helper = require("../helper.js");
const LieferadresseDao = require("../dao/lieferadresseDao.js");
const express = require("express");
var serviceRouter = express.Router();

serviceRouter.get("/lieferadresse/gib/:id", function(request, response) {
    helper.log("Service Lieferadresse: Client requested one record, id=" + request.params.id);

    const lieferadresseDao = new LieferadresseDao(request.app.locals.dbConnection);
    try {
        var result = lieferadresseDao.loadById(request.params.id);
        helper.log("Service Lieferadresse: Record loaded");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Lieferadresse: Error loading record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.get("/lieferadresse/existiert/:id", function(request, response) {
    helper.log("Service Lieferadresse: Client requested check, if record exists, id=" + request.params.id);

    const lieferadresseDao = new LieferadresseDao(request.app.locals.dbConnection);
    try {
        var result = lieferadresseDao.exists(request.params.id);
        helper.log("Service Lieferadresse: Check if record exists by id=" + request.params.id + ", result=" + result);
        response.status(200).json(helper.jsonMsgOK({ "id": request.params.id, "existiert": result }));
    } catch (ex) {
        helper.logError("Service Lieferadresse: Error checking if record exists. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.post("/lieferadresse", function(request, response) {
    helper.log("Service Lieferadresse: Client requested creation of new record");

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
        helper.log("Service Lieferadresse: Creation not possible, data missing");
        response.status(400).json(helper.jsonMsgError("Hinzufügen nicht möglich. Fehlende Daten: " + helper.concatArray(errorMsgs)));
        return;
    }

    const lieferadresseDao = new LieferadresseDao(request.app.locals.dbConnection);
    try {
        var result = lieferadresseDao.create(request.body.kategorie.id, request.body.bezeichnung, request.body.beschreibung, request.body.mehrwertsteuer.id, request.body.details, request.body.nettopreis,  request.body.bilder);
        helper.log("Service Lieferadresse: Record inserted");
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Lieferadresse: Error creating new record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

serviceRouter.put("/lieferadresse", function(request, response) {
    helper.log("Service Lieferadresse: Client requested update of existing record");

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
        helper.log("Service Lieferadresse: Update not possible, data missing");
        response.status(400).json(helper.jsonMsgError("Update nicht möglich. Fehlende Daten: " + helper.concatArray(errorMsgs)));
        return;
    }

    const lieferadresseDao = new LieferadresseDao(request.app.locals.dbConnection);
    try {
        var result = lieferadresseDao.update(request.body.id, request.body.kategorie.id, request.body.bezeichnung, request.body.beschreibung, request.body.mehrwertsteuer.id, request.body.details, request.body.nettopreis, request.body.bilder);
        helper.log("Service Lieferadresse: Record updated, id=" + request.body.id);
        response.status(200).json(helper.jsonMsgOK(result));
    } catch (ex) {
        helper.logError("Service Lieferadresse: Error updating record by id. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }    
});

serviceRouter.delete("/lieferadresse/:id", function(request, response) {
    helper.log("Service Lieferadresse: Client requested deletion of record, id=" + request.params.id);

    const lieferadresseDao = new LieferadresseDao(request.app.locals.dbConnection);
    try {
        var obj = lieferadresseDao.loadById(request.params.id);
        lieferadresseDao.delete(request.params.id);
        helper.log("Service Lieferadresse: Deletion of record successfull, id=" + request.params.id);
        response.status(200).json(helper.jsonMsgOK({ "gelöscht": true, "eintrag": obj }));
    } catch (ex) {
        helper.logError("Service Lieferadresse: Error deleting record. Exception occured: " + ex.message);
        response.status(400).json(helper.jsonMsgError(ex.message));
    }
});

module.exports = serviceRouter;