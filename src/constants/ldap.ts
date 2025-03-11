export const LDAP_DN = (username: string, domain: string, code: string) => {
    return `cn=${username},dc=${domain},dc=${code}`;
};
