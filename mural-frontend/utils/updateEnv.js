const fs = require('fs');

// Define the path to your .env file
const envFilePath = '.env';

// Check if a value was provided as a command-line argument
const newValue = process.argv[2];

if (!newValue) {
    console.error('Please provide a value as an argument.');
    process.exit(1);
}

// Define the new line to add
const newLine = `REACT_APP_ENVIRONMENT=${newValue}`;

// Read the existing .env file
fs.readFile(envFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    // Split the contents into lines
    const lines = data.split('\n');

    // Remove any existing CUSTOM_VARIABLE line
    const updatedLines = lines.filter(
        (line) => !line.startsWith('REACT_APP_ENVIRONMENT=')
    );

    // Add the new line to the beginning of the array
    updatedLines.unshift(newLine);

    // Join the lines back together
    const updatedContent = updatedLines.join('\n');

    // Write the updated content back to the .env file
    fs.writeFile(envFilePath, updatedContent, 'utf8', (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log(
            `.env file updated with REACT_APP_ENVIRONMENT=${newValue}.`
        );
    });
});
