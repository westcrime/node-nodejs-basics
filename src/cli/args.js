const parseArgs = () => {
    const args = process.argv.slice(2);
    const outputArray = [];
    for (let i = 0; i < args.length; i += 2) {
        const element1 = args[i];
        const element2 = args[i + 1];
        outputArray.push(`${element1} is ${element2}`);
    }
    console.log(outputArray.join(', '));
};

parseArgs();