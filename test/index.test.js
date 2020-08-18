import path from 'path';
import test from 'ava';
import sao from 'sao';
import saoConfig from '../saofile';

const generator = path.join(__dirname, '..');

const getPkgFields = (pkg) => {
  pkg = JSON.parse(pkg);
  delete pkg.name;
  delete pkg.author;
  delete pkg.version;
  delete pkg.description;
  return pkg;
};

const verifyFileList = async (t, answers = {}) => {
  const stream = await sao.mock({ generator }, answers);
  t.snapshot(stream.fileList, 'Generated files');
};

const verifyPkg = async (t, answers = {}) => {
  const stream = await sao.mock({ generator }, answers);
  const pkg = await stream.readFile('package.json');
  t.snapshot(getPkgFields(pkg), 'package.json');
};

test('verify default answers', async (t) => {
  await verifyFileList(t);
  await verifyPkg(t);
});

for (const prompt of saoConfig.prompts) {
  if (Array.isArray(prompt.choices)) {
    for (const choice of prompt.choices) {
      test(`verify ${prompt.name}: ${choice.name}`, async (t) => {
        const answer = {
          [prompt.name]:
            prompt.type === 'checkbox' ? [choice.value] : choice.value,
        };
        await verifyFileList(t, answer);
        await verifyPkg(t, answer);
      });
    }
  }
}
