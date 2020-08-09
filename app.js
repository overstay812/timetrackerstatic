

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


        let menuButtonIssue = document.createElement('div')
        menuButtonIssue.style.display = "flex"
        menuButtonIssue.style.flexDirection = "row"
        menuButtonIssue.style.justifyContent = "center"
        menuButtonIssue.style.alignItems = 'center'
        menuButtonIssue.style.width = 58 + 'px'
        menuButtonIssue.style.height = 86 + 'px'
        menuButtonIssue.style.background = '#3744BD'
        menuButtonIssue.style.position = 'absolute'
        menuButtonIssue.style.zIndex = 1
        menuButtonIssue.style.right = -32 + 'px'
        menuButtonIssue.style.borderRadius = 10 + 'px'
        menuButtonIssue.classList = 'issue-wrapper_menu-btn'
        event.currentTarget.appendChild(menuButtonIssue)

        event.currentTarget.style.boxShadow = `0px 15px 30px rgba(216, 226, 232, 0.12)`

        // create image inside 
        let issueMenuBtnImg = document.createElement('img')
        issueMenuBtnImg.src = "source/more-vertical.svg"
        issueMenuBtnImg.style.marginLeft = 20 + 'px'
        menuButtonIssue.appendChild(issueMenuBtnImg)

        // create dropdown menu
        menuButtonIssue.addEventListener('click', () => {
            const dropdownMenu = document.createElement('div')
            dropdownMenu.style.display = 'flex'
            dropdownMenu.style.flexDirection = 'column'
            dropdownMenu.style.justifyContent = 'center'
            dropdownMenu.style.alignItems = 'flex-start'
            dropdownMenu.style.position = 'absolute'
            dropdownMenu.style.marginTop = 93 + 'px'
            dropdownMenu.style.right = -32 + 'px'
            dropdownMenu.style.background = '#FFFFFF'
            dropdownMenu.style.paddingTop = 5 + 'px'
            dropdownMenu.style.paddingRight = 32 + 'px'
            dropdownMenu.style.paddingBottom = 23 + 'px'
            dropdownMenu.style.paddingLeft = 32 + 'px'
            dropdownMenu.style.borderRadius = 10 + 'px'
            dropdownMenu.style.boxShadow = `0px 15px 30px rgba(216, 226, 232, 0.12)`
            dropdownMenu.style.zIndex = 9999

            item.appendChild(dropdownMenu)




            // create links inside this menu
            const jiraLink = document.createElement('a')
            jiraLink.classList = 'issue_dropdownMenu_link'
            jiraLink.innerText = 'JIRA'
            jiraLink.href = ''
            dropdownMenu.appendChild(jiraLink)

            const duplicateaLink = document.createElement('a')
            duplicateaLink.classList = 'issue_dropdownMenu_link'
            duplicateaLink.innerText = 'Duplicate'
            duplicateaLink.href = ''
            dropdownMenu.appendChild(duplicateaLink)

            const addToFavoriteLink = document.createElement('a')
            addToFavoriteLink.classList = 'issue_dropdownMenu_link'
            addToFavoriteLink.innerText = 'Add to favorite'
            addToFavoriteLink.href = ''
            dropdownMenu.appendChild(addToFavoriteLink)

            const deleteLink = document.createElement('a')
            deleteLink.classList = 'issue_dropdownMenu_link'
            deleteLink.innerText = 'Delete'
            dropdownMenu.appendChild(deleteLink)
            deleteLink.href = ''

            const linksCollection = document.querySelectorAll('.issue_dropdownMenu_link')
            linksCollection.forEach(item => {
                item.style.fontSize = 16 + 'px'
                item.style.marginTop = 18 + 'px'
                item.style.color = '#4F4F4F'
                item.style.textDecoration = 'none'
            })
        }
        )

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

// start current issue  dropdown menu`

// start opening nested issue
const issuePlayBtn = document.querySelector('.issue-play-btn')
const nestedIssueCollection = document.querySelectorAll('.nested-issue')

issuePlayBtn.addEventListener('click', (event) => {

    nestedIssueCollection.forEach(item => {
        event.stopPropagation()
        if (item.style.display === 'none') {
            item.style.display = 'flex'
            issuePlayBtn.innerHTML = '^'

        } else {
            item.style.display = 'none'
            issuePlayBtn.innerHTML = '2'
        }

        item.firstElementChild.style.background = '#FCFDFE'
        item.firstElementChild.style.borderRadius = 10 + 'px'

    })

}
)
// end opening nested issue

// start time tracking: dropdown menu
const timeTrackerDropdownMenuBtn = document.querySelector('.more-horizontal')

timeTrackerDropdownMenuBtn.addEventListener('click', () => {
    const timeTrackerDropdownMenu = document.querySelector('.more-horizontal_dropdown-menu')
    if (timeTrackerDropdownMenu.style.display === 'none') {
        timeTrackerDropdownMenu.style.display = 'flex'
    } else {
        timeTrackerDropdownMenu.style.display = 'none'
    }
}
)
// end time tracking: dropdown menu

// start top calendar top button
const calendarTopBtn = document.querySelector('.top-buttons-button')
calendarTopBtn.addEventListener('click', () => {
    const calendar = document.querySelector('.top-buttons_calendar')
    if (calendar.style.display === 'none') {
        calendar.style.display = 'flex'
    } else {
        calendar.style.display = 'none'
    }
}
)
// end top calendar top button

// start dedicate calendar day
const calendarDayColl = document.querySelectorAll('.calendar-count')
calendarDayColl.forEach(item => {
    item.addEventListener('click', (event) => {
        event.currentTarget.style.background = '#3744BD'
        event.currentTarget.style.borderRadius = 50 + '%'
        event.currentTarget.style.color = "white"

    }
    )
})
// end dedicate calendar day

// start tracking current issue
const issue = document.querySelectorAll('.issue')

issue.forEach(item => {
    item.addEventListener('click', (event) => {
        // show worklog
        const newWorklogWrapper = document.querySelector('.new-worklog-wrapper')
        newWorklogWrapper.style.display = 'flex'
        const createNewWorklogWrapper = document.querySelector('.create-new-worklog-wrapper')
        createNewWorklogWrapper.style.display = 'none'

        // get worklog info  
        const issueInfoTitle = event.currentTarget.querySelector('.issue-info-title')
        const currentTitleInnerText = issueInfoTitle.innerText

        // set worklog title
        const worklogTitle = document.querySelector('.new-worklog_title')
        worklogTitle.innerText = currentTitleInnerText

        // get worklog time
        const issueSpendTime = event.currentTarget.querySelector('.issue-spend-time')
        const issueSpendTimeInnerText = issueSpendTime.innerText

        // set worklog time 
        const newWorklogTime = document.querySelector('.new-worklog_time')
        newWorklogTime.innerText = issueSpendTimeInnerText
    }
    )

})

// end tracking current issue