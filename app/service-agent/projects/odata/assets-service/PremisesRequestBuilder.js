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
exports.PremisesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Premises_1 = require("./Premises");
/**
 * Request builder class for operations supported on the [[Premises]] entity.
 */
var PremisesRequestBuilder = /** @class */ (function (_super) {
    __extends(PremisesRequestBuilder, _super);
    function PremisesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Premises` entity based on its keys.
     * @param id Key property. See [[Premises.id]].
     * @param isActiveEntity Key property. See [[Premises.isActiveEntity]].
     * @returns A request builder for creating requests to retrieve one `Premises` entity based on its keys.
     */
    PremisesRequestBuilder.prototype.getByKey = function (id, isActiveEntity) {
        return new core_1.GetByKeyRequestBuilderV4(Premises_1.Premises, {
            ID: id,
            IsActiveEntity: isActiveEntity
        });
    };
    /**
     * Returns a request builder for querying all `Premises` entities.
     * @returns A request builder for creating requests to retrieve all `Premises` entities.
     */
    PremisesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Premises_1.Premises);
    };
    /**
     * Returns a request builder for creating a `Premises` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Premises`.
     */
    PremisesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Premises_1.Premises, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Premises`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Premises`.
     */
    PremisesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Premises_1.Premises, entity);
    };
    PremisesRequestBuilder.prototype.delete = function (idOrEntity, isActiveEntity) {
        return new core_1.DeleteRequestBuilderV4(Premises_1.Premises, idOrEntity instanceof Premises_1.Premises ? idOrEntity : {
            ID: idOrEntity,
            IsActiveEntity: isActiveEntity
        });
    };
    return PremisesRequestBuilder;
}(core_1.RequestBuilder));
exports.PremisesRequestBuilder = PremisesRequestBuilder;
//# sourceMappingURL=PremisesRequestBuilder.js.map