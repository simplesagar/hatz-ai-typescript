/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appModelsList } from "../funcs/appModelsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AppModels extends ClientSDK {
  /**
   * Get Models
   *
   * @remarks
   * Get the list of available ai models.
   */
  async list(
    options?: RequestOptions,
  ): Promise<components.ModelsResponse> {
    return unwrapAsync(appModelsList(
      this,
      options,
    ));
  }
}
