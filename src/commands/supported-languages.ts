import { SlashCommandBuilder } from "@discordjs/builders";
import dedent from "dedent";
import {
	InteractionResponseType,
	type APIApplicationCommandInteraction,
} from "discord-api-types/v10";

import { reply } from "../reply.js";

export async function onSupportedLanguagesSlashCommand(
	interaction: APIApplicationCommandInteraction,
) {
	return reply(InteractionResponseType.ChannelMessageWithSource, {
		content: dedent`
    ### ✅ Full Support
    JavaScript, TypeScript, JSX, JSON, JSONC, CSS, GraphQL
    ### ⚠️ Partial Support
    [Astro, Vue, Svelte](<https://github.com/biomejs/biome/issues/1719>) (Embedded JS only)
    ### ⏳ Working on it!
    HTML, [YAML](<https://github.com/biomejs/biome/issues/2365>)\*, Markdown
    ### ❓ Not yet
    Astro, Vue, Svelte (Full language support)

    \*Community contribution

    For more info check <https://biomejs.dev/internals/language-support>
    `,
	});
}

export const slashCommandData = new SlashCommandBuilder()
	.setName("supported-languages")
	.setDescription("See the status of Biome's language support");
