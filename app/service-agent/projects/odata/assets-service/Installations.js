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
exports.Installations = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InstallationsRequestBuilder_1 = require("./InstallationsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Installations" of service "AssetsService".
 */
var Installations = /** @class */ (function (_super) {
    __extends(Installations, _super);
    function Installations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Installations`.
     * @returns A builder that constructs instances of entity type `Installations`.
     */
    Installations.builder = function () {
        return core_1.EntityV4.entityBuilder(Installations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Installations` entity type.
     * @returns A `Installations` request builder.
     */
    Installations.requestBuilder = function () {
        return new InstallationsRequestBuilder_1.InstallationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Installations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Installations`.
     */
    Installations.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Installations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Installations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Installations.
     */
    Installations._entityName = 'Installations';
    /**
     * Default url path for the according service.
     */
    Installations._defaultServicePath = '/service/assets/';
    return Installations;
}(core_1.EntityV4));
exports.Installations = Installations;
var Buildings_1 = require("./Buildings");
var Premises_1 = require("./Premises");
(function (Installations) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.ID = new core_1.StringField('ID', Installations, 'Edm.Guid');
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.CREATED_AT = new core_1.DateField('createdAt', Installations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.CREATED_BY = new core_1.StringField('createdBy', Installations, 'Edm.String');
    /**
     * Static representation of the [[modifiedAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.MODIFIED_AT = new core_1.DateField('modifiedAt', Installations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[modifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.MODIFIED_BY = new core_1.StringField('modifiedBy', Installations, 'Edm.String');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.VALID_FROM = new core_1.DateField('validFrom', Installations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.VALID_TO = new core_1.DateField('validTo', Installations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.TYPE = new core_1.StringField('type', Installations, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.DESCRIPTION = new core_1.StringField('description', Installations, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.DIVISION = new core_1.StringField('division', Installations, 'Edm.String');
    /**
     * Static representation of the [[buildingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.BUILDING_ID = new core_1.StringField('building_ID', Installations, 'Edm.Guid');
    /**
     * Static representation of the [[premiseId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.PREMISE_ID = new core_1.StringField('premise_ID', Installations, 'Edm.Guid');
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.IS_ACTIVE_ENTITY = new core_1.BooleanField('IsActiveEntity', Installations, 'Edm.Boolean');
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.HAS_ACTIVE_ENTITY = new core_1.BooleanField('HasActiveEntity', Installations, 'Edm.Boolean');
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.HAS_DRAFT_ENTITY = new core_1.BooleanField('HasDraftEntity', Installations, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[building]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.BUILDING = new core_1.OneToOneLink('building', Installations, Buildings_1.Buildings);
    /**
     * Static representation of the one-to-one navigation property [[premise]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.PREMISE = new core_1.OneToOneLink('premise', Installations, Premises_1.Premises);
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Installations.SIBLING_ENTITY = new core_1.OneToOneLink('SiblingEntity', Installations, Installations);
    /**
     * All fields of the Installations entity.
     */
    Installations._allFields = [
        Installations.ID,
        Installations.CREATED_AT,
        Installations.CREATED_BY,
        Installations.MODIFIED_AT,
        Installations.MODIFIED_BY,
        Installations.VALID_FROM,
        Installations.VALID_TO,
        Installations.TYPE,
        Installations.DESCRIPTION,
        Installations.DIVISION,
        Installations.BUILDING_ID,
        Installations.PREMISE_ID,
        Installations.IS_ACTIVE_ENTITY,
        Installations.HAS_ACTIVE_ENTITY,
        Installations.HAS_DRAFT_ENTITY,
        Installations.BUILDING,
        Installations.PREMISE,
        Installations.SIBLING_ENTITY
    ];
    /**
     * All fields selector.
     */
    Installations.ALL_FIELDS = new core_1.AllFields('*', Installations);
    /**
     * All key fields of the Installations entity.
     */
    Installations._keyFields = [Installations.ID, Installations.IS_ACTIVE_ENTITY];
    /**
     * Mapping of all key field names to the respective static field property Installations.
     */
    Installations._keys = Installations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Installations = exports.Installations || (exports.Installations = {}));
exports.Installations = Installations;
//# sourceMappingURL=Installations.js.map