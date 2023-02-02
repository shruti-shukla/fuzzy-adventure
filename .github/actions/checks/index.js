import * as core from '@actions/core'
import * as github from '@actions/github'
import {execSync} from 'child_process'

const repoName = github.context.repo.repo
const repoOwner = github.context.repo.owner
const token = core.getInput('token')
const checkName = core.getInput('checkName')
// execSync('curl -OL https://github.com/ossf/scorecard/archive/refs/tags/v4.10.2.zip')
// if(token) {
//     execSync(`export GITHUB_AUTH_TOKEN=${token}`)
// }
console.log(`Repo Name: ${repoName}`)
console.log(`Repo Owner: ${repoOwner}`)
var result = 'Unable to run OSSF checks'
if(checkName) {
    result = execSync(` export GITHUB_AUTH_TOKEN=${token} ; scorecard --repo=github.com/${repoOwner}/${repoName} --checks=Dangerous-Workflow,Binary-Artifacts,Branch-Protection,Code-Review,Dependency-Update-Tool,Vulnerabilities,Pinned-Dependencies,SAST,Security-Policy`).toString(); //${checkName}`).toString();
} else {
    result = execSync(` export GITHUB_AUTH_TOKEN=${token} ; scorecard --repo=github.com/${repoOwner}/${repoName}`).toString();
}
console.log(result);
