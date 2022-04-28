import { FunctionImportRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
export declare function info(parameters: InfoParameters): FunctionImportRequestBuilderV4<InfoParameters, User>;
export declare const functionImports: {
    info: typeof info;
};
//# sourceMappingURL=function-imports.d.ts.map