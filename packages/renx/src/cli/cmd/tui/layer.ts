import { Layer } from "effect"
import { TuiConfig } from "./config/tui"
import { Npm } from "@renx/core/npm"
import { Observability } from "@renx/core/effect/observability"

export const CliLayer = Observability.layer.pipe(Layer.merge(TuiConfig.layer), Layer.provide(Npm.defaultLayer))
