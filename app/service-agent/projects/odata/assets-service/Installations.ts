/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InstallationsRequestBuilder } from './InstallationsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Installations" of service "AssetsService".
 */
export class Installations extends EntityV4 implements InstallationsType {
  /**
   * Technical entity name for Installations.
   */
  static _entityName = 'Installations';
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
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Type.
   * @nullable
   */
  type?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Division.
   * @nullable
   */
  division?: string;
  /**
   * Building Id.
   * @nullable
   */
  buildingId?: string;
  /**
   * Premise Id.
   * @nullable
   */
  premiseId?: string;
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
   * One-to-one navigation property to the [[Premises]] entity.
   */
  premise?: Premises | null;
  /**
   * One-to-one navigation property to the [[Installations]] entity.
   */
  siblingEntity?: Installations | null;

  /**
   * Returns an entity builder to construct instances of `Installations`.
   * @returns A builder that constructs instances of entity type `Installations`.
   */
  static builder(): EntityBuilderType<Installations, InstallationsType> {
    return EntityV4.entityBuilder(Installations);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Installations` entity type.
   * @returns A `Installations` request builder.
   */
  static requestBuilder(): InstallationsRequestBuilder {
    return new InstallationsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Installations`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Installations`.
   */
  static customField(fieldName: string): CustomFieldV4<Installations> {
    return EntityV4.customFieldSelector(fieldName, Installations);
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
import { Premises, PremisesType } from './Premises';

export interface InstallationsType {
  id: string;
  createdAt?: Moment | null;
  createdBy?: string | null;
  modifiedAt?: Moment | null;
  modifiedBy?: string | null;
  validFrom?: Moment | null;
  validTo?: Moment | null;
  type?: string | null;
  description?: string | null;
  division?: string | null;
  buildingId?: string | null;
  premiseId?: string | null;
  isActiveEntity: boolean;
  hasActiveEntity: boolean;
  hasDraftEntity: boolean;
  building?: BuildingsType | null;
  premise?: PremisesType | null;
  siblingEntity?: InstallationsType | null;
}

export namespace Installations {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<Installations> = new StringField('ID', Installations, 'Edm.Guid');
  /**
   * Static representation of the [[createdAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_AT: DateField<Installations> = new DateField('createdAt', Installations, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Installations> = new StringField('createdBy', Installations, 'Edm.String');
  /**
   * Static representation of the [[modifiedAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_AT: DateField<Installations> = new DateField('modifiedAt', Installations, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[modifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_BY: StringField<Installations> = new StringField('modifiedBy', Installations, 'Edm.String');
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<Installations> = new DateField('validFrom', Installations, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<Installations> = new DateField('validTo', Installations, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<Installations> = new StringField('type', Installations, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Installations> = new StringField('description', Installations, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<Installations> = new StringField('division', Installations, 'Edm.String');
  /**
   * Static representation of the [[buildingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING_ID: StringField<Installations> = new StringField('building_ID', Installations, 'Edm.Guid');
  /**
   * Static representation of the [[premiseId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREMISE_ID: StringField<Installations> = new StringField('premise_ID', Installations, 'Edm.Guid');
  /**
   * Static representation of the [[isActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE_ENTITY: BooleanField<Installations> = new BooleanField('IsActiveEntity', Installations, 'Edm.Boolean');
  /**
   * Static representation of the [[hasActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ACTIVE_ENTITY: BooleanField<Installations> = new BooleanField('HasActiveEntity', Installations, 'Edm.Boolean');
  /**
   * Static representation of the [[hasDraftEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_DRAFT_ENTITY: BooleanField<Installations> = new BooleanField('HasDraftEntity', Installations, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[building]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING: OneToOneLink<Installations, Buildings> = new OneToOneLink('building', Installations, Buildings);
  /**
   * Static representation of the one-to-one navigation property [[premise]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREMISE: OneToOneLink<Installations, Premises> = new OneToOneLink('premise', Installations, Premises);
  /**
   * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIBLING_ENTITY: OneToOneLink<Installations, Installations> = new OneToOneLink('SiblingEntity', Installations, Installations);
  /**
   * All fields of the Installations entity.
   */
  export const _allFields: Array<StringField<Installations> | DateField<Installations> | BooleanField<Installations> | OneToOneLink<Installations, Buildings> | OneToOneLink<Installations, Premises> | OneToOneLink<Installations, Installations>> = [
    Installations.ID,
    Installations.CREATED_AT,
    Installations.CREATED_BY,
    Installations.MODIFIED_AT,
    Installations.MODIFIED_BY,
    Installations.VALID_FROM,
    Installations.VALID_TO,
    Installations.TYPE,
    Installations.DESCRIPTION,
    Installations.DIVISION,
    Installations.BUILDING_ID,
    Installations.PREMISE_ID,
    Installations.IS_ACTIVE_ENTITY,
    Installations.HAS_ACTIVE_ENTITY,
    Installations.HAS_DRAFT_ENTITY,
    Installations.BUILDING,
    Installations.PREMISE,
    Installations.SIBLING_ENTITY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Installations> = new AllFields('*', Installations);
  /**
   * All key fields of the Installations entity.
   */
  export const _keyFields: Array<Field<Installations>> = [Installations.ID, Installations.IS_ACTIVE_ENTITY];
  /**
   * Mapping of all key field names to the respective static field property Installations.
   */
  export const _keys: { [keys: string]: Field<Installations> } = Installations._keyFields.reduce((acc: { [keys: string]: Field<Installations> }, field: Field<Installations>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
