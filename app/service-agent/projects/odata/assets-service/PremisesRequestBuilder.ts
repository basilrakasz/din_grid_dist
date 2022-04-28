/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Premises } from './Premises';

/**
 * Request builder class for operations supported on the [[Premises]] entity.
 */
export class PremisesRequestBuilder extends RequestBuilder<Premises> {
  /**
   * Returns a request builder for retrieving one `Premises` entity based on its keys.
   * @param id Key property. See [[Premises.id]].
   * @param isActiveEntity Key property. See [[Premises.isActiveEntity]].
   * @returns A request builder for creating requests to retrieve one `Premises` entity based on its keys.
   */
  getByKey(id: string, isActiveEntity: boolean): GetByKeyRequestBuilderV4<Premises> {
    return new GetByKeyRequestBuilderV4(Premises, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for querying all `Premises` entities.
   * @returns A request builder for creating requests to retrieve all `Premises` entities.
   */
  getAll(): GetAllRequestBuilderV4<Premises> {
    return new GetAllRequestBuilderV4(Premises);
  }

  /**
   * Returns a request builder for creating a `Premises` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Premises`.
   */
  create(entity: Premises): CreateRequestBuilderV4<Premises> {
    return new CreateRequestBuilderV4(Premises, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Premises`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Premises`.
   */
  update(entity: Premises): UpdateRequestBuilderV4<Premises> {
    return new UpdateRequestBuilderV4(Premises, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Premises`.
   * @param id Key property. See [[Premises.id]].
   * @param isActiveEntity Key property. See [[Premises.isActiveEntity]].
   * @returns A request builder for creating requests that delete an entity of type `Premises`.
   */
  delete(id: string, isActiveEntity: boolean): DeleteRequestBuilderV4<Premises>;
  /**
   * Returns a request builder for deleting an entity of type `Premises`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Premises` by taking the entity as a parameter.
   */
  delete(entity: Premises): DeleteRequestBuilderV4<Premises>;
  delete(idOrEntity: any, isActiveEntity?: boolean): DeleteRequestBuilderV4<Premises> {
    return new DeleteRequestBuilderV4(Premises, idOrEntity instanceof Premises ? idOrEntity : {
      ID: idOrEntity!,
      IsActiveEntity: isActiveEntity!
    });
  }
}
