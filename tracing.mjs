import * as Sentry from "@sentry/node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { NodeSDK } from "@opentelemetry/sdk-node";

// Temps injects these values in production. They stay server-only by design.
const sentryEnabled = Boolean(process.env.SENTRY_DSN);
if (sentryEnabled) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    sendDefaultPii: false,
    // The OTel SDK below owns tracing; Sentry is limited to explicit errors.
    defaultIntegrations: false,
  });
}

let telemetrySdk;
if (process.env.OTEL_EXPORTER_OTLP_ENDPOINT) {
  process.env.OTEL_EXPORTER_OTLP_PROTOCOL ||= "http/protobuf";
  process.env.OTEL_TRACES_SAMPLER ||= "parentbased_traceidratio";
  process.env.OTEL_TRACES_SAMPLER_ARG ||= "0.1";

  telemetrySdk = new NodeSDK({
    traceExporter: new OTLPTraceExporter(),
  });
  telemetrySdk.start();
  console.log("OpenTelemetry tracing enabled");
}

export function captureException(error) {
  if (sentryEnabled) Sentry.captureException(error);
}

export async function shutdownTelemetry() {
  await Promise.all([
    telemetrySdk?.shutdown(),
    sentryEnabled ? Sentry.close(2_000) : undefined,
  ]);
}
