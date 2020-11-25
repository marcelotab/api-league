/* eslint-disable no-unused-vars */
export enum Regexs {
    NOT_ALLOW_EMPTY_STRING = '.*\\S+.*',
    PHOTO_URL_VALID = '^\\/([A-z0-9-_+]+\\/)*([A-z0-9]+\\.(jpg|png))$',
    CONTAIN_ONLY_LETTERS = '/^[A-Za-z]+([\ A-Za-z]+)*/',
}