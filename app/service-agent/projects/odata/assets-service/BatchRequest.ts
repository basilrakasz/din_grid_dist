/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilderV4, DeleteRequestBuilderV4, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, ODataBatchChangeSetV4, ODataBatchRequestBuilderV4, UpdateRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { variadicArgumentToArray } from '@sap-cloud-sdk/util';
import { Buildings, Premises, Installations, Countries, Countries_Texts } from './index';

/**
 * Batch builder for operations supported on the Assets Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadAssetsServiceRequestBuilder | ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>>): ODataBatchRequestBuilderV4;
export function batch(requests: Array<ReadAssetsServiceRequestBuilder | ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>>): ODataBatchRequestBuilderV4;
export function batch(first: undefined | ReadAssetsServiceRequestBuilder | ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder> | Array<ReadAssetsServiceRequestBuilder | ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>>, ...rest: Array<ReadAssetsServiceRequestBuilder | ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>>): ODataBatchRequestBuilderV4 {
  return new ODataBatchRequestBuilderV4(defaultAssetsServicePath, variadicArgumentToArray(first, rest), map);
}

/**
 * Change set constructor consists of write operations supported on the Assets Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: Array<WriteAssetsServiceRequestBuilder>): ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>;
export function changeset(requests: Array<WriteAssetsServiceRequestBuilder>): ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder>;
export function changeset(first: undefined | WriteAssetsServiceRequestBuilder | Array<WriteAssetsServiceRequestBuilder>, ...rest: Array<WriteAssetsServiceRequestBuilder>): ODataBatchChangeSetV4<WriteAssetsServiceRequestBuilder> {
  return new ODataBatchChangeSetV4(variadicArgumentToArray(first, rest));
}

export const defaultAssetsServicePath = '/service/assets/';
const map = { 'Buildings': Buildings, 'Premises': Premises, 'Installations': Installations, 'Countries': Countries, 'Countries_texts': Countries_Texts };
export type ReadAssetsServiceRequestBuilder = GetAllRequestBuilderV4<Buildings> | GetAllRequestBuilderV4<Premises> | GetAllRequestBuilderV4<Installations> | GetAllRequestBuilderV4<Countries> | GetAllRequestBuilderV4<Countries_Texts> | GetByKeyRequestBuilderV4<Buildings> | GetByKeyRequestBuilderV4<Premises> | GetByKeyRequestBuilderV4<Installations> | GetByKeyRequestBuilderV4<Countries> | GetByKeyRequestBuilderV4<Countries_Texts>;
export type WriteAssetsServiceRequestBuilder = CreateRequestBuilderV4<Buildings> | UpdateRequestBuilderV4<Buildings> | DeleteRequestBuilderV4<Buildings> | CreateRequestBuilderV4<Premises> | UpdateRequestBuilderV4<Premises> | DeleteRequestBuilderV4<Premises> | CreateRequestBuilderV4<Installations> | UpdateRequestBuilderV4<Installations> | DeleteRequestBuilderV4<Installations> | CreateRequestBuilderV4<Countries> | UpdateRequestBuilderV4<Countries> | DeleteRequestBuilderV4<Countries> | CreateRequestBuilderV4<Countries_Texts> | UpdateRequestBuilderV4<Countries_Texts> | DeleteRequestBuilderV4<Countries_Texts>;
