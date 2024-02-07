export async function fetchAssessmentsData() {
  const response = await fetch(
    'https://stagingstudentpython.edwisely.com/reactProject/assessments'
  )
  const res = await response.json()

  if (res.status !== 200)
    throw new Error(`Data Fetching Failed with ${res.status}`)

  return res.assessments
}

export async function fetchHomePageData() {
  const response = await fetch(
    'https://stagingstudentpython.edwisely.com/reactProject/dashboardData'
  )

  const res = await response.json()

  if (res.status !== 200)
    throw new Error(`Data Fetching Failed with ${res.status}`)

  console.log(res)
  return res
}
