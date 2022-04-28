/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Buildings } from './Buildings';

/**
 * Request builder class for operations supported on the [[Buildings]] entity.
 */
export class BuildingsRequestBuilder extends RequestBuilder<Buildings> {
  /**
   * Returns a request builder for retrieving one `Buildings` entity based on its keys.
   * @param id Key property. See [[Buildings.id]].
   * @param isActiveEntity Key property. See [[Buildings.isActiveEntity]].
   * @returns A request builder for creating requests to retrieve one `Buildings` entity based on its keys.
   */
  getByKey(id: string, isActiveEntity: boolean): GetByKeyRequestBuilderV4<Buildings> {
    return new GetByKeyRequestBuilderV4(Buildings, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for querying all `Buildings` entities.
   * @returns A request builder for creating requests to retrieve all `Buildings` entities.
   */
  getAll(): GetAllRequestBuilderV4<Buildings> {
    return new GetAllRequestBuilderV4(Buildings);
  }

  /**
   * Returns a request builder for creating a `Buildings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Buildings`.
   */
  create(entity: Buildings): CreateRequestBuilderV4<Buildings> {
    return new CreateRequestBuilderV4(Buildings, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Buildings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Buildings`.
   */
  update(entity: Buildings): UpdateRequestBuilderV4<Buildings> {
    return new UpdateRequestBuilderV4(Buildings, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Buildings`.
   * @param id Key property. See [[Buildings.id]].
   * @param isActiveEntity Key property. See [[Buildings.isActiveEntity]].
   * @returns A request builder for creating requests that delete an entity of type `Buildings`.
   */
  delete(id: string, isActiveEntity: boolean): DeleteRequestBuilderV4<Buildings>;
  /**
   * Returns a request builder for deleting an entity of type `Buildings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Buildings` by taking the entity as a parameter.
   */
  delete(entity: Buildings): DeleteRequestBuilderV4<Buildings>;
  delete(idOrEntity: any, isActiveEntity?: boolean): DeleteRequestBuilderV4<Buildings> {
    return new DeleteRequestBuilderV4(Buildings, idOrEntity instanceof Buildings ? idOrEntity : {
      ID: idOrEntity!,
      IsActiveEntity: isActiveEntity!
    });
  }
}
