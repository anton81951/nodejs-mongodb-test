import { PATH_DB } from '../constants/contacts.js';
import {readFile} from 'fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await readFile(PATH_DB, 'utf-8');
        return JSON.parse(data);

    } catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
