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
exports.InstallationsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Installations_1 = require("./Installations");
/**
 * Request builder class for operations supported on the [[Installations]] entity.
 */
var InstallationsRequestBuilder = /** @class */ (function (_super) {
    __extends(InstallationsRequestBuilder, _super);
    function InstallationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Installations` entity based on its keys.
     * @param id Key property. See [[Installations.id]].
     * @param isActiveEntity Key property. See [[Installations.isActiveEntity]].
     * @returns A request builder for creating requests to retrieve one `Installations` entity based on its keys.
     */
    InstallationsRequestBuilder.prototype.getByKey = function (id, isActiveEntity) {
        return new core_1.GetByKeyRequestBuilderV4(Installations_1.Installations, {
            ID: id,
            IsActiveEntity: isActiveEntity
        });
    };
    /**
     * Returns a request builder for querying all `Installations` entities.
     * @returns A request builder for creating requests to retrieve all `Installations` entities.
     */
    InstallationsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Installations_1.Installations);
    };
    /**
     * Returns a request builder for creating a `Installations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Installations`.
     */
    InstallationsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Installations_1.Installations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Installations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Installations`.
     */
    InstallationsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Installations_1.Installations, entity);
    };
    InstallationsRequestBuilder.prototype.delete = function (idOrEntity, isActiveEntity) {
        return new core_1.DeleteRequestBuilderV4(Installations_1.Installations, idOrEntity instanceof Installations_1.Installations ? idOrEntity : {
            ID: idOrEntity,
            IsActiveEntity: isActiveEntity
        });
    };
    return InstallationsRequestBuilder;
}(core_1.RequestBuilder));
exports.InstallationsRequestBuilder = InstallationsRequestBuilder;
//# sourceMappingURL=InstallationsRequestBuilder.js.map