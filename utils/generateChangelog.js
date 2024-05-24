import readline from 'node:readline';

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    });

    let changes = [];
    let change;

    rl.on('line', (line) => {
        if (line.startsWith("commit ")) {
            // Commit hash marks beginning of first/next commit

            // "Close" previous change if any
            if (change !== undefined) {
                changes.push(change);
            }

            // Create new change object for following commit
            let sha = line.split("commit ")[1]
            change = {
                description: "",
                githubSlug: `GitHub@${sha.substring(0, 7)}`,
                githubLink: `https://github.com/ctrlblk/ctrlblk/commit/${sha}`

            };
        } else if (line.match(/^[\w]+:/gm)) {
            // Ignore Author: Date: etc.
            return;
        } else if (!change.description) {
            // First "ordinary" is the beginning of the commit message, we simply use the first line
            change.description = line.trim();
        }
    });

    rl.on('close', () => {
        // Add last change if any
        if (change !== undefined) {
            changes.push(change);
        }
        console.log(JSON.stringify(changes, undefined, 4));
        process.exit(0);
    });
}

// Usage: git log vX.Y.Z..  | node ../ctrlblk-web/utils/generateChangelog.js
await main()