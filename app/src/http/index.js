export const roles = ['admin', 'user']

export const users = [
    {
        id: 1,
        firstName: 'Pasha',
        lastName: 'Petrov',
        role: 'admin',

        login: 'admin@mail.ru',
        password: 'admin'
    },
    {
        id: 2,
        firstName: 'Vlad',
        lastName: 'Malukov',
        role: 'user',

        login: 'user@mail.ru',
        password: 'user'
    },
]

export const news = [
    {
        id: 1,
        title: 'Новость 1',
        content: 'Содержание 1-ой новости',
        createdAt: '2022-04-24T17:22:38.505Z',
        status: 'opened', // opened | moderation
        author: {
            id: 1,
            firstName: 'Pasha',
            lastName: 'Petrov',
        }
    },
    {
        id: 2,
        title: 'Новость 2',
        content: 'Содержание 2-ой новости',
        createdAt: '2022-04-22T17:22:38.505Z',
        status: 'opened', // opened | moderation
        author: {
            id: 1,
            firstName: 'Pasha',
            lastName: 'Petrov',
        }
    },
    {
        id: 3,
        title: 'Новость 3',
        content: 'Содержание 3-ей новости',
        createdAt: '2022-03-22T17:22:38.505Z',
        status: 'opened', // opened | moderation
        author: {
            id: 2,
            firstName: 'Vlad',
            lastName: 'Malukov',
        }
    }
]