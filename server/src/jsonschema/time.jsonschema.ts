import { Schema } from "jsonschema";

const timeResponseSchema: Schema = {
    properties: {
        epoch: {
            description:
                "The current server time, in epoch seconds, at time of processing the request.",
            type: "number",
        },
    },
    required: ["epoch"],
    type: "object",
};

export default timeResponseSchema;
