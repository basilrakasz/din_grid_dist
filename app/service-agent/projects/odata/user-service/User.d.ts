import { UserScopes, UserScopesField } from './UserScopes';
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare function createUser(json: any): User;
/**
 * UserField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, User> {
    /**
     * Representation of the [[User.user]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    user: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[User.locale]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locale: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[User.tenant]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tenant: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[User.scopes]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    scopes: UserScopesField<EntityT>;
    /**
     * Representation of the [[User.firstName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[User.lastName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[User.email]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    email: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UserField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace User {
    /**
     * Metadata information on all properties of the `User` complex type.
     */
    const _propertyMetadata: PropertyMetadata<User>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | UserScopes;
    }): User;
}
//# sourceMappingURL=User.d.ts.map