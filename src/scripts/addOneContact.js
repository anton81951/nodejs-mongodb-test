import { readFile, writeFile } from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
    try {
        const data = await readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);

        const newContact = createFakeContact();
        contacts.push(newContact);

        await writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
        console.log(`Added one contact: ${newContact.name}`);
    } catch (error) {
        console.error('Error adding contact:', error);
    }
};

addOneContact();
