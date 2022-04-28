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
exports.Countries = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CountriesRequestBuilder_1 = require("./CountriesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Countries" of service "AssetsService".
 */
var Countries = /** @class */ (function (_super) {
    __extends(Countries, _super);
    function Countries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Countries`.
     * @returns A builder that constructs instances of entity type `Countries`.
     */
    Countries.builder = function () {
        return core_1.EntityV4.entityBuilder(Countries);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Countries` entity type.
     * @returns A `Countries` request builder.
     */
    Countries.requestBuilder = function () {
        return new CountriesRequestBuilder_1.CountriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Countries`.
     */
    Countries.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Countries);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Countries.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Countries.
     */
    Countries._entityName = 'Countries';
    /**
     * Default url path for the according service.
     */
    Countries._defaultServicePath = '/service/assets/';
    return Countries;
}(core_1.EntityV4));
exports.Countries = Countries;
var Countries_Texts_1 = require("./Countries_Texts");
(function (Countries) {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.NAME = new core_1.StringField('name', Countries, 'Edm.String');
    /**
     * Static representation of the [[descr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.DESCR = new core_1.StringField('descr', Countries, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.CODE = new core_1.StringField('code', Countries, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[texts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.TEXTS = new core_1.OneToManyLink('texts', Countries, Countries_Texts_1.Countries_Texts);
    /**
     * Static representation of the one-to-one navigation property [[localized]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Countries.LOCALIZED = new core_1.OneToOneLink('localized', Countries, Countries_Texts_1.Countries_Texts);
    /**
     * All fields of the Countries entity.
     */
    Countries._allFields = [
        Countries.NAME,
        Countries.DESCR,
        Countries.CODE,
        Countries.TEXTS,
        Countries.LOCALIZED
    ];
    /**
     * All fields selector.
     */
    Countries.ALL_FIELDS = new core_1.AllFields('*', Countries);
    /**
     * All key fields of the Countries entity.
     */
    Countries._keyFields = [Countries.CODE];
    /**
     * Mapping of all key field names to the respective static field property Countries.
     */
    Countries._keys = Countries._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Countries = exports.Countries || (exports.Countries = {}));
exports.Countries = Countries;
//# sourceMappingURL=Countries.js.map