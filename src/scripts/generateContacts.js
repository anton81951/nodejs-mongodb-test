import { readFile, writeFile } from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
    try {
        let contacts = [];

        const data = await readFile(PATH_DB, 'utf8');
        contacts = JSON.parse(data);

        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }

        await writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
        console.log(`${number} contacts added`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

generateContacts(5);
