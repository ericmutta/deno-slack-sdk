/** This file was autogenerated. Follow the steps in src/schema/slack/functions/_scripts/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";

export default DefineFunction({
  callback_id: "slack#/functions/reply_in_thread",
  source_file: "",
  title: "Reply to a message in thread",
  input_parameters: {
    properties: {
      message_context: {
        type: SlackTypes.message_context,
        description: "Select a message to reply to",
        title: "Select a message to reply to",
      },
      message: {
        type: SlackTypes.rich_text,
        description: "Add a reply",
        title: "Add a reply",
      },
      reply_broadcast: {
        type: SchemaTypes.boolean,
        description: "Also send to conversation",
        title: "Also send to conversation",
      },
      metadata: {
        type: SchemaTypes.object,
        description:
          "Metadata you post to Slack is accessible to any app or user who is a member of that workspace",
        title: "Message metadata",
        properties: {
          event_type: { type: SchemaTypes.string },
          event_payload: { type: SchemaTypes.object },
        },
        additionalProperties: true,
        required: ["event_type", "event_payload"],
      },
      interactive_blocks: {
        type: SlackTypes.blocks,
        description: "Button(s) to send with the message",
        title: "Button(s) to send with the message",
      },
    },
    required: ["message_context", "message"],
  },
  output_parameters: {
    properties: {
      message_context: {
        type: SlackTypes.message_context,
        description: "Reference to the message sent",
        title: "Reference to the message sent",
      },
      message_link: {
        type: SchemaTypes.string,
        description: "Message link",
        title: "Message link",
      },
      timestamp_started: {
        type: SlackTypes.timestamp,
        description: "Time when step started",
        title: "Time when step started",
      },
      timestamp_completed: {
        type: SlackTypes.timestamp,
        description: "Time when step ended",
        title: "Time when step ended",
      },
    },
    required: [
      "message_context",
      "message_link",
      "timestamp_started",
      "timestamp_completed",
    ],
  },
});
