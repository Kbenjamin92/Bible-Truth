import staticContent from './assets/static.json'

export const pageHeader = staticContent.map(item => {
    return item.HOME_PAGE.content.headerText
});

export const mainContent = staticContent.map(item => {
    return item.HOME_PAGE.content.mainSection
});

export const subText = staticContent.map(item => {
    return item.HOME_PAGE.content.subText
});

export const searchButton = staticContent.map(item => {
    return item.HOME_PAGE.content.searchButton
});