const parseEnv = () => {
    const envs = process.env;
    const regex = /RSS_[a-zA-Z]+$/;
    const outputArray = [];
    for (const key in envs) {
        if (regex.test(key)) {
            outputArray.push(`${key}=${envs[key]}`);
        }
    }
    console.log(outputArray.join('; '));
};

parseEnv();