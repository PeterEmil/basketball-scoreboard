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
function homeScoreAdd1() {
  homeScore += 1
  homeScoreEl.textContent = homeScore
  showLeader()
}
function homeScoreAdd2() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
  showLeader()
}
function homeScoreAdd3() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
  showLeader()
}
function guestScoreAdd1() {
  guestScore += 1
  guestScoreEl.textContent = guestScore
  showLeader()
}
function guestScoreAdd2() {
  guestScore += 2
  guestScoreEl.textContent = guestScore
  showLeader()
}
function guestScoreAdd3() {
  guestScore += 3
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
  } else {
    homeLeadEl.textContent = ''
    guestLeadEl.textContent = 'leader'
  }
}