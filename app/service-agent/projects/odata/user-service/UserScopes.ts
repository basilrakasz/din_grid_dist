/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserScopes
 */
export interface UserScopes {
  /**
   * Identified.
   * @nullable
   */
  identified?: boolean;
  /**
   * Authenticated.
   * @nullable
   */
  authenticated?: boolean;
  /**
   * Asset Admin.
   * @nullable
   */
  assetAdmin?: boolean;
  /**
   * Asset Viewer.
   * @nullable
   */
  assetViewer?: boolean;
  /**
   * Agent Worker.
   * @nullable
   */
  agentWorker?: boolean;
  /**
   * Agent Admin.
   * @nullable
   */
  agentAdmin?: boolean;
}

/**
 * @deprecated Since v1.6.0. Use [[UserScopes.build]] instead.
 */
export function createUserScopes(json: any): UserScopes {
  return UserScopes.build(json);
}

/**
 * UserScopesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserScopesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserScopes> {
  /**
   * Representation of the [[UserScopes.identified]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  identified: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('identified', this, 'Edm.Boolean');
  /**
   * Representation of the [[UserScopes.authenticated]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authenticated: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('authenticated', this, 'Edm.Boolean');
  /**
   * Representation of the [[UserScopes.assetAdmin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assetAdmin: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('AssetAdmin', this, 'Edm.Boolean');
  /**
   * Representation of the [[UserScopes.assetViewer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assetViewer: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('AssetViewer', this, 'Edm.Boolean');
  /**
   * Representation of the [[UserScopes.agentWorker]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agentWorker: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('AgentWorker', this, 'Edm.Boolean');
  /**
   * Representation of the [[UserScopes.agentAdmin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agentAdmin: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('AgentAdmin', this, 'Edm.Boolean');

  /**
   * Creates an instance of UserScopesField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserScopes);
  }
}

export namespace UserScopes {
  /**
   * Metadata information on all properties of the `UserScopes` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserScopes>[] = [{
    originalName: 'identified',
    name: 'identified',
    type: 'Edm.Boolean',
    isCollection: false
  }, {
    originalName: 'authenticated',
    name: 'authenticated',
    type: 'Edm.Boolean',
    isCollection: false
  }, {
    originalName: 'AssetAdmin',
    name: 'assetAdmin',
    type: 'Edm.Boolean',
    isCollection: false
  }, {
    originalName: 'AssetViewer',
    name: 'assetViewer',
    type: 'Edm.Boolean',
    isCollection: false
  }, {
    originalName: 'AgentWorker',
    name: 'agentWorker',
    type: 'Edm.Boolean',
    isCollection: false
  }, {
    originalName: 'AgentAdmin',
    name: 'agentAdmin',
    type: 'Edm.Boolean',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserScopes {
    return deserializeComplexTypeV4(json, UserScopes);
  }
}
