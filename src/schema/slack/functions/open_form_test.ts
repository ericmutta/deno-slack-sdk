/** This file was autogenerated. Follow the steps in src/schema/slack/functions/_scripts/README.md to rebuild **/
import {
  assertEquals,
  assertExists,
  assertNotStrictEquals,
} from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../workflows/mod.ts";
import { ManifestFunctionSchema } from "../../../manifest/manifest_schema.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";
import { InternalSlackTypes } from "../types/custom/mod.ts";
import OpenForm from "./open_form.ts";

Deno.test("OpenForm generates valid FunctionManifest", () => {
  assertEquals(OpenForm.definition.callback_id, "slack#/functions/open_form");
  const expected: ManifestFunctionSchema = {
    source_file: "",
    title: "Collect info in a form",
    description: "Uses a form to collect information",
    input_parameters: {
      properties: {
        title: {
          type: SchemaTypes.string,
          description: "Title of the form",
          title: "title",
        },
        description: {
          type: SchemaTypes.string,
          description: "Description of the form",
          title: "description",
        },
        submit_label: {
          type: SchemaTypes.string,
          description: "Submit Label of the form",
          title: "submit_label",
        },
        fields: {
          type: InternalSlackTypes.form_input_object,
          description: "Input fields to be shown on the form",
          title: "fields",
        },
        interactivity: {
          type: SlackTypes.interactivity,
          description:
            "Context about the interactive event that led to opening of the form",
          title: "interactivity",
        },
      },
      required: ["title", "fields", "interactivity"],
    },
    output_parameters: {
      properties: {
        fields: {
          type: SchemaTypes.object,
          description: "fields",
          title: "fields",
        },
        submit_user: {
          type: SlackTypes.user_id,
          description: "Person who submitted the form",
          title: "Person who submitted the form",
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
        "fields",
        "interactivity",
        "submit_user",
        "timestamp_started",
        "timestamp_completed",
      ],
    },
  };
  const actual = OpenForm.export();

  assertNotStrictEquals(actual, expected);
});

Deno.test("OpenForm can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_OpenForm_slack_function",
    title: "Test OpenForm",
    description: "This is a generated test to test OpenForm",
  });
  testWorkflow.addStep(OpenForm, {
    title: "test",
    fields: "test",
    interactivity: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "slack#/functions/open_form");
  assertEquals(actual.inputs, {
    title: "test",
    fields: "test",
    interactivity: "test",
  });
});

Deno.test("All outputs of Slack function OpenForm should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_OpenForm_slack_function",
    title: "Test OpenForm",
    description: "This is a generated test to test OpenForm",
  });
  const step = testWorkflow.addStep(OpenForm, {
    title: "test",
    fields: "test",
    interactivity: "test",
  });
  assertExists(step.outputs.fields);
  assertExists(step.outputs.interactivity);
  assertExists(step.outputs.submit_user);
  assertExists(step.outputs.timestamp_started);
  assertExists(step.outputs.timestamp_completed);
});
