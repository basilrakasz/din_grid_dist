"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAssetsServicePath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var util_1 = require("@sap-cloud-sdk/util");
var index_1 = require("./index");
function batch(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilderV4(exports.defaultAssetsServicePath, util_1.variadicArgumentToArray(first, rest), map);
}
exports.batch = batch;
function changeset(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSetV4(util_1.variadicArgumentToArray(first, rest));
}
exports.changeset = changeset;
exports.defaultAssetsServicePath = '/service/assets/';
var map = { 'Buildings': index_1.Buildings, 'Premises': index_1.Premises, 'Installations': index_1.Installations, 'Countries': index_1.Countries, 'Countries_texts': index_1.Countries_Texts };
//# sourceMappingURL=BatchRequest.js.map