import { PremisesRequestBuilder } from './PremisesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Premises" of service "AssetsService".
 */
export declare class Premises extends EntityV4 implements PremisesType {
    /**
     * Technical entity name for Premises.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Id.
     */
    id: string;
    /**
     * Created At.
     * @nullable
     */
    createdAt?: Moment;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Modified At.
     * @nullable
     */
    modifiedAt?: Moment;
    /**
     * Modified By.
     * Maximum length: 255.
     * @nullable
     */
    modifiedBy?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Floor.
     * @nullable
     */
    floor?: string;
    /**
     * Room Number.
     * @nullable
     */
    roomNumber?: string;
    /**
     * Room Extension.
     * @nullable
     */
    roomExtension?: string;
    /**
     * Location Extension.
     * @nullable
     */
    locationExtension?: string;
    /**
     * Ewid.
     * @nullable
     */
    ewid?: string;
    /**
     * Building Id.
     * @nullable
     */
    buildingId?: string;
    /**
     * Is Active Entity.
     */
    isActiveEntity: boolean;
    /**
     * Has Active Entity.
     */
    hasActiveEntity: boolean;
    /**
     * Has Draft Entity.
     */
    hasDraftEntity: boolean;
    /**
     * One-to-one navigation property to the [[Buildings]] entity.
     */
    building?: Buildings | null;
    /**
     * One-to-many navigation property to the [[Installations]] entity.
     */
    installations: Installations[];
    /**
     * One-to-one navigation property to the [[Premises]] entity.
     */
    siblingEntity?: Premises | null;
    /**
     * Returns an entity builder to construct instances of `Premises`.
     * @returns A builder that constructs instances of entity type `Premises`.
     */
    static builder(): EntityBuilderType<Premises, PremisesType>;
    /**
     * Returns a request builder to construct requests for operations on the `Premises` entity type.
     * @returns A `Premises` request builder.
     */
    static requestBuilder(): PremisesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Premises`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Premises`.
     */
    static customField(fieldName: string): CustomFieldV4<Premises>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Buildings, BuildingsType } from './Buildings';
import { Installations, InstallationsType } from './Installations';
export interface PremisesType {
    id: string;
    createdAt?: Moment | null;
    createdBy?: string | null;
    modifiedAt?: Moment | null;
    modifiedBy?: string | null;
    description?: string | null;
    floor?: string | null;
    roomNumber?: string | null;
    roomExtension?: string | null;
    locationExtension?: string | null;
    ewid?: string | null;
    buildingId?: string | null;
    isActiveEntity: boolean;
    hasActiveEntity: boolean;
    hasDraftEntity: boolean;
    building?: BuildingsType | null;
    installations: InstallationsType[];
    siblingEntity?: PremisesType | null;
}
export declare namespace Premises {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<Premises>;
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_AT: DateField<Premises>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Premises>;
    /**
     * Static representation of the [[modifiedAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_AT: DateField<Premises>;
    /**
     * Static representation of the [[modifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_BY: StringField<Premises>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Premises>;
    /**
     * Static representation of the [[floor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLOOR: StringField<Premises>;
    /**
     * Static representation of the [[roomNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROOM_NUMBER: StringField<Premises>;
    /**
     * Static representation of the [[roomExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROOM_EXTENSION: StringField<Premises>;
    /**
     * Static representation of the [[locationExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_EXTENSION: StringField<Premises>;
    /**
     * Static representation of the [[ewid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EWID: StringField<Premises>;
    /**
     * Static representation of the [[buildingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING_ID: StringField<Premises>;
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE_ENTITY: BooleanField<Premises>;
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ACTIVE_ENTITY: BooleanField<Premises>;
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_DRAFT_ENTITY: BooleanField<Premises>;
    /**
     * Static representation of the one-to-one navigation property [[building]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING: OneToOneLink<Premises, Buildings>;
    /**
     * Static representation of the one-to-many navigation property [[installations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTALLATIONS: OneToManyLink<Premises, Installations>;
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIBLING_ENTITY: OneToOneLink<Premises, Premises>;
    /**
     * All fields of the Premises entity.
     */
    const _allFields: Array<StringField<Premises> | DateField<Premises> | BooleanField<Premises> | OneToOneLink<Premises, Buildings> | OneToManyLink<Premises, Installations> | OneToOneLink<Premises, Premises>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Premises>;
    /**
     * All key fields of the Premises entity.
     */
    const _keyFields: Array<Field<Premises>>;
    /**
     * Mapping of all key field names to the respective static field property Premises.
     */
    const _keys: {
        [keys: string]: Field<Premises>;
    };
}
//# sourceMappingURL=Premises.d.ts.map