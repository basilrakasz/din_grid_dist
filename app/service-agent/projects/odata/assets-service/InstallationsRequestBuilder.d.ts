import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Installations } from './Installations';
/**
 * Request builder class for operations supported on the [[Installations]] entity.
 */
export declare class InstallationsRequestBuilder extends RequestBuilder<Installations> {
    /**
     * Returns a request builder for retrieving one `Installations` entity based on its keys.
     * @param id Key property. See [[Installations.id]].
     * @param isActiveEntity Key property. See [[Installations.isActiveEntity]].
     * @returns A request builder for creating requests to retrieve one `Installations` entity based on its keys.
     */
    getByKey(id: string, isActiveEntity: boolean): GetByKeyRequestBuilderV4<Installations>;
    /**
     * Returns a request builder for querying all `Installations` entities.
     * @returns A request builder for creating requests to retrieve all `Installations` entities.
     */
    getAll(): GetAllRequestBuilderV4<Installations>;
    /**
     * Returns a request builder for creating a `Installations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Installations`.
     */
    create(entity: Installations): CreateRequestBuilderV4<Installations>;
    /**
     * Returns a request builder for updating an entity of type `Installations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Installations`.
     */
    update(entity: Installations): UpdateRequestBuilderV4<Installations>;
    /**
     * Returns a request builder for deleting an entity of type `Installations`.
     * @param id Key property. See [[Installations.id]].
     * @param isActiveEntity Key property. See [[Installations.isActiveEntity]].
     * @returns A request builder for creating requests that delete an entity of type `Installations`.
     */
    delete(id: string, isActiveEntity: boolean): DeleteRequestBuilderV4<Installations>;
    /**
     * Returns a request builder for deleting an entity of type `Installations`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Installations` by taking the entity as a parameter.
     */
    delete(entity: Installations): DeleteRequestBuilderV4<Installations>;
}
//# sourceMappingURL=InstallationsRequestBuilder.d.ts.map