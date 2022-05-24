import staticContent from './assets/static.json'

export const pageHeader = staticContent.map(item => {
    return item.HOME_PAGE.content.header
});

console.log(pageHeader);