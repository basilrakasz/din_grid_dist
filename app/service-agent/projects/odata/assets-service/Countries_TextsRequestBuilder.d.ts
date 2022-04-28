import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Countries_Texts } from './Countries_Texts';
/**
 * Request builder class for operations supported on the [[Countries_Texts]] entity.
 */
export declare class Countries_TextsRequestBuilder extends RequestBuilder<Countries_Texts> {
    /**
     * Returns a request builder for retrieving one `Countries_Texts` entity based on its keys.
     * @param locale Key property. See [[Countries_Texts.locale]].
     * @param code Key property. See [[Countries_Texts.code]].
     * @returns A request builder for creating requests to retrieve one `Countries_Texts` entity based on its keys.
     */
    getByKey(locale: string, code: string): GetByKeyRequestBuilderV4<Countries_Texts>;
    /**
     * Returns a request builder for querying all `Countries_Texts` entities.
     * @returns A request builder for creating requests to retrieve all `Countries_Texts` entities.
     */
    getAll(): GetAllRequestBuilderV4<Countries_Texts>;
    /**
     * Returns a request builder for creating a `Countries_Texts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Countries_Texts`.
     */
    create(entity: Countries_Texts): CreateRequestBuilderV4<Countries_Texts>;
    /**
     * Returns a request builder for updating an entity of type `Countries_Texts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Countries_Texts`.
     */
    update(entity: Countries_Texts): UpdateRequestBuilderV4<Countries_Texts>;
    /**
     * Returns a request builder for deleting an entity of type `Countries_Texts`.
     * @param locale Key property. See [[Countries_Texts.locale]].
     * @param code Key property. See [[Countries_Texts.code]].
     * @returns A request builder for creating requests that delete an entity of type `Countries_Texts`.
     */
    delete(locale: string, code: string): DeleteRequestBuilderV4<Countries_Texts>;
    /**
     * Returns a request builder for deleting an entity of type `Countries_Texts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Countries_Texts` by taking the entity as a parameter.
     */
    delete(entity: Countries_Texts): DeleteRequestBuilderV4<Countries_Texts>;
}
//# sourceMappingURL=Countries_TextsRequestBuilder.d.ts.map