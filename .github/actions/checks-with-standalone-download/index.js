import * as core from '@actions/core'
import * as github from '@actions/github'
import {execSync} from 'child_process'

const repoName = github.context.repo.repo
const repoOwner = github.context.repo.owner
const token = core.getInput('token')
const checkName = core.getInput('checkName')

console.log(`Repo Name: ${repoName}`)
console.log(`Repo Owner: ${repoOwner}`)
var result = 'Unable to run OSSF checks'
if(checkName) {
    result = execSync(` export GITHUB_AUTH_TOKEN=${token} ; ./scorecard-linux-amd64 --repo=github.com/${repoOwner}/${repoName} --checks=${checkName}`).toString();
} else {
    result = execSync(` export GITHUB_AUTH_TOKEN=${token} ; ./scorecard-linux-amd64 --repo=github.com/${repoOwner}/${repoName}`).toString();
}
console.log(result);
