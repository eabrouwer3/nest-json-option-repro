import { Command, CommandRunner, Option } from 'nest-commander';

interface JsonCommandOptions {
	  config: Record<string, any>;
}

@Command({ name: 'json-command', description: 'Command that takes JSON Argument' })
export class JsonCommand extends CommandRunner {

  async run(_passedParams: string[], options: JsonCommandOptions): Promise<void> {
    console.log("Processed successfully!");
	console.log(options);
  }

  @Option({
    flags: '--json <json>',
    description: 'JSON Argument',
    required: true,
  })
  parseJsonOption(val: string): string {
	console.log(process.argv);
	return JSON.parse(val);
  }
}

