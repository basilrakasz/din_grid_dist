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
exports.Buildings = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BuildingsRequestBuilder_1 = require("./BuildingsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Buildings" of service "AssetsService".
 */
var Buildings = /** @class */ (function (_super) {
    __extends(Buildings, _super);
    function Buildings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Buildings`.
     * @returns A builder that constructs instances of entity type `Buildings`.
     */
    Buildings.builder = function () {
        return core_1.EntityV4.entityBuilder(Buildings);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Buildings` entity type.
     * @returns A `Buildings` request builder.
     */
    Buildings.requestBuilder = function () {
        return new BuildingsRequestBuilder_1.BuildingsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Buildings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Buildings`.
     */
    Buildings.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Buildings);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Buildings.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Buildings.
     */
    Buildings._entityName = 'Buildings';
    /**
     * Default url path for the according service.
     */
    Buildings._defaultServicePath = '/service/assets/';
    return Buildings;
}(core_1.EntityV4));
exports.Buildings = Buildings;
var Countries_1 = require("./Countries");
var Premises_1 = require("./Premises");
var Installations_1 = require("./Installations");
(function (Buildings) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.ID = new core_1.StringField('ID', Buildings, 'Edm.Guid');
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.CREATED_AT = new core_1.DateField('createdAt', Buildings, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.CREATED_BY = new core_1.StringField('createdBy', Buildings, 'Edm.String');
    /**
     * Static representation of the [[modifiedAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.MODIFIED_AT = new core_1.DateField('modifiedAt', Buildings, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[modifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.MODIFIED_BY = new core_1.StringField('modifiedBy', Buildings, 'Edm.String');
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.STREET = new core_1.StringField('street', Buildings, 'Edm.String');
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.NUMBER = new core_1.StringField('number', Buildings, 'Edm.String');
    /**
     * Static representation of the [[numberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.NUMBER_EXTENSION = new core_1.StringField('numberExtension', Buildings, 'Edm.String');
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.POSTAL_CODE = new core_1.StringField('postalCode', Buildings, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.CITY = new core_1.StringField('city', Buildings, 'Edm.String');
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.REGION = new core_1.StringField('region', Buildings, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.COUNTRY_CODE = new core_1.StringField('country_code', Buildings, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.DESCRIPTION = new core_1.StringField('description', Buildings, 'Edm.String');
    /**
     * Static representation of the [[egid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.EGID = new core_1.StringField('egid', Buildings, 'Edm.String');
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.IS_ACTIVE_ENTITY = new core_1.BooleanField('IsActiveEntity', Buildings, 'Edm.Boolean');
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.HAS_ACTIVE_ENTITY = new core_1.BooleanField('HasActiveEntity', Buildings, 'Edm.Boolean');
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.HAS_DRAFT_ENTITY = new core_1.BooleanField('HasDraftEntity', Buildings, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.COUNTRY = new core_1.OneToOneLink('country', Buildings, Countries_1.Countries);
    /**
     * Static representation of the one-to-many navigation property [[premises]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.PREMISES = new core_1.OneToManyLink('premises', Buildings, Premises_1.Premises);
    /**
     * Static representation of the one-to-many navigation property [[installations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.INSTALLATIONS = new core_1.OneToManyLink('installations', Buildings, Installations_1.Installations);
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Buildings.SIBLING_ENTITY = new core_1.OneToOneLink('SiblingEntity', Buildings, Buildings);
    /**
     * All fields of the Buildings entity.
     */
    Buildings._allFields = [
        Buildings.ID,
        Buildings.CREATED_AT,
        Buildings.CREATED_BY,
        Buildings.MODIFIED_AT,
        Buildings.MODIFIED_BY,
        Buildings.STREET,
        Buildings.NUMBER,
        Buildings.NUMBER_EXTENSION,
        Buildings.POSTAL_CODE,
        Buildings.CITY,
        Buildings.REGION,
        Buildings.COUNTRY_CODE,
        Buildings.DESCRIPTION,
        Buildings.EGID,
        Buildings.IS_ACTIVE_ENTITY,
        Buildings.HAS_ACTIVE_ENTITY,
        Buildings.HAS_DRAFT_ENTITY,
        Buildings.COUNTRY,
        Buildings.PREMISES,
        Buildings.INSTALLATIONS,
        Buildings.SIBLING_ENTITY
    ];
    /**
     * All fields selector.
     */
    Buildings.ALL_FIELDS = new core_1.AllFields('*', Buildings);
    /**
     * All key fields of the Buildings entity.
     */
    Buildings._keyFields = [Buildings.ID, Buildings.IS_ACTIVE_ENTITY];
    /**
     * Mapping of all key field names to the respective static field property Buildings.
     */
    Buildings._keys = Buildings._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Buildings = exports.Buildings || (exports.Buildings = {}));
exports.Buildings = Buildings;
//# sourceMappingURL=Buildings.js.map