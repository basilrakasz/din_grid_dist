"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countries_Texts = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Countries_TextsRequestBuilder_1 = require("./Countries_TextsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Countries_texts" of service "AssetsService".
 */
var Countries_Texts = /** @class */ (function (_super) {
    __extends(Countries_Texts, _super);
    function Countries_Texts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Countries_Texts`.
     * @returns A builder that constructs instances of entity type `Countries_Texts`.
     */
    Countries_Texts.builder = function () {
        return core_1.EntityV4.entityBuilder(Countries_Texts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Countries_Texts` entity type.
     * @returns A `Countries_Texts` request builder.
     */
    Countries_Texts.requestBuilder = function () {
        return new Countries_TextsRequestBuilder_1.Countries_TextsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries_Texts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Countries_Texts`.
     */
    Countries_Texts.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Countries_Texts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Countries_Texts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Countries_Texts.
     */
    Countries_Texts._entityName = 'Countries_texts';
    /**
     * Default url path for the according service.
     */
    Countries_Texts._defaultServicePath = '/service/assets/';
    return Countries_Texts;
}(core_1.EntityV4));
exports.Countries_Texts = Countries_Texts;
(function (Countries_Texts) {
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries_Texts.LOCALE = new core_1.StringField('locale', Countries_Texts, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries_Texts.NAME = new core_1.StringField('name', Countries_Texts, 'Edm.String');
    /**
     * Static representation of the [[descr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries_Texts.DESCR = new core_1.StringField('descr', Countries_Texts, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries_Texts.CODE = new core_1.StringField('code', Countries_Texts, 'Edm.String');
    /**
     * All fields of the Countries_Texts entity.
     */
    Countries_Texts._allFields = [
        Countries_Texts.LOCALE,
        Countries_Texts.NAME,
        Countries_Texts.DESCR,
        Countries_Texts.CODE
    ];
    /**
     * All fields selector.
     */
    Countries_Texts.ALL_FIELDS = new core_1.AllFields('*', Countries_Texts);
    /**
     * All key fields of the Countries_Texts entity.
     */
    Countries_Texts._keyFields = [Countries_Texts.LOCALE, Countries_Texts.CODE];
    /**
     * Mapping of all key field names to the respective static field property Countries_Texts.
     */
    Countries_Texts._keys = Countries_Texts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Countries_Texts = exports.Countries_Texts || (exports.Countries_Texts = {}));
exports.Countries_Texts = Countries_Texts;
//# sourceMappingURL=Countries_Texts.js.map