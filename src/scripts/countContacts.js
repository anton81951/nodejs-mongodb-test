import { PATH_DB } from '../constants/contacts.js';
import {readFile} from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = await readFile(PATH_DB, 'utf-8');
        return JSON.parse(data).length;

    } catch (error) {
        console.error('Error reading or parsing the file:', error);
    }
};

console.log(await countContacts());
