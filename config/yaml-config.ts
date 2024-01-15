import { readFile } from 'fs/promises';
import * as yaml from 'js-yaml';
import { join } from 'path';
const yamlConfig = async () => {
  const configFilePath = join(process.cwd(), 'config', 'development.yaml');
  const config = await readFile(configFilePath, { encoding: 'utf8' });
  return yaml.load(config);
};
export default yamlConfig;
