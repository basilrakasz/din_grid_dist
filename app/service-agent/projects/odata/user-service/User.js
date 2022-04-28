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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserField = exports.createUser = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UserScopes_1 = require("./UserScopes");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[User.build]] instead.
 */
function createUser(json) {
    return User.build(json);
}
exports.createUser = createUser;
/**
 * UserField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserField = /** @class */ (function (_super) {
    __extends(UserField, _super);
    /**
     * Creates an instance of UserField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, User) || this;
        /**
         * Representation of the [[User.user]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.user = new core_1.ComplexTypeStringPropertyField('user', _this, 'Edm.String');
        /**
         * Representation of the [[User.locale]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locale = new core_1.ComplexTypeStringPropertyField('locale', _this, 'Edm.String');
        /**
         * Representation of the [[User.tenant]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tenant = new core_1.ComplexTypeStringPropertyField('tenant', _this, 'Edm.String');
        /**
         * Representation of the [[User.scopes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.scopes = new UserScopes_1.UserScopesField('scopes', _this);
        /**
         * Representation of the [[User.firstName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstName = new core_1.ComplexTypeStringPropertyField('firstName', _this, 'Edm.String');
        /**
         * Representation of the [[User.lastName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastName = new core_1.ComplexTypeStringPropertyField('lastName', _this, 'Edm.String');
        /**
         * Representation of the [[User.email]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.email = new core_1.ComplexTypeStringPropertyField('email', _this, 'Edm.String');
        return _this;
    }
    return UserField;
}(core_1.ComplexTypeField));
exports.UserField = UserField;
var User;
(function (User) {
    /**
     * Metadata information on all properties of the `User` complex type.
     */
    User._propertyMetadata = [{
            originalName: 'user',
            name: 'user',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'locale',
            name: 'locale',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'tenant',
            name: 'tenant',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'scopes',
            name: 'scopes',
            type: UserScopes_1.UserScopes,
            isCollection: false
        }, {
            originalName: 'firstName',
            name: 'firstName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'lastName',
            name: 'lastName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'email',
            name: 'email',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, User);
    }
    User.build = build;
})(User = exports.User || (exports.User = {}));
//# sourceMappingURL=User.js.map