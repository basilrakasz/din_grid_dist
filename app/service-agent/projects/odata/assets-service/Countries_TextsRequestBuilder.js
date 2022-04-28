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
exports.Countries_TextsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Countries_Texts_1 = require("./Countries_Texts");
/**
 * Request builder class for operations supported on the [[Countries_Texts]] entity.
 */
var Countries_TextsRequestBuilder = /** @class */ (function (_super) {
    __extends(Countries_TextsRequestBuilder, _super);
    function Countries_TextsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Countries_Texts` entity based on its keys.
     * @param locale Key property. See [[Countries_Texts.locale]].
     * @param code Key property. See [[Countries_Texts.code]].
     * @returns A request builder for creating requests to retrieve one `Countries_Texts` entity based on its keys.
     */
    Countries_TextsRequestBuilder.prototype.getByKey = function (locale, code) {
        return new core_1.GetByKeyRequestBuilderV4(Countries_Texts_1.Countries_Texts, {
            locale: locale,
            code: code
        });
    };
    /**
     * Returns a request builder for querying all `Countries_Texts` entities.
     * @returns A request builder for creating requests to retrieve all `Countries_Texts` entities.
     */
    Countries_TextsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Countries_Texts_1.Countries_Texts);
    };
    /**
     * Returns a request builder for creating a `Countries_Texts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Countries_Texts`.
     */
    Countries_TextsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Countries_Texts_1.Countries_Texts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Countries_Texts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Countries_Texts`.
     */
    Countries_TextsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Countries_Texts_1.Countries_Texts, entity);
    };
    Countries_TextsRequestBuilder.prototype.delete = function (localeOrEntity, code) {
        return new core_1.DeleteRequestBuilderV4(Countries_Texts_1.Countries_Texts, localeOrEntity instanceof Countries_Texts_1.Countries_Texts ? localeOrEntity : {
            locale: localeOrEntity,
            code: code
        });
    };
    return Countries_TextsRequestBuilder;
}(core_1.RequestBuilder));
exports.Countries_TextsRequestBuilder = Countries_TextsRequestBuilder;
//# sourceMappingURL=Countries_TextsRequestBuilder.js.map