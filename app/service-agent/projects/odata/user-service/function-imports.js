"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionImports = exports.info = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var User_1 = require("./User");
/**
 * Info.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function info(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('VALUE_IS_UNDEFINED', 'info', function (data) { return core_1.transformReturnValueForComplexTypeV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, User_1.User); }); }, params);
}
exports.info = info;
exports.functionImports = {
    info: info
};
//# sourceMappingURL=function-imports.js.map