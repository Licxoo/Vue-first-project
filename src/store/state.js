let defaultCity = '杭州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  console.log(error)
}

export default {
  city: defaultCity
}
