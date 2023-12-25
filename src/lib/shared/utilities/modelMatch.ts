
export const modelMatch = (filename: string, member: string) => {
    const match = filename.substring(0, filename.indexOf(".model")).replaceAll("_", "") ===
        member.toLowerCase();
    console.log(`File: ${filename} Member: ${member} => match: ${match}`);
    return match;
};
