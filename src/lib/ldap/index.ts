import {Client} from "ldapts";

const url = "ldap://schuelerweb.gym1.at:389";
const baseDN = "dc=gym1.at";
const adminDN = "cn=ldapbind,dc=gym1.at";
const adminPass = "B!nd2020";

export async function findUserByUsername(username: string) {
    const client = new Client({ url });

    try {
        // Admin-Bind (erforderlich, um Benutzer zu suchen)
        await client.bind(adminDN, adminPass);

        // Benutzer im LDAP-Verzeichnis suchen
        const { searchEntries } = await client.search(baseDN, {
            scope: "sub",
            filter: `(uid=${username})`,
        });

        if (searchEntries.length === 0) {
            throw new Error("Benutzer nicht gefunden");
        }

        console.log("Bind DN:", searchEntries[0].dn);
        return searchEntries[0].dn;
    } catch (error) {
        console.error("Fehler beim Suchen der Bind DN:", error);
        return null;
    } finally {
        await client.unbind();
    }
}
