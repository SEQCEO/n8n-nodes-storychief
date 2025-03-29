import { ICredentialType, INodeProperties } from "n8n-workflow";

export class StoryChiefApi implements ICredentialType {
    name = "storyChiefApi";
    displayName = "StoryChief API";
    properties: INodeProperties[] = [
        {
            displayName: "Access Token",
            name: "accessToken",
            type: "string",
            typeOptions: {
                password: true
            },
            default: "",
            required: true,
            description: "The access token for the StoryChief API"
        }
    ];
}
