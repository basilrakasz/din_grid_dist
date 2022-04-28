/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PremisesRequestBuilder } from './PremisesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Premises" of service "AssetsService".
 */
export class Premises extends EntityV4 implements PremisesType {
  /**
   * Technical entity name for Premises.
   */
  static _entityName = 'Premises';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/service/assets/';
  /**
   * Id.
   */
  id!: string;
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
  isActiveEntity!: boolean;
  /**
   * Has Active Entity.
   */
  hasActiveEntity!: boolean;
  /**
   * Has Draft Entity.
   */
  hasDraftEntity!: boolean;
  /**
   * One-to-one navigation property to the [[Buildings]] entity.
   */
  building?: Buildings | null;
  /**
   * One-to-many navigation property to the [[Installations]] entity.
   */
  installations!: Installations[];
  /**
   * One-to-one navigation property to the [[Premises]] entity.
   */
  siblingEntity?: Premises | null;

  /**
   * Returns an entity builder to construct instances of `Premises`.
   * @returns A builder that constructs instances of entity type `Premises`.
   */
  static builder(): EntityBuilderType<Premises, PremisesType> {
    return EntityV4.entityBuilder(Premises);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Premises` entity type.
   * @returns A `Premises` request builder.
   */
  static requestBuilder(): PremisesRequestBuilder {
    return new PremisesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Premises`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Premises`.
   */
  static customField(fieldName: string): CustomFieldV4<Premises> {
    return EntityV4.customFieldSelector(fieldName, Premises);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Premises {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<Premises> = new StringField('ID', Premises, 'Edm.Guid');
  /**
   * Static representation of the [[createdAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_AT: DateField<Premises> = new DateField('createdAt', Premises, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Premises> = new StringField('createdBy', Premises, 'Edm.String');
  /**
   * Static representation of the [[modifiedAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_AT: DateField<Premises> = new DateField('modifiedAt', Premises, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[modifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_BY: StringField<Premises> = new StringField('modifiedBy', Premises, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Premises> = new StringField('description', Premises, 'Edm.String');
  /**
   * Static representation of the [[floor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLOOR: StringField<Premises> = new StringField('floor', Premises, 'Edm.String');
  /**
   * Static representation of the [[roomNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROOM_NUMBER: StringField<Premises> = new StringField('roomNumber', Premises, 'Edm.String');
  /**
   * Static representation of the [[roomExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROOM_EXTENSION: StringField<Premises> = new StringField('roomExtension', Premises, 'Edm.String');
  /**
   * Static representation of the [[locationExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_EXTENSION: StringField<Premises> = new StringField('locationExtension', Premises, 'Edm.String');
  /**
   * Static representation of the [[ewid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EWID: StringField<Premises> = new StringField('ewid', Premises, 'Edm.String');
  /**
   * Static representation of the [[buildingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING_ID: StringField<Premises> = new StringField('building_ID', Premises, 'Edm.Guid');
  /**
   * Static representation of the [[isActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE_ENTITY: BooleanField<Premises> = new BooleanField('IsActiveEntity', Premises, 'Edm.Boolean');
  /**
   * Static representation of the [[hasActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ACTIVE_ENTITY: BooleanField<Premises> = new BooleanField('HasActiveEntity', Premises, 'Edm.Boolean');
  /**
   * Static representation of the [[hasDraftEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_DRAFT_ENTITY: BooleanField<Premises> = new BooleanField('HasDraftEntity', Premises, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[building]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING: OneToOneLink<Premises, Buildings> = new OneToOneLink('building', Premises, Buildings);
  /**
   * Static representation of the one-to-many navigation property [[installations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLATIONS: OneToManyLink<Premises, Installations> = new OneToManyLink('installations', Premises, Installations);
  /**
   * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIBLING_ENTITY: OneToOneLink<Premises, Premises> = new OneToOneLink('SiblingEntity', Premises, Premises);
  /**
   * All fields of the Premises entity.
   */
  export const _allFields: Array<StringField<Premises> | DateField<Premises> | BooleanField<Premises> | OneToOneLink<Premises, Buildings> | OneToManyLink<Premises, Installations> | OneToOneLink<Premises, Premises>> = [
    Premises.ID,
    Premises.CREATED_AT,
    Premises.CREATED_BY,
    Premises.MODIFIED_AT,
    Premises.MODIFIED_BY,
    Premises.DESCRIPTION,
    Premises.FLOOR,
    Premises.ROOM_NUMBER,
    Premises.ROOM_EXTENSION,
    Premises.LOCATION_EXTENSION,
    Premises.EWID,
    Premises.BUILDING_ID,
    Premises.IS_ACTIVE_ENTITY,
    Premises.HAS_ACTIVE_ENTITY,
    Premises.HAS_DRAFT_ENTITY,
    Premises.BUILDING,
    Premises.INSTALLATIONS,
    Premises.SIBLING_ENTITY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Premises> = new AllFields('*', Premises);
  /**
   * All key fields of the Premises entity.
   */
  export const _keyFields: Array<Field<Premises>> = [Premises.ID, Premises.IS_ACTIVE_ENTITY];
  /**
   * Mapping of all key field names to the respective static field property Premises.
   */
  export const _keys: { [keys: string]: Field<Premises> } = Premises._keyFields.reduce((acc: { [keys: string]: Field<Premises> }, field: Field<Premises>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
