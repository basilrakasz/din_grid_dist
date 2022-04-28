/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserScopes, UserScopesField } from './UserScopes';
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * User
 */
export interface User {
  /**
   * User.
   * @nullable
   */
  user?: string;
  /**
   * Locale.
   * @nullable
   */
  locale?: string;
  /**
   * Tenant.
   * @nullable
   */
  tenant?: string;
  /**
   * Scopes.
   * @nullable
   */
  scopes?: UserScopes;
  /**
   * First Name.
   * @nullable
   */
  firstName?: string;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: string;
  /**
   * Email.
   * @nullable
   */
  email?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[User.build]] instead.
 */
export function createUser(json: any): User {
  return User.build(json);
}

/**
 * UserField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, User> {
  /**
   * Representation of the [[User.user]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('user', this, 'Edm.String');
  /**
   * Representation of the [[User.locale]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locale: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('locale', this, 'Edm.String');
  /**
   * Representation of the [[User.tenant]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tenant: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('tenant', this, 'Edm.String');
  /**
   * Representation of the [[User.scopes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  scopes: UserScopesField<EntityT> = new UserScopesField('scopes', this);
  /**
   * Representation of the [[User.firstName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('firstName', this, 'Edm.String');
  /**
   * Representation of the [[User.lastName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('lastName', this, 'Edm.String');
  /**
   * Representation of the [[User.email]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  email: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('email', this, 'Edm.String');

  /**
   * Creates an instance of UserField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, User);
  }
}

export namespace User {
  /**
   * Metadata information on all properties of the `User` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<User>[] = [{
    originalName: 'user',
    name: 'user',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'locale',
    name: 'locale',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'tenant',
    name: 'tenant',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'scopes',
    name: 'scopes',
    type: UserScopes,
    isCollection: false
  }, {
    originalName: 'firstName',
    name: 'firstName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'lastName',
    name: 'lastName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'email',
    name: 'email',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | UserScopes }): User {
    return deserializeComplexTypeV4(json, User);
  }
}
