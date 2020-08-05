

// start google calendar open card list
const switchCalendar = document.querySelector('.switch-calendar');
const openCardList = () => {

    const switchCalendarImg = document.querySelector('.switch-calendar-img')
    const cardIssuesMainWrapper = document.querySelector('.card-issues-main-wrapper')

    if (cardIssuesMainWrapper.style.display === 'none') {
        cardIssuesMainWrapper.style.display = 'flex';
        switchCalendarImg.src = "./source/switch active.svg";

    } else {
        cardIssuesMainWrapper.style.display = 'none';
        switchCalendarImg.src = "./source/switch unactive.svg";
    }

}
switchCalendar.addEventListener('click', openCardList)
// end google calendar open card list


// start dedicate issue
const issueWrapper = document.querySelectorAll('.issue-wrapper')

issueWrapper.forEach(item => {
    item.addEventListener('click', event => {
        console.log(event.currentTarget);

        let menuButtonIssue = document.createElement('div')
        menuButtonIssue.style.width = 58 + 'px'
        menuButtonIssue.style.height = 86 + 'px'
        menuButtonIssue.style.background = '#3744BD'
        menuButtonIssue.style.position = 'absolute'
        menuButtonIssue.style.zIndex = 1

        menuButtonIssue.style.right = -32 + 'px'
        menuButtonIssue.style.borderRadius = 10 + 'px'

        event.currentTarget.appendChild(menuButtonIssue)
    }
    )
}
)
 
const issueDedicated = document.querySelectorAll('.issue')
issueDedicated.forEach(item => {
    item.addEventListener('click', (event) => {
        const currentItem = event.currentTarget;

        currentItem.style.background = "#FFFFFF"
        currentItem.style.borderRadius = 10 + 'px'

    }
    )
}
)
// end dedicate issue
