import { PATH_DB } from '../constants/contacts.js';
import { readFile, writeFile } from 'fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);

        if (contacts.length !== 0) {
            contacts.pop();
            await writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
            console.log('Removed the last contact');
        } else {
            console.log('No contacts!');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

removeLastContact();
