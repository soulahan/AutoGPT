/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * AutoGPT Agent Server
 * This server is used to execute agents that are created by the AutoGPT system.
 * OpenAPI spec version: 0.1
 */
import type { WebhookConfig } from "./webhookConfig";

export interface Webhook {
  id?: string;
  user_id: string;
  /** Provider name for integrations. Can be any string value, including custom provider names. */
  provider: string;
  credentials_id: string;
  webhook_type: string;
  resource: string;
  events: string[];
  config?: WebhookConfig;
  secret: string;
  provider_webhook_id: string;
  readonly url: string;
}
