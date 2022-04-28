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
exports.Premises = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PremisesRequestBuilder_1 = require("./PremisesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Premises" of service "AssetsService".
 */
var Premises = /** @class */ (function (_super) {
    __extends(Premises, _super);
    function Premises() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Premises`.
     * @returns A builder that constructs instances of entity type `Premises`.
     */
    Premises.builder = function () {
        return core_1.EntityV4.entityBuilder(Premises);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Premises` entity type.
     * @returns A `Premises` request builder.
     */
    Premises.requestBuilder = function () {
        return new PremisesRequestBuilder_1.PremisesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Premises`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Premises`.
     */
    Premises.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Premises);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Premises.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Premises.
     */
    Premises._entityName = 'Premises';
    /**
     * Default url path for the according service.
     */
    Premises._defaultServicePath = '/service/assets/';
    return Premises;
}(core_1.EntityV4));
exports.Premises = Premises;
var Buildings_1 = require("./Buildings");
var Installations_1 = require("./Installations");
(function (Premises) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.ID = new core_1.StringField('ID', Premises, 'Edm.Guid');
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.CREATED_AT = new core_1.DateField('createdAt', Premises, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.CREATED_BY = new core_1.StringField('createdBy', Premises, 'Edm.String');
    /**
     * Static representation of the [[modifiedAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.MODIFIED_AT = new core_1.DateField('modifiedAt', Premises, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[modifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.MODIFIED_BY = new core_1.StringField('modifiedBy', Premises, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.DESCRIPTION = new core_1.StringField('description', Premises, 'Edm.String');
    /**
     * Static representation of the [[floor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.FLOOR = new core_1.StringField('floor', Premises, 'Edm.String');
    /**
     * Static representation of the [[roomNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.ROOM_NUMBER = new core_1.StringField('roomNumber', Premises, 'Edm.String');
    /**
     * Static representation of the [[roomExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.ROOM_EXTENSION = new core_1.StringField('roomExtension', Premises, 'Edm.String');
    /**
     * Static representation of the [[locationExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.LOCATION_EXTENSION = new core_1.StringField('locationExtension', Premises, 'Edm.String');
    /**
     * Static representation of the [[ewid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.EWID = new core_1.StringField('ewid', Premises, 'Edm.String');
    /**
     * Static representation of the [[buildingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.BUILDING_ID = new core_1.StringField('building_ID', Premises, 'Edm.Guid');
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.IS_ACTIVE_ENTITY = new core_1.BooleanField('IsActiveEntity', Premises, 'Edm.Boolean');
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.HAS_ACTIVE_ENTITY = new core_1.BooleanField('HasActiveEntity', Premises, 'Edm.Boolean');
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.HAS_DRAFT_ENTITY = new core_1.BooleanField('HasDraftEntity', Premises, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[building]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.BUILDING = new core_1.OneToOneLink('building', Premises, Buildings_1.Buildings);
    /**
     * Static representation of the one-to-many navigation property [[installations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.INSTALLATIONS = new core_1.OneToManyLink('installations', Premises, Installations_1.Installations);
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Premises.SIBLING_ENTITY = new core_1.OneToOneLink('SiblingEntity', Premises, Premises);
    /**
     * All fields of the Premises entity.
     */
    Premises._allFields = [
        Premises.ID,
        Premises.CREATED_AT,
        Premises.CREATED_BY,
        Premises.MODIFIED_AT,
        Premises.MODIFIED_BY,
        Premises.DESCRIPTION,
        Premises.FLOOR,
        Premises.ROOM_NUMBER,
        Premises.ROOM_EXTENSION,
        Premises.LOCATION_EXTENSION,
        Premises.EWID,
        Premises.BUILDING_ID,
        Premises.IS_ACTIVE_ENTITY,
        Premises.HAS_ACTIVE_ENTITY,
        Premises.HAS_DRAFT_ENTITY,
        Premises.BUILDING,
        Premises.INSTALLATIONS,
        Premises.SIBLING_ENTITY
    ];
    /**
     * All fields selector.
     */
    Premises.ALL_FIELDS = new core_1.AllFields('*', Premises);
    /**
     * All key fields of the Premises entity.
     */
    Premises._keyFields = [Premises.ID, Premises.IS_ACTIVE_ENTITY];
    /**
     * Mapping of all key field names to the respective static field property Premises.
     */
    Premises._keys = Premises._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Premises = exports.Premises || (exports.Premises = {}));
exports.Premises = Premises;
//# sourceMappingURL=Premises.js.map