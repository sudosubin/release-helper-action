import * as core from '@actions/core';
import * as exec from '@actions/exec';
import { CommitOptions, TargetBranchOptions } from './types';

const checkoutReleaseBranch = async ({ targetBranch }: TargetBranchOptions) => {
  try {
    await exec.exec(`git checkout --orphan ${targetBranch}`);
  } catch (error) {
    await exec.exec(`git checkout ${targetBranch}`);
  }
};

const addReleaseFiles = async () => {
  const files = ['action.yml', 'dist/index.js', 'README.md'];
  await exec.exec(`git reset`);
  await exec.exec(`git add -f`, files);
};

export const createCommit = async ({ version }: CommitOptions) => {
  const targetBranch = core.getInput('target-branch');

  core.debug('Checkout to target branch');
  await checkoutReleaseBranch({ targetBranch });

  core.debug('Add files');
  await addReleaseFiles();

  core.debug('Commit');
  await exec.exec(`git commit`, [`-m "v${version}" --no-verify`]);

  core.debug('Push');
  await exec.exec(`git push origin ${targetBranch}`);
};
