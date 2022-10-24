import type { URL } from 'url';
import type { PageData } from './$types';

interface Input {
    url: URL
}

export const load: PageData = ({ url: { pathname }} : Input) => {
    return {
        pathName: pathname
    }
}