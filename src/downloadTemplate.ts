/**
 * @file Downloads the template files from a github release (zip file) and extracts them to the project directory.
 */
import path from "node:path";
import fs from "fs-extra";
import { Unzip } from "node:zlib";

/**
 * Fetches JSON data from a URL.
 * @param url The URL to fetch the JSON data from.
 * @returns The JSON data fetched from the URL.
 */
async function fetchJson (url: string) {
    return await fetch(url).then((res) => res.json());
}

/**
 * Downloads the template files from a github release (zip file) using the github REST API
 * and extracts them to the project directory.
 * @param projectGitRepo The project git repository URL in the format `username/repo`.
 */
async function downloadTemplate (projectGitRepo: `${string}/${string}`) {
    // await fetch(`https://api.github.com/repos/${projectGitRepo}/releases/latest`)
    const response = await fetchJson(`https://api.github.com/repos/${projectGitRepo}/releases/latest`);
    const mainAsset = await fetchJson(response.assets[0].url);
    console.log(mainAsset);
}

// test
downloadTemplate("xShadowBlade/template-defaults");