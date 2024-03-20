/** This file was autogenerated. Follow the steps in src/schema/slack/functions/_scripts/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import SchemaTypes from "../../schema_types.ts";
import { SlackPrimitiveTypes } from "../../slack/types/mod.ts";
import SlackTypes from "../schema_types.ts";

export default DefineFunction({
  callback_id: "slack#/functions/canvas_create",
  source_file: "",
  title: "Create a canvas",
  input_parameters: {
    properties: {
      title: {
        type: SchemaTypes.string,
        description: "Enter a canvas name",
        title: "Canvas name",
      },
      canvas_create_type: {
        type: SchemaTypes.string,
        description: "Type of creation",
        title: "Type of creation",
      },
      canvas_template_id: {
        type: SlackPrimitiveTypes.canvas_template_id,
        description: "Select an option",
        title: "Select a canvas template",
      },
      owner_id: {
        type: SlackTypes.user_id,
        description: "Person",
        title: "Canvas owner",
      },
      content: {
        type: SlackPrimitiveTypes.expanded_rich_text,
        description: "Add content to the canvas",
        title: "Add content",
      },
      placeholder_values: {
        type: SchemaTypes.object,
        description: "Variables",
        title: "Variables",
      },
    },
    required: ["title", "owner_id"],
  },
  output_parameters: {
    properties: {
      canvas_id: {
        type: SlackPrimitiveTypes.canvas_id,
        description: "Canvas link",
        title: "Canvas link",
      },
    },
    required: ["canvas_id"],
  },
});