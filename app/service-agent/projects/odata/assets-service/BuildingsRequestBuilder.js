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
exports.BuildingsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Buildings_1 = require("./Buildings");
/**
 * Request builder class for operations supported on the [[Buildings]] entity.
 */
var BuildingsRequestBuilder = /** @class */ (function (_super) {
    __extends(BuildingsRequestBuilder, _super);
    function BuildingsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Buildings` entity based on its keys.
     * @param id Key property. See [[Buildings.id]].
     * @param isActiveEntity Key property. See [[Buildings.isActiveEntity]].
     * @returns A request builder for creating requests to retrieve one `Buildings` entity based on its keys.
     */
    BuildingsRequestBuilder.prototype.getByKey = function (id, isActiveEntity) {
        return new core_1.GetByKeyRequestBuilderV4(Buildings_1.Buildings, {
            ID: id,
            IsActiveEntity: isActiveEntity
        });
    };
    /**
     * Returns a request builder for querying all `Buildings` entities.
     * @returns A request builder for creating requests to retrieve all `Buildings` entities.
     */
    BuildingsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Buildings_1.Buildings);
    };
    /**
     * Returns a request builder for creating a `Buildings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Buildings`.
     */
    BuildingsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Buildings_1.Buildings, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Buildings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Buildings`.
     */
    BuildingsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Buildings_1.Buildings, entity);
    };
    BuildingsRequestBuilder.prototype.delete = function (idOrEntity, isActiveEntity) {
        return new core_1.DeleteRequestBuilderV4(Buildings_1.Buildings, idOrEntity instanceof Buildings_1.Buildings ? idOrEntity : {
            ID: idOrEntity,
            IsActiveEntity: isActiveEntity
        });
    };
    return BuildingsRequestBuilder;
}(core_1.RequestBuilder));
exports.BuildingsRequestBuilder = BuildingsRequestBuilder;
//# sourceMappingURL=BuildingsRequestBuilder.js.map