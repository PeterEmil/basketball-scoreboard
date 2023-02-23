console.log('it works!')

/* get score elements */
let homeScoreEl = document.getElementById('homeScore')
let guestScoreEl = document.getElementById('guestScore')
let homeLeadEl = document.getElementById('homeLead')
let guestLeadEl = document.getElementById('guestLead')
const start = 0
let homeScore = start
let guestScore = start

/* at first reset scores */
resetScore()

/* count score */
function homeScoreAdd(point) {
  homeScore += point
  homeScoreEl.textContent = homeScore
  showLeader()
}

function guestScoreAdd(point) {
  guestScore += point
  guestScoreEl.textContent = guestScore
  showLeader()
}

/* reset score */
function resetScore() {
  homeScore = guestScore = start
  homeScoreEl.textContent = guestScoreEl.textContent = start
  homeLeadEl.textContent = guestLeadEl.textContent = ''
}

/* show leader */
function showLeader() {
  // console.log("homeScore: " + homeScore) // check
  // console.log("guestScore: " + guestScore) // check
  if (homeScore > guestScore) {
    homeLeadEl.textContent = 'leader'
    guestLeadEl.textContent = ''
  } else if (homeScore < guestScore) {
    homeLeadEl.textContent = ''
    guestLeadEl.textContent = 'leader'
  } else {
    homeLeadEl.textContent = ''
    guestLeadEl.textContent = ''
  }
}