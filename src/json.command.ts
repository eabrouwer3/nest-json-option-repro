import { Command, CommandRunner, Option } from 'nest-commander';

interface JsonCommandOptions {
	  config: Record<string, any>;
}

@Command({ name: 'json-command', description: 'Command that takes JSON Argument' })
export class JsonCommand extends CommandRunner {

	  async run(_passedParams: string[], options: JsonCommandOptions): Promise<void> {
		      console.log(_passedParams);
			      console.log(options);
				      console.log(process.argv);
					    }

						  @Option({
							      flags: '--json <json>',
								      description: 'JSON Argument',
									      required: true,
										    })
											  parseJsonOption(val: string): string {
												      return val;
													    }
}

