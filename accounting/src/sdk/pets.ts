/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { petsCreatePets } from "../funcs/petsCreatePets.js";
import { petsListPets } from "../funcs/petsListPets.js";
import { petsShowPetById } from "../funcs/petsShowPetById.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Pets extends ClientSDK {
    /**
     * List all pets
     */
    async listPets(
        request: operations.ListPetsRequest,
        options?: RequestOptions
    ): Promise<operations.ListPetsResponse> {
        return unwrapAsync(petsListPets(this, request, options));
    }

    /**
     * Create a pet
     */
    async createPets(
        request: components.Pet,
        options?: RequestOptions
    ): Promise<components.ErrorT | undefined> {
        return unwrapAsync(petsCreatePets(this, request, options));
    }

    /**
     * Info for a specific pet
     */
    async showPetById(
        request: operations.ShowPetByIdRequest,
        options?: RequestOptions
    ): Promise<operations.ShowPetByIdResponse> {
        return unwrapAsync(petsShowPetById(this, request, options));
    }
}
