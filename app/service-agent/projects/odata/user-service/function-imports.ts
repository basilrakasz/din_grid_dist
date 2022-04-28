/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForComplexTypeV4, deserializeComplexTypeV4, FunctionImportRequestBuilderV4, FunctionImportParameter } from '@sap-cloud-sdk/core';
import { User } from './User';

/**
 * Type of the parameters to be passed to [[info]].
 */
export interface InfoParameters {
}

/**
 * Info. 
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function info(parameters: InfoParameters): FunctionImportRequestBuilderV4<InfoParameters, User> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/user/', 'info', (data) => transformReturnValueForComplexTypeV4(data, (data) => deserializeComplexTypeV4(data, User)), params);
}

export const functionImports = {
  info
};
