import { CreateRequestBuilderV4, DeleteRequestBuilderV4, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, ODataBatchChangeSetV4, ODataBatchRequestBuilderV4, UpdateRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Buildings, Premises, Installations, Countries, Countries_Texts } from './index';
/**
 * Batch builder for operations supported on the Assets Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch(...requests: Array<ReadAssetsServiceRequestBuilder | ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>>): ODataBatchRequestBuilderV4;
export declare function batch(requests: Array<ReadAssetsServiceRequestBuilder | ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>>): ODataBatchRequestBuilderV4;
/**
 * Change set constructor consists of write operations supported on the Assets Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset(...requests: Array<WriteAssetsServiceRequestBuilder>): ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>;
export declare function changeset(requests: Array<WriteAssetsServiceRequestBuilder>): ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>;
export declare const defaultAssetsServicePath = "VALUE_IS_UNDEFINED";
export declare type ReadAssetsServiceRequestBuilder = GetAllRequestBuilderV4<Buildings> | GetAllRequestBuilderV4<Premises> | GetAllRequestBuilderV4<Installations> | GetAllRequestBuilderV4<Countries> | GetAllRequestBuilderV4<Countries_Texts> | GetByKeyRequestBuilderV4<Buildings> | GetByKeyRequestBuilderV4<Premises> | GetByKeyRequestBuilderV4<Installations> | GetByKeyRequestBuilderV4<Countries> | GetByKeyRequestBuilderV4<Countries_Texts>;
export declare type WriteAssetsServiceRequestBuilder = CreateRequestBuilderV4<Buildings> | UpdateRequestBuilderV4<Buildings> | DeleteRequestBuilderV4<Buildings> | CreateRequestBuilderV4<Premises> | UpdateRequestBuilderV4<Premises> | DeleteRequestBuilderV4<Premises> | CreateRequestBuilderV4<Installations> | UpdateRequestBuilderV4<Installations> | DeleteRequestBuilderV4<Installations> | CreateRequestBuilderV4<Countries> | UpdateRequestBuilderV4<Countries> | DeleteRequestBuilderV4<Countries> | CreateRequestBuilderV4<Countries_Texts> | UpdateRequestBuilderV4<Countries_Texts> | DeleteRequestBuilderV4<Countries_Texts>;
//# sourceMappingURL=BatchRequest.d.ts.map