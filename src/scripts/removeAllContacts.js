import { PATH_DB } from '../constants/contacts.js';
import {writeFile} from 'fs/promises';

export const removeAllContacts = async () => {
try {
await writeFile(PATH_DB, '[]', 'utf-8');
console.log('Removed all');
} catch (error) {
    console.log(`error: ${error}`);
}
};

removeAllContacts();
