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
exports.UserScopes = exports.UserScopesField = exports.createUserScopes = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UserScopes.build]] instead.
 */
function createUserScopes(json) {
    return UserScopes.build(json);
}
exports.createUserScopes = createUserScopes;
/**
 * UserScopesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UserScopesField = /** @class */ (function (_super) {
    __extends(UserScopesField, _super);
    /**
     * Creates an instance of UserScopesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UserScopesField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UserScopes) || this;
        /**
         * Representation of the [[UserScopes.identified]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.identified = new core_1.ComplexTypeBooleanPropertyField('identified', _this, 'Edm.Boolean');
        /**
         * Representation of the [[UserScopes.authenticated]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.authenticated = new core_1.ComplexTypeBooleanPropertyField('authenticated', _this, 'Edm.Boolean');
        /**
         * Representation of the [[UserScopes.assetAdmin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assetAdmin = new core_1.ComplexTypeBooleanPropertyField('AssetAdmin', _this, 'Edm.Boolean');
        /**
         * Representation of the [[UserScopes.assetViewer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assetViewer = new core_1.ComplexTypeBooleanPropertyField('AssetViewer', _this, 'Edm.Boolean');
        /**
         * Representation of the [[UserScopes.agentWorker]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agentWorker = new core_1.ComplexTypeBooleanPropertyField('AgentWorker', _this, 'Edm.Boolean');
        /**
         * Representation of the [[UserScopes.agentAdmin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agentAdmin = new core_1.ComplexTypeBooleanPropertyField('AgentAdmin', _this, 'Edm.Boolean');
        return _this;
    }
    return UserScopesField;
}(core_1.ComplexTypeField));
exports.UserScopesField = UserScopesField;
var UserScopes;
(function (UserScopes) {
    /**
     * Metadata information on all properties of the `UserScopes` complex type.
     */
    UserScopes._propertyMetadata = [{
            originalName: 'identified',
            name: 'identified',
            type: 'Edm.Boolean',
            isCollection: false
        }, {
            originalName: 'authenticated',
            name: 'authenticated',
            type: 'Edm.Boolean',
            isCollection: false
        }, {
            originalName: 'AssetAdmin',
            name: 'assetAdmin',
            type: 'Edm.Boolean',
            isCollection: false
        }, {
            originalName: 'AssetViewer',
            name: 'assetViewer',
            type: 'Edm.Boolean',
            isCollection: false
        }, {
            originalName: 'AgentWorker',
            name: 'agentWorker',
            type: 'Edm.Boolean',
            isCollection: false
        }, {
            originalName: 'AgentAdmin',
            name: 'agentAdmin',
            type: 'Edm.Boolean',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UserScopes);
    }
    UserScopes.build = build;
})(UserScopes = exports.UserScopes || (exports.UserScopes = {}));
//# sourceMappingURL=UserScopes.js.map