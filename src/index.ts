/**
 * @amlplugins/vercel-ai-replicate
 *
 * Thin namespaced re-export of the native @ai-sdk/replicate SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Vercel AI SDK Replicate provider — image-generation adapter for FLUX, SDXL, SD3 via Replicate models.
 */

import * as _sdk from "@ai-sdk/replicate";
export * from "@ai-sdk/replicate";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
