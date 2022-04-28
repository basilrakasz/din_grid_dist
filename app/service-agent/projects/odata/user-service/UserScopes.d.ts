import { ComplexTypeBooleanPropertyField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare function createUserScopes(json: any): UserScopes;
/**
 * UserScopesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UserScopesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserScopes> {
    /**
     * Representation of the [[UserScopes.identified]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    identified: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[UserScopes.authenticated]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    authenticated: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[UserScopes.assetAdmin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    assetAdmin: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[UserScopes.assetViewer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    assetViewer: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[UserScopes.agentWorker]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agentWorker: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[UserScopes.agentAdmin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agentAdmin: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Creates an instance of UserScopesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UserScopes {
    /**
     * Metadata information on all properties of the `UserScopes` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UserScopes>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UserScopes;
}
//# sourceMappingURL=UserScopes.d.ts.map